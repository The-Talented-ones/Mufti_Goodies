import type { ReactNode } from "react";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({
  children,
}: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-[var(--color-background)]">

      <Navbar />

      <main>
        {children}
      </main>

      <Footer />

    </div>
  );
}