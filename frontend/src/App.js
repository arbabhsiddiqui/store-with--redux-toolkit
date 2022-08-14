import { Routes, Route } from "react-router-dom";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css/bundle";

// components
import Layout from "./components/layout/layout.component";
import RequireAuth from "./components/require-auth/require-auth.component";
import RequireAdmin from "./components/require-admin/require-admin.component";

// pages
import Home from "./pages/home/home.page";
import Shop from "./pages/shop/shop.component";
import About from "./pages/about/about.page";
import Contact from "./pages/contact/contact.page";
import Login from "./pages/login/login.page";
import AddProduct from "./pages/product/product-add.page";
import NotFound from "./pages/not-found/not-found.page";
import Unauthorized from "./pages/unauthorized/unauthorized.page";

function App() {
  SwiperCore.use([Autoplay]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="unauthorized" element={<Unauthorized />} />

        {/* user routes */}
        <Route element={<RequireAuth />}>
          <Route path="/add" element={<AddProduct />} />
        </Route>

        {/* admin routes */}
        <Route element={<RequireAdmin />}>
          <Route path="addproduct" element={<AddProduct />} />
        </Route>

        {/*  page not found */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
