import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../footer/footer.component";
import Header from "../header/header.component";
const Layout = () => {
  return (
    <Fragment>
      <Header />
      <Outlet />
      <Footer />
    </Fragment>
  );
};

export default Layout;
