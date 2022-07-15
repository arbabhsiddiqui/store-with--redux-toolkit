import React from "react";
import { useProductsQuery } from "../../features/product/productApi";
import ProductItem from "../../components/product-item/product-item.components";
const Shop = () => {
  const {
    data: products,
    isLoading,
    isFetching,
    isSuccess,
  } = useProductsQuery();

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
            products.map((product) => {
              return <ProductItem key={product.id} product={product} />;
            })}
        </div>
      </section>
    </div>
  );
};

export default Shop;
