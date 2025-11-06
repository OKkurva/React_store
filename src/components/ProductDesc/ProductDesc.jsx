import React from "react";
import "./ProductDesc.css";

const ProductDesc = ({ id, img, title, desc }) => {
  return (
    <div class="main-wrapper">
      <div class="keyboard">
        <img class="keyboard" src={img} alt="photo" />
      </div>
      <p>
        <h1> {title} </h1>
      </p>
      <p> {desc}</p>
    </div>
  );
};
export default ProductDesc;
