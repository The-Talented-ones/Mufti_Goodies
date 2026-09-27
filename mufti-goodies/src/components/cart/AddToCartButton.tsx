// src/components/cart/AddToCartButton.tsx

import { FiShoppingBag } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

import { useCart } from "../../context/CartContext";
import type { Product, ProductVariant } from "../../types/product";

interface AddToCartButtonProps {
  product: Product;
  variant: ProductVariant;
  quantity?: number;
  className?: string;
  /** If true, navigate to /cart after adding. Default: true */
  redirectToCart?: boolean;
}

export default function AddToCartButton({
  product,
  variant,
  quantity = 1,
  className = "",
  redirectToCart = true,
}: AddToCartButtonProps) {
  const { addItem, closeCart } = useCart();
  const navigate = useNavigate();

  const handleAdd = () => {
    addItem(
      {
        productId: product.id,
        slug: product.slug,
        name: product.name,
        image: product.image,
        imageAlt: product.imageAlt,
        category: product.category,
        variant,
      },
      quantity,
    );

    if (redirectToCart) {
      // Don't auto-open the drawer; go straight to the cart page instead
      closeCart();
      navigate("/cart");
    }
  };

  return (
    <button
      type="button"
      onClick={handleAdd}
      className={`inline-flex items-center justify-center gap-2 rounded-full
        border border-[var(--color-primary,#74382E)] bg-white
        px-7 py-3.5 text-sm font-semibold
        text-[var(--color-primary,#74382E)]
        transition-all duration-300
        hover:-translate-y-0.5
        hover:bg-[var(--color-primary,#74382E)] hover:text-white
        hover:shadow-lg ${className}`}
    >
      <FiShoppingBag size={15} aria-hidden="true" />
      Add to cart
    </button>
  );
}