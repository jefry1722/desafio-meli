import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ProductDetailPage from "./pages/ProductDetailPage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProductDetailPage />
  </StrictMode>
);
