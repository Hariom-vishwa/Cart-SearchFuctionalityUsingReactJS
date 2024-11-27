import React from "react";
import { useParams } from "react-router-dom";
import { mensWear } from "./Product";
import "./assets/Cart.css";

export default function Specs(props) {
  function handleCart(prodId) {
    const findProd = mensWear.find((find) => find.id === prodId);
    props.list(findProd);
  }

  const { product } = useParams();
  const prod = mensWear.find((item) => item.name === product);

  if (!prod) return <h2>Product not found ! !</h2>;

  return (
    <>
      <div className="specsCont">
        <div className="leftPart">
          <img src={prod.photo} alt={prod.name} />
        </div>
        <div className="rightPart">
          <h1>Item Name: {prod.name}</h1>
          <div className="rightSpecs">
            <p>
              <strong>Price:</strong> <strong>₹{prod.price}/-</strong>
            </p>
            <p>
              <strong>Color:</strong> {prod.color}
            </p>
            <p>
              <strong>Size:</strong> {prod.size}
            </p>

            {Object.entries(prod.details).map(([key, value]) => (
              <p key={key}>
                <strong>{key}:</strong> {value}
              </p>
            ))}
          </div>
          <div className="actionBtns">
            <a href="#" className="buyNow">
              Buy Now
            </a>
            <button 
                style={{
                  backgroundColor: "tomato",
                  color: "#fff",
                  border: "none",
                }} className="addToCart" onClick={() => handleCart(prod.id)}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
