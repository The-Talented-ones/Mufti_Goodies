// src/App.tsx

import { BrowserRouter } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import AppRoutes from "./routes/AppRoutes";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <MainLayout>
          <AppRoutes />
        </MainLayout>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;