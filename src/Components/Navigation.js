import React from "react";

import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navbar">
      <div className="brand">
        <h3>
          <Link to="/">Shopping Cart</Link>
        </h3>
      </div>
      <ul className="pages">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
