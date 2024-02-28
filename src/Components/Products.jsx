import React, { useState } from "react";
import "./Products.css";
import productsjson from "../assets/products.json";
import { useContext } from "react";
import { cartContext } from "../App";

function Products() {
  const [cart, setCart] = useContext(cartContext);

  // const Plus = () => {

  // };

  // const Minus = () => {};

  return (
    <div className="products-container">
      <div className="products">
        {productsjson.map((product) => {
          return (
            <div className="product" key={product.id}>
              <div className="img">
                <img src={product.image} />
              </div>
              <div className="product-content">
                <h2>{product.food_item}</h2>
                <p>Price: {product.price_INR}</p>
                {cart.includes(product) ? (
                  <button
                    className="removeCart"
                    onClick={() => {
                      setCart(
                        cart.filter((c) => {
                          return c.id !== product.id;
                        })
                      );
                    }}
                  >
                    REMOVE
                  </button>
                ) : (
                  <button
                    className="addCart"
                    onClick={() => {
                      setCart([...cart, product]);
                    }}
                  >
                    ADD TO CART
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Products;
