import React, { useEffect, useState } from "react";
import axios from "axios";

import { useDispatch } from "react-redux";

import { addToCart } from "../Redux/cartSlice";

const Home = () => {
  const dispatch = useDispatch();

  const [displayItem, setDisplayItem] = useState([]);

  console.log(displayItem);

  useEffect(() => {
    axios
      .get(" https://dummyjson.com/products")
      .then((response) => setDisplayItem(response.data.products))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="home">
      <div className="title">
        <h1>All Items</h1>
      </div>

      <div className="item-parent">
        <div className="items">
          {displayItem.map((item) => {
            return (
              <div className="item" key={item.id}>
                <img src={item.images[0]} />
                <div className="detail">
                  <h3>Title : {item.title}</h3>
                  <h3>Price : ${item.price}</h3>
                </div>
                <button
                  className="add-to-cart"
                  onClick={() => dispatch(addToCart({ item }))}
                >
                  Add To Cart
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
