import React, { useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";


export default function Cart(props) {

  const [cartpro, setCartPro] = useState();

  const removeItem = (id) => {
    const filteredItems = cartpro.filter((item) => item.id!==id)
    setCartPro(filteredItems)
    props.filteredCart(filteredItems)
    console.log("ok")
  };



  return (
    <>
      <h1
        style={{
          borderBottom: "1px solid silver",
          width: "500px",
          padding: "20px",
        }}
      >
        There are {props.carts.length} items in cart.
      </h1>

      {/* Items  */}

      <div className="cartCont">
        {props.carts.map((product, i) => (
          <div key={i} className="item">
            <Link to={`/product/${product.name}`}>
              <img src={product.photo} alt={product.name} />
            </Link>
            <div className="specs">
              <h2>{product.name}</h2>
              <h3>Color: {product.color}</h3>
              <h3>Size: {product.size}</h3>
              <h3>Pattern: {product.details.pattern}</h3>
              <h2>Price: ₹{product.price}/-</h2>
            </div>
            <div className="actionBtns">
              <button className="buyNow">Buy Now</button>
              <button className="remove" onClick={() => removeItem(product.id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
