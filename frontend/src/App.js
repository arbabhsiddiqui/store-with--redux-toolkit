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
import NotFound from "./pages/not-found/not-found.page";
import Unauthorized from "./pages/unauthorized/unauthorized.page";
// import ProductTable from "./pages/admin/product-table/product-table.page";
import AdminProduct from "./pages/admin/product/product.page";

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
          <Route path="/add" element={<Login />} />
        </Route>

        {/* admin routes */}
        <Route path="admin" element={<RequireAdmin />}>
          <Route path="product/*" element={<AdminProduct />} />
          {/* <Route path="producttable" element={<ProductTable />} /> */}
        </Route>

        {/*  page not found */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
