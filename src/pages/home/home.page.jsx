import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
} from "react-bootstrap";
// Import Swiper styles
import "swiper/css/bundle";
import Shop from "../shop/shop.component";
import imgArr from "../../assets/image/hero.png";
import promo1 from "../../assets/image/promo/promo1.jpg";
import { useProductsQuery } from "../../features/product/productApi";
import ProductItem from "../../components/product-item/product-item.components";
import Footer from "../../components/footer/footer.component";
import { Swiper, SwiperSlide } from "swiper/react";
import brand1 from "../../assets/image/brand/brand1.png";
import brand2 from "../../assets/image/brand/brand2.png";
import brand3 from "../../assets/image/brand/brand3.png";
import brand4 from "../../assets/image/brand/brand4.png";
import brand5 from "../../assets/image/brand/brand5.png";
import brand6 from "../../assets/image/brand/brand6.png";
import brand7 from "../../assets/image/brand/brand7.png";

const Home = () => {
  const {
    isLoading,
    isFetching,
    isSuccess,
    data: products,
    isError,
  } = useProductsQuery();
  const BrandObj = [brand1, brand2, brand3, brand4, brand5, brand6, brand7];
  return (
    <>
      <div class="hero">
        <div class="left">
          <span>Exclusive Sales</span>
          <h1>UP TO 50% OFF ON SALES</h1>
          <small>Get all exclusive offers for the season</small>
          <a href="">View Collection </a>
        </div>
        <div class="right">
          <Image src={imgArr} fluid />
        </div>
      </div>
      <Shop />

      <section class="section advert">
        <div class="advert-layout container">
          <div class="item">
            <Image src={promo1} alt="" className="img" />
            <div class="content left">
              <span>Exclusive Sales</span>
              <h3>Spring Collections</h3>
              <a href="">View Collection</a>
            </div>
          </div>
          <div class="item">
            <Image src={promo1} alt="" class="img" />
            <div class="content  right">
              <span>New Trending</span>
              <h3>Designer Bags</h3>
              <a href="">Shop Now </a>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Products --> */}
      <section class="section products">
        <div class="title">
          <h2>New Products</h2>
          <span>
            Select from the premium product brands and save plenty money
          </span>
        </div>

        <div class="product-layout">
          {isSuccess &&
            products
              .slice(0, 8)
              .map((product) => (
                <ProductItem key={product.id} product={product} />
              ))}
        </div>
      </section>

      {/* <!-- BRANDS --> */}
      <section class="section ">
        <div class="brands">
          <div class="title">
            <h2>Shop by Brand</h2>
            <span>
              Select from the premium product brands and save plenty money
            </span>
          </div>

          <div class="brand-layout container">
            <div class="glide" id="glide1">
              <div class="glide__track" data-glide-el="track">
                <ul class="glide__slides">
                  <Swiper
                    spaceBetween={50}
                    slidesPerView={3}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                    autoplay={{ delay: 3000 }}
                  >
                    {BrandObj.map((brand) => (
                      <SwiperSlide>
                        <img src={brand} alt="" />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Footer --> */}
      <Footer />
      {/* <!-- End Footer --> */}
    </>
  );
};

export default Home;