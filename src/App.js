import React from "react";

import { Routes, Route } from "react-router-dom";

import { Provider } from "react-redux";

import Navigation from "./Components/Navigation";
import Home from "./Components/Home";
import Cart from "./Components/Cart";

import "./App.css";
import store from "./Redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Navigation />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Provider>
  );
};

export default App;
