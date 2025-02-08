import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import PricingPage from "./pages/PricingPage";
import LoginPage from "./pages/LoginPage";
import PageNotFoundPage from "./pages/PageNotFoundPage";
import WorldWisePage from "./pages/WorldWisePage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="product" element={<ProductPage />} />
        <Route path="pricing" element={<PricingPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="worldwise" element={<WorldWisePage />}>
          {/* Default route */}
          <Route index element={<p1>Default Route</p1>} />
          <Route path="cities" element={<p1>List of Cities</p1>} />
          <Route path="form" element={<p1>Form</p1>} />
          <Route path="countries" element={<p1>List of Countries</p1>} />
        </Route>
        <Route path="*" element={<PageNotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
