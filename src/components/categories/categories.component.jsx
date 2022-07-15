import React from "react";
import { useCategoriesQuery } from "../../features/categories/categoriesApi";
import promo1 from "../../assets/image/promo/promo1.jpg";
import promo2 from "../../assets/image/promo/promo2.jpg";
import promo3 from "../../assets/image/promo/promo3.jpg";
import promo4 from "../../assets/image/promo/promo4.jpg";
const Categories = () => {
  const { data, isLoading, isFetching, isSuccess } = useCategoriesQuery();

  const promoobj = [promo1, promo2, promo3, promo4];

  return (
    <div>
      <section className="section promotion">
        <div className="title">
          <h2>Categories Collections</h2>
          <span>Select from the premium product and save plenty money</span>
        </div>

        <div className="promotion-layout container">
          {isLoading && <>Loading.....</>}
          {isFetching && <>isFetching.....</>}
          {isSuccess &&
            data.map((item, index) => {
              return (
                <div className="promotion-item" key={`item${index}`}>
                  <img src={promoobj[index]} alt="" />
                  <div className="promotion-content">
                    <h3>{item}</h3>
                    <a>Categories NOW</a>
                  </div>
                </div>
              );
            })}
        </div>
      </section>
    </div>
  );
};

export default Categories;
