import { Routes, Route } from "react-router-dom";
import Header from "./components/header/header.component";
import Home from "./pages/home/home.page";
import Login from "./pages/login/login.page";
import Shop from "./pages/shop/shop.component";
import "swiper/css/bundle";
import SwiperCore, { Autoplay } from "swiper";
function App() {
  SwiperCore.use([Autoplay]);
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Route>
    </Routes>
  );
}

export default App;
