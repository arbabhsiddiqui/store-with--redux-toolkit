import { Routes, Route } from "react-router-dom";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css/bundle";

// components
import Header from "./components/header/header.component";

// pages
import Home from "./pages/home/home.page";
import Shop from "./pages/shop/shop.component";
import About from "./pages/about/about.page";
import Contact from "./pages/contact/contact.page";
import Login from "./pages/login/login.page";

function App() {
  SwiperCore.use([Autoplay]);
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
}

export default App;
