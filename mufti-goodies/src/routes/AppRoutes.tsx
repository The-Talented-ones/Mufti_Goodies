import { Navigate, Route, Routes } from "react-router-dom";

import Home from "../pages/Home/Home";
import OurStory from "../pages/OurStory/OurStory";
import Shop from "../pages/Shop/Shop";
import Heritage from "../pages/Heritage/Heritage";

function PlaceholderPage({ title }: { title: string }) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 text-center">
      <h1 className="text-4xl font-bold text-[var(--color-primary)]">{title}</h1>
      <p className="mt-4 text-[var(--color-muted)]">
        This page is under construction.
      </p>
    </section>
  );
}

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/product" element={<PlaceholderPage title="Product" />} />
      <Route path="/cart" element={<PlaceholderPage title="Cart" />} />
      <Route path="/checkout" element={<PlaceholderPage title="Checkout" />} />
      <Route path="/heritage" element={<Heritage />} />
      <Route path="/journal" element={<PlaceholderPage title="Journal" />} />
      <Route path="/our-story" element={<OurStory />} />
      <Route path="/delivery" element={<PlaceholderPage title="Delivery" />} />
      <Route path="/dodo-ikire" element={<PlaceholderPage title="Dodo Ikire" />} />
      <Route path="/contact" element={<PlaceholderPage title="Contact" />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
