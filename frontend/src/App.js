import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css/bundle";
import { useSelector, useDispatch } from "react-redux";

// components
import Header from "./components/header/header.component";

// reducer
import { setUser } from "./features/user/authSlice";
// pages
import Home from "./pages/home/home.page";
import Shop from "./pages/shop/shop.component";
import About from "./pages/about/about.page";
import Contact from "./pages/contact/contact.page";
import Login from "./pages/login/login.page";
import ProductList from "./pages/product/product-list.page";
import AddProduct from "./pages/product/product-add.page";
import Layout from "./components/layout/layout.component";

function App() {
  SwiperCore.use([Autoplay]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />

        <Route path="addproduct" element={<AddProduct />} />

        <Route path="/products" element={<ProductList />} />
      </Route>
    </Routes>
  );
}

export default App;
