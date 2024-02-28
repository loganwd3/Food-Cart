import { createContext, useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Cart from "./Components/Cart";
import Products from "./Components/Products";

export const cartContext = createContext();
function App() {
  const [cart, setCart] = useState([]);
  return (
    <div>
      <cartContext.Provider value={[cart, setCart]}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </BrowserRouter>
      </cartContext.Provider>
    </div>
  );
}

export default App;
