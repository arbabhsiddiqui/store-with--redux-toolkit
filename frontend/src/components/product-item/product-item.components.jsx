import React from "react";

import "./product.styles.css";

const ProductItem = ({ product }) => {
  const { title, image, price } = product;
  return (
    <div className="product">
      <div className="img-container">
        <img src={`http://localhost:3000${image}`} alt="" />
        <div className="addCart">
          <i className="fas fa-shopping-cart"></i>
        </div>

        <ul className="side-icons">
          <span>
            <i className="fas fa-search"></i>
          </span>
          <span>
            <i className="far fa-heart"></i>
          </span>
          <span>
            <i className="fas fa-sliders-h"></i>
          </span>
        </ul>
      </div>
      <div className="bottom">
        <div>{title}</div>
        <div className="price">
          <span>Rs. {price}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
