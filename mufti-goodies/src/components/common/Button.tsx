import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  to?: string;
  className?: string;
}

export default function Button({
  children,
  variant = "primary",
  to,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300";

  const variants = {
    primary:
      "bg-[var(--color-primary)] text-white hover:bg-[#5f2d25]",

    secondary:
      "bg-[var(--color-accent)] text-white hover:brightness-95",

    outline:
      "border border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white",
  };

  const styles = `${baseStyles} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={styles}
      {...props}
    >
      {children}
    </button>
  );
}