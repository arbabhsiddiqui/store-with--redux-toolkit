import { Routes, Route } from "react-router-dom";
import Header from "./components/header/header.component";
import Home from "./pages/home/home.page";
import Shop from "./pages/shop/shop.component";

import SwiperCore, { Autoplay } from "swiper";
import "swiper/css/bundle";
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
