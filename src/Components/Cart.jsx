import React from "react";
import { useContext, useState } from "react";
import { cartContext } from "../App";
import "./Cart.css";
function Cart() {
  const [cart, setCart] = useContext(cartContext);
  const [quantity, setQuantity] = useState(1);
  const cartTotal = cart.reduce(
    (acc, curr) => acc + parseInt(curr.price_INR),
    0
  );
  // console.log(cartTotal);
  return (
    <div className="carts">
      <div className="cart-container">
        {cart.map((product) => {
          return (
            <div className="cart" key={product.id}>
              <div className="img">
                <img src={product.image} />
              </div>
              <div className="item-name">
                <h2>{product.food_item}</h2>
                <p>price : {product.price_INR}</p>
              </div>
            </div>
          );
        })}
        {cart.length ? <p className="total">Total:{cartTotal}</p> : null}
      </div>
    </div>
  );
}

export default Cart;
