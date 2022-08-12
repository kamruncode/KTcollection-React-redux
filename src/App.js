import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Products from "./components/Products";
import { Routes, Route } from "react-router-dom";
import Product from "./components/Product";
import Home from "./components/home/Home";
import Cart from "./components/Cart";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="products/product/:id" element={<Product />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
