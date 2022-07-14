import React, { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";

import { Container, Nav } from "react-bootstrap";
import CartImage from "../../assets/image/shoppingBag.svg";
const Header = () => {
  return (
    <Fragment>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Navbar
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/shop">
              Shop
            </Nav.Link>
            <Nav.Link as={Link} to="/cart">
              Cart
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <nav class="nav">
        <div class="wrapper container">
          <div class="logo">
            <a href="">E-COMMERCE</a>
          </div>
          <ul class="nav-list">
            <div class="top">
              <label for="" class="btn close-btn">
                <i class="fas fa-times"></i>
              </label>
            </div>
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="about.html">About</a>
            </li>

            <li>
              <a href="products.html">Product</a>
            </li>

            <li>
              <a href="contact.html">Contact</a>
            </li>

            <li class="icons">
              <a href="cart.html">
                <span>
                  <img src={CartImage} alt="" />
                  <small class="count d-flex">0</small>
                </span>
              </a>
            </li>
          </ul>
          <label class="btn open-btn">
            <i class="fas fa-bars"></i>
          </label>
        </div>
      </nav>

      <Outlet />
    </Fragment>
  );
};

export default Header;
