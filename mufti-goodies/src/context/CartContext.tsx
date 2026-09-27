// src/context/CartContext.tsx

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from "react";
import type { ReactNode } from "react";

import type { AddToCartPayload, CartItem } from "../types/cart";

/* =====================================================
   STORAGE KEY
====================================================== */

const STORAGE_KEY = "mg:cart";

/* =====================================================
   REDUCER
====================================================== */

type CartAction =
  | { type: "hydrate"; items: CartItem[] }
  | { type: "add"; item: CartItem }
  | { type: "remove"; id: string }
  | { type: "setQuantity"; id: string; quantity: number }
  | { type: "increment"; id: string }
  | { type: "decrement"; id: string }
  | { type: "clear" };

function cartReducer(state: CartItem[], action: CartAction): CartItem[] {
  switch (action.type) {
    case "hydrate":
      return action.items;

    case "add": {
      const existing = state.find((i) => i.id === action.item.id);
      if (existing) {
        return state.map((i) =>
          i.id === action.item.id
            ? { ...i, quantity: i.quantity + action.item.quantity }
            : i,
        );
      }
      return [...state, action.item];
    }

    case "remove":
      return state.filter((i) => i.id !== action.id);

    case "setQuantity":
      return action.quantity <= 0
        ? state.filter((i) => i.id !== action.id)
        : state.map((i) =>
            i.id === action.id ? { ...i, quantity: action.quantity } : i,
          );

    case "increment":
      return state.map((i) =>
        i.id === action.id ? { ...i, quantity: i.quantity + 1 } : i,
      );

    case "decrement":
      return state
        .map((i) =>
          i.id === action.id ? { ...i, quantity: i.quantity - 1 } : i,
        )
        .filter((i) => i.quantity > 0);

    case "clear":
      return [];

    default:
      return state;
  }
}

/* =====================================================
   CONTEXT
====================================================== */

interface CartContextValue {
  items: CartItem[];
  itemCount: number;      // total quantity
  lineCount: number;      // number of distinct lines
  subtotal: number;       // in Naira
  isOpen: boolean;

  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;

  addItem: (payload: AddToCartPayload, quantity?: number) => void;
  removeItem: (id: string) => void;
  setQuantity: (id: string, quantity: number) => void;
  increment: (id: string) => void;
  decrement: (id: string) => void;
  clear: () => void;

  /** Check if a product:size is already in the cart */
  hasItem: (productId: string, size: string) => boolean;
}

const CartContext = createContext<CartContextValue | null>(null);

/* =====================================================
   PROVIDER
====================================================== */

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, dispatch] = useReducer(cartReducer, []);
  const [isOpen, setIsOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  /* Hydrate from localStorage */
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as CartItem[];
        if (Array.isArray(parsed)) {
          dispatch({ type: "hydrate", items: parsed });
        }
      }
    } catch {
      /* ignore corrupt storage */
    } finally {
      setHydrated(true);
    }
  }, []);

  /* Persist to localStorage */
  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      /* ignore quota errors */
    }
  }, [items, hydrated]);

  /* Lock body scroll when drawer is open */
  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  /* Close on Escape */
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  /* Actions */
  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);
  const toggleCart = useCallback(() => setIsOpen((o) => !o), []);

  const addItem = useCallback(
    (payload: AddToCartPayload, quantity = 1) => {
      const item: CartItem = {
        id: `${payload.productId}:${payload.variant.size}`,
        productId: payload.productId,
        slug: payload.slug,
        name: payload.name,
        image: payload.image,
        imageAlt: payload.imageAlt,
        category: payload.category,
        size: payload.variant.size,
        price: payload.variant.price,
        quantity,
      };
      dispatch({ type: "add", item });
      setIsOpen(true); // auto-open drawer on add
    },
    [],
  );

  const removeItem = useCallback(
    (id: string) => dispatch({ type: "remove", id }),
    [],
  );

  const setQuantity = useCallback(
    (id: string, quantity: number) =>
      dispatch({ type: "setQuantity", id, quantity }),
    [],
  );

  const increment = useCallback(
    (id: string) => dispatch({ type: "increment", id }),
    [],
  );

  const decrement = useCallback(
    (id: string) => dispatch({ type: "decrement", id }),
    [],
  );

  const clear = useCallback(() => dispatch({ type: "clear" }), []);

  const hasItem = useCallback(
    (productId: string, size: string) =>
      items.some((i) => i.productId === productId && i.size === size),
    [items],
  );

  /* Derived */
  const { itemCount, lineCount, subtotal } = useMemo(() => {
    let count = 0;
    let total = 0;
    for (const i of items) {
      count += i.quantity;
      total += i.quantity * i.price;
    }
    return { itemCount: count, lineCount: items.length, subtotal: total };
  }, [items]);

  const value: CartContextValue = {
    items,
    itemCount,
    lineCount,
    subtotal,
    isOpen,
    openCart,
    closeCart,
    toggleCart,
    addItem,
    removeItem,
    setQuantity,
    increment,
    decrement,
    clear,
    hasItem,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

/* =====================================================
   HOOK
====================================================== */

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used inside <CartProvider>");
  }
  return ctx;
}