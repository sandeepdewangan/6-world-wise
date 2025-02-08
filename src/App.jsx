import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import PricingPage from "./pages/PricingPage";
import LoginPage from "./pages/LoginPage";
import PageNotFoundPage from "./pages/PageNotFoundPage";
import WorldWisePage from "./pages/WorldWisePage";
import { useEffect, useState } from "react";
import Cities from "./components/WorldWise/Cities";

export default function App() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState();

  useEffect(function () {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch("http://localhost:9000/cities");
        const data = await res.json();
        setCities(data);
      } catch {
        console.log("Something went wrong");
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="product" element={<ProductPage />} />
        <Route path="pricing" element={<PricingPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="worldwise" element={<WorldWisePage />}>
          {/* Default route */}
          <Route
            index
            element={<Cities cities={cities} isLoading={isLoading} />}
          />
          <Route
            path="cities"
            element={<Cities cities={cities} isLoading={isLoading} />}
          />
          <Route path="form" element={<p1>Form</p1>} />
          <Route path="countries" element={<p1>List of Countries</p1>} />
        </Route>
        <Route path="*" element={<PageNotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
