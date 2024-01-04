import React, { useEffect, useState } from "react";
import axios from "axios";

import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";

import CloseButton from "./CloseButton";

import { removeFromcart, emptyAllItems } from "../Redux/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cart);

  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (cartItems.length === 0) {
      setTotal(0);
    }

    cartItems.map((item) => {
      console.log(total);
      const newTotal = cartItems.reduce(
        (acc, item) => acc + item.item.price,
        0
      );
      setTotal(newTotal);
    });
  }, [cartItems]);

  console.log(cartItems);

  return (
    <div className="cart">
      <div className="title">
        <h1>My Cart</h1>
      </div>

      <div className="cart-items">
        {cartItems.length > 0 ? (
          <div className="item-parent">
            <div className="items">
              {cartItems.map((item, index) => {
                return (
                  <div className="item" key={item.item.id}>
                    <img src={item.item.images[0]} />
                    <div className="detail">
                      <h3>Title : {item.item.title}</h3>
                      <h3>Price : ${item.item.price}</h3>
                    </div>
                    <button
                      className="add-to-cart"
                      onClick={() => dispatch(removeFromcart({ id: index }))}
                    >
                      Remove To Cart
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="no-items">
            No Items Available, Please add your items to checkout
          </div>
        )}

        <div className="checkout-list">
          <h1 className="checkout-header">Checkout List</h1>
          <div className="list">
            {cartItems.map((item, index) => {
              return (
                <div className="indi-list">
                  <h3>
                    {index + 1}. {item.item.title}
                  </h3>
                  <h3>${item.item.price}</h3>
                </div>
              );
            })}
          </div>
          <div className="border"></div>
          <div className="total">
            <h3>Total</h3>
            <h3>${total}</h3>
          </div>

          <div className="border"></div>

          <CloseButton />
        </div>
      </div>
    </div>
  );
};

export default Cart;
