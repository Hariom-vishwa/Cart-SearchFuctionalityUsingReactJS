import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <h1>This is Homepage.</h1>
      <h2>You can access other pages from here...</h2>
      <Link to="/product">Products</Link>
    </>
  );
}
