import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { cartContext } from "../App";
function Navbar() {
  const [cart, setCart] = useContext(cartContext);

  return (
    <div>
      <header>
        <h2 className="logo">FCART</h2>
        <ul>
          {/* <li>
            <Link to={"/"}>Home </Link>
          </li> */}
          <li>
            <Link to={"/products"}>Products </Link>
          </li>
          <li>
            <Link to={"/cart"}>Cart</Link>
            {cart.length ? <span>{cart.length}</span> : null}
          </li>
        </ul>
      </header>
    </div>
  );
}

export default Navbar;
