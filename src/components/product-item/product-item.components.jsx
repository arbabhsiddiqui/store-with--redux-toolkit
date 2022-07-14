import React from "react";

const ProductItem = ({ product }) => {
  const { title, image, category, price, rating } = product;
  return (
    <div class="product">
      <div class="img-container">
        <img src={image} alt="" />
        <div class="addCart">
          <i class="fas fa-shopping-cart"></i>
        </div>

        <ul class="side-icons">
          <span>
            <i class="fas fa-search"></i>
          </span>
          <span>
            <i class="far fa-heart"></i>
          </span>
          <span>
            <i class="fas fa-sliders-h"></i>
          </span>
        </ul>
      </div>
      <div class="bottom">
        <a href="">{title}</a>
        <div class="price">
          <span>Rs. {price}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
