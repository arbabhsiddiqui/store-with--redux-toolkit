import React from "react";
import { useCategoriesQuery } from "../../features/categories/categoriesApi";
import { useProductsQuery } from "../../features/product/productApi";
import promo1 from "../../assets/image/promo/promo1.jpg";
import promo2 from "../../assets/image/promo/promo2.jpg";
import promo3 from "../../assets/image/promo/promo3.jpg";
import promo4 from "../../assets/image/promo/promo4.jpg";
const Shop = () => {
  const { data, isLoading, isFetching, isSuccess } = useCategoriesQuery();

  const promoobj = [promo1, promo2, promo3, promo4];

  return (
    <div>
      <section className="section promotion">
        <div className="title">
          <h2>Shop Collections</h2>
          <span>Select from the premium product and save plenty money</span>
        </div>

        <div className="promotion-layout container">
          {isLoading && <>Loading.....</>}
          {isFetching && <>isFetching.....</>}
          {isSuccess &&
            data.map((item, index) => {
              return (
                <div className="promotion-item" key={index}>
                  <img src={promoobj[index]} alt="" />
                  <div className="promotion-content">
                    <h3>{item}</h3>
                    <div>SHOP NOW</div>
                  </div>
                </div>
              );
            })}
        </div>
      </section>
    </div>
  );
};

export default Shop;
