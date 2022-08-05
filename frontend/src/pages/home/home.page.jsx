import { Image } from "react-bootstrap";
// Import Swiper styles
import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";

import imgArr from "../../assets/image/hero.png";
import promo1 from "../../assets/image/promo/promo1.jpg";
import { useProductsQuery } from "../../features/product/productApi";
import ProductItem from "../../components/product-item/product-item.components";
import Footer from "../../components/footer/footer.component";
import brand1 from "../../assets/image/brand/brand1.png";
import brand2 from "../../assets/image/brand/brand2.png";
import brand3 from "../../assets/image/brand/brand3.png";
import brand4 from "../../assets/image/brand/brand4.png";
import brand5 from "../../assets/image/brand/brand5.png";
import brand6 from "../../assets/image/brand/brand6.png";
import brand7 from "../../assets/image/brand/brand7.png";
import Categories from "../../components/categories/categories.component";

const Home = () => {
  const { isSuccess, data: products } = useProductsQuery();
  const BrandObj = [brand1, brand2, brand3, brand4, brand5, brand6, brand7];
  console.log(products);
  return (
    <>
      <div className="hero">
        <div className="left">
          <span>Exclusive Sales</span>
          <h1>UP TO 50% OFF ON SALES</h1>
          <small>Get all exclusive offers for the season</small>
          <div>View Collection </div>
        </div>
        <div className="right">
          <Image src={imgArr} fluid />
        </div>
      </div>
      <Categories />

      <section className="section advert">
        <div className="advert-layout container">
          <div className="item">
            <Image src={promo1} alt="" className="img" />
            <div className="content left">
              <span>Exclusive Sales</span>
              <h3>Spring Collections</h3>
              <div>View Collection</div>
            </div>
          </div>
          <div className="item">
            <Image src={promo1} alt="" className="img" />
            <div className="content  right">
              <span>New Trending</span>
              <h3>Designer Bags</h3>
              <div>Shop Now </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Products --> */}
      <section className="section products">
        <div className="title">
          <h2>New Products</h2>
          <span>
            Select from the premium product brands and save plenty money
          </span>
        </div>

        <div className="product-layout">
          {isSuccess &&
            products.products
              .slice(0, 8)
              .map((product) => (
                <ProductItem key={product.id} product={product} />
              ))}
        </div>
      </section>

      {/* <!-- BRANDS --> */}
      <section className="section ">
        <div className="brands">
          <div className="title">
            <h2>Shop by Brand</h2>
            <span>
              Select from the premium product brands and save plenty money
            </span>
          </div>

          <div className="brand-layout container">
            <div className="glide" id="glide1">
              <div className="glide__track" data-glide-el="track">
                <ul className="glide__slides">
                  <Swiper
                    spaceBetween={50}
                    slidesPerView={3}
                    autoplay={{ delay: 1500 }}
                    loop
                  >
                    {BrandObj.map((brand, i) => {
                      i++;
                      return (
                        <SwiperSlide key={i}>
                          <img src={brand} alt="" />
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
