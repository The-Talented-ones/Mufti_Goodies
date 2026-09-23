import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FiMenu,
  FiShoppingBag,
  FiX,
} from "react-icons/fi";
import Mufti_logo from "../../assets/Mufti-Goodies-Logo.png"
import Container from "../common/Container";
import Button from "../common/Button";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "Our Story",
      path: "/our-story",
    },
    {
      label: "Shop",
      path: "/shop",
    },
    {
      label: "Heritage",
      path: "/heritage",
    },
    {
      label: "Delivery",
      path: "/delivery",
    },
    {
      label: "Journal",
      path: "/journal",
    },
    {
      label: "Contact",
      path: "/contact",
    },
  ];

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-background)]/95 backdrop-blur-md">
      <Container>
        <div className="flex h-20 items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            onClick={closeMenu}
            className="flex items-center gap-3"
          >
            <img
              src={Mufti_logo}
              alt="Mufti Goodies logo"
              className="h-30 w-5 w-auto object-contain"
            />
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `relative text-sm font-medium transition-colors ${
                    isActive
                      ? "text-[var(--color-primary)]"
                      : "text-[var(--color-muted)] hover:text-[var(--color-primary)]"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop actions */}
          <div className="hidden items-center gap-3 lg:flex">

            <Link
              to="/cart"
              aria-label="Shopping cart"
              className="relative flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-primary)] transition hover:bg-[var(--color-secondary)]"
            >
              <FiShoppingBag size={20} />

              {/* Cart count will be connected to Zustand later */}
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[var(--color-accent)] text-[10px] font-bold text-white">
                0
              </span>
            </Link>

            <Button to="/shop">
              Shop Now
            </Button>
          </div>

          {/* Mobile actions */}
          <div className="flex items-center gap-2 lg:hidden">

            <Link
              to="/cart"
              aria-label="Shopping cart"
              className="relative flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-primary)]"
            >
              <FiShoppingBag size={19} />

              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[var(--color-accent)] text-[10px] font-bold text-white">
                0
              </span>
            </Link>

            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={
                menuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-primary)]"
            >
              {menuOpen ? (
                <FiX size={21} />
              ) : (
                <FiMenu size={21} />
              )}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-[var(--color-border)] bg-[var(--color-background)] lg:hidden">
          <Container>
            <nav className="flex flex-col py-5">

              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `border-b border-[var(--color-border)] py-4 text-sm font-medium ${
                      isActive
                        ? "text-[var(--color-primary)]"
                        : "text-[var(--color-text)]"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}

              <Button
                to="/shop"
                onClick={closeMenu}
                className="mt-5 w-full"
              >
                Shop Now
              </Button>

            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}