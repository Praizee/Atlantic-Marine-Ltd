import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import HomePage from "./Pages/HomePage";
import ServicesPage from "./Pages/ServicesPage";
import ClientsPage from "./Pages/ClientsPage";
import AboutUsPage from "./Pages/AboutUsPage";
import QualityPolicyPage from "./Pages/QualityPolicyPage";
import ContactPage from "./Pages/ContactPage";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Dashboard />}>
        <Route path="/home" index element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/clients" element={<ClientsPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/quality-policy" element={<QualityPolicyPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}
