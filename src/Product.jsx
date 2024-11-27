import React from "react";
import { Link } from "react-router-dom";

export const mensWear = [
  {
    id: 1,
    photo: "https://m.media-amazon.com/images/I/61zXG2OWWgL._AC_UY1100_.jpg",
    name: "Straight Fit Jeans",
    color: "Light Blue",
    size: 32,
    price: 499,
    details: {
      material: "Denim",
      fit: "Straight Fit",
      pattern: "Solid",
      length: "Full Length",
      pockets: "5 Pockets",
      careInstructions: "Machine Wash",
      occasion: "Casual",
      brand: "Denim Co.",
      countryOfOrigin: "India",
    },
  },
  {
    id: 2,
    photo:
      "https://www.snitch.co.in/cdn/shop/files/5c2f787416549624179e94f26a709a5d.webp",
    name: "Slim Fit Chinos",
    color: "Khaki",
    size: 34,
    price: 699,
    details: {
      material: "Cotton Blend",
      fit: "Slim Fit",
      pattern: "Solid",
      length: "Full Length",
      pockets: "4 Pockets",
      careInstructions: "Machine Wash",
      occasion: "Casual",
      brand: "Snitch",
      countryOfOrigin: "India",
    },
  },
  {
    id: 3,
    photo:
      "https://images.bestsellerclothing.in/data/JJ/26-may-2023/209239202_g1.jpg?width=1080&height=1355&mode=fill&fill=blur&format=auto",
    name: "Polo T-Shirt",
    color: "Navy Blue",
    size: "L",
    price: 349,
    details: {
      material: "Cotton",
      fit: "Regular Fit",
      pattern: "Solid",
      sleeves: "Short Sleeves",
      neckStyle: "Polo Neck",
      careInstructions: "Machine Wash",
      occasion: "Casual",
      brand: "JJ",
      countryOfOrigin: "India",
    },
  },
  {
    id: 4,
    photo:
      "https://www.saintg.in/cdn/shop/files/Untitled-27.1.jpg?v=1703237545&width=1080",
    name: "Leather Jacket",
    color: "Black",
    size: "M",
    price: 2499,
    details: {
      material: "Leather",
      fit: "Slim Fit",
      pattern: "Solid",
      length: "Waist Length",
      sleeves: "Full Sleeves",
      closure: "Zip Closure",
      careInstructions: "Dry Clean",
      occasion: "Casual",
      brand: "Saint G",
      lining: "Polyester",
      countryOfOrigin: "India",
    },
  },
  {
    id: 5,
    photo:
      "https://www.sporto.in/cdn/shop/products/2_23030189-c443-4aa6-aa4e-7c1cd613a63a_1200x1600.jpg",
    name: "Casual Shorts",
    color: "Olive Green",
    size: 36,
    price: 599,
    details: {
      material: "Cotton",
      fit: "Regular Fit",
      pattern: "Solid",
      length: "Above Knee",
      pockets: "4 Pockets",
      careInstructions: "Machine Wash",
      occasion: "Casual",
      brand: "Sporto",
      countryOfOrigin: "India",
    },
  },
  {
    id: 6,
    photo:
      "https://5.imimg.com/data5/SELLER/Default/2021/8/NH/IK/JL/114353871/men-grey-plain-hoodies.jpg",
    name: "Hooded Sweatshirt",
    color: "Gray",
    size: "XL",
    price: 1199,
    details: {
      material: "Fleece",
      fit: "Regular Fit",
      pattern: "Solid",
      sleeves: "Full Sleeves",
      neckStyle: "Hooded",
      careInstructions: "Machine Wash",
      occasion: "Casual",
      brand: "Classic Hood",
      countryOfOrigin: "India",
    },
  },
  {
    id: 7,
    photo:
      "https://www.andamen.com/cdn/shop/products/01_bc099c88-3938-4b4d-bf63-6523ea805bc5.jpg",
    name: "Formal Dress Shirt",
    color: "White",
    size: 42,
    price: 799,
    details: {
      material: "Cotton",
      fit: "Slim Fit",
      pattern: "Solid",
      sleeves: "Full Sleeves",
      collar: "Pointed Collar",
      careInstructions: "Machine Wash",
      occasion: "Formal",
      brand: "Andamen",
      countryOfOrigin: "India",
    },
  },
  {
    id: 8,
    photo:
      "https://assets.ajio.com/medias/sys_master/root/20231116/cVVz/65562c23afa4cf41f58e15c8/-473Wx593H-469534189-black-MODEL.jpg",
    name: "Running Shoes",
    color: "Black",
    size: 10,
    price: 1299,
    details: {
      material: "Synthetic",
      fit: "Regular",
      soleMaterial: "Rubber",
      pattern: "Solid",
      closure: "Lace-Up",
      careInstructions: "Wipe Clean",
      occasion: "Sports",
      brand: "AJIO",
      archSupport: "Yes",
      countryOfOrigin: "India",
    },
  },
  {
    id: 9,
    photo:
      "https://assets.ajio.com/medias/sys_master/root/20230801/NcPl/64c91f48a9b42d15c9818c26/-473Wx593H-466385762-blue-MODEL.jpg",
    name: "Denim Jacket",
    color: "Blue",
    size: "L",
    price: 1999,
    details: {
      material: "Denim",
      fit: "Regular Fit",
      pattern: "Solid",
      length: "Waist Length",
      sleeves: "Full Sleeves",
      closure: "Buttoned",
      careInstructions: "Machine Wash",
      occasion: "Casual",
      brand: "Denim",
      countryOfOrigin: "India",
    },
  },
  {
    id: 10,
    photo:
      "https://getketchadmin.getketch.com/product/8905404271259/660/HLTR004577_6.jpg",
    name: "Cargo Pants",
    color: "Beige",
    size: 38,
    price: 899,
    details: {
      material: "Cotton",
      fit: "Regular Fit",
      pattern: "Solid",
      length: "Full Length",
      pockets: "6 Pockets",
      careInstructions: "Machine Wash",
      occasion: "Casual",
      brand: "Ketch",
      countryOfOrigin: "India",
    },
  },
];

export default function Product() {
  return (
    <>
      <h1>Men's Wear - Fashion</h1>

      <div className="itemsCont">
        {mensWear.map((data, i) => {
          return (
            <div key={i} className="item">
              <img src={data.photo} alt={data.name} />
              <div className="nameNcolor">
                <h2>{data.name}</h2>
                <h3>Price: ₹{data.price}/-</h3>
              </div>
              <Link className="viewDetails" to={`/product/${data.name}`}>
                {"View Details >>"}
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
