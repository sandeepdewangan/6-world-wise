import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import PricingPage from "./pages/PricingPage";
import PageNotFoundPage from "./pages/PageNotFoundPage";

export default function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="product" element={<ProductPage />} />
      <Route path="pricing" element={<PricingPage />} />
      <Route path="*" element={<PageNotFoundPage />} />
    </Routes>
  </BrowserRouter>
}
