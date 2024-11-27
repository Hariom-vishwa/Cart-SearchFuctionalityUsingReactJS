import React from "react";
import "./assets/header.css";
import { NavLink } from "react-router-dom";

export default function Header(props) {
  return (
    <>
      <header>
        <div className="leftNav">
          <h1>Logo</h1>
        </div>
        <div className="rightNav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/cart" className="cartLink">
            Cart
            <div className="itemCount">
              {props.cartcount.length}
              {/* {itemCount} */}
              </div>
          </NavLink>
          <NavLink to="/product">Product</NavLink>
        </div>
      </header>
    </>
  );
}
