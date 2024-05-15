import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./index.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProductDetailPage from "./pages/ProductDetailPage"; // Renamed ProductDetails to ProductDetailPage
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
///import { ShoppingCartProvider } from "./context/ShoppingCartContext";

const Layout = () => {
  return (
    <div>
      <div className="pb-20">
        <Navbar />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "products/",
        element: <Products />
      },
      {
        path: "product/:slug",
        element: <ProductDetailPage /> // Changed to ProductDetailPage
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "contact",
        element: <Contact />
      },
    ]
  }
]);

function App() {
{/*<ShoppingCartProvider>*/}
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
  {/*</ShoppingCartProvider>*/}
}

export default App;
