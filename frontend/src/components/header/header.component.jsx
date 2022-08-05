import React, { Fragment, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import { useSelector, useDispatch } from "react-redux";

import { logout } from "../../features/auth/AuthSlice";
import { Nav, NavDropdown } from "react-bootstrap";
import CartImage from "../../assets/image/shoppingBag.svg";
const Header = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {}, [user]);

  const logoutHandler = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  return (
    <Fragment>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <div className="wrapper container">
          <Navbar.Brand className="logo" as={Link} to="/">
            <div>E-COMMERCE</div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto nav-list">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>

              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/shop">
                Product
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contact
              </Nav.Link>
              <Nav.Link className="icons" as={Link} to="/cart">
                <div>
                  <span>
                    <img src={CartImage} alt="" />
                    <small className="count d-flex">0</small>
                  </span>
                </div>
              </Nav.Link>

              {user ? (
                <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  {user.isAdmin && (
                    <Fragment>
                      <NavDropdown.Item as={Link} to="/Products">
                        Products List
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/AddProduct">
                        Add Products
                      </NavDropdown.Item>
                    </Fragment>
                  )}
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
              )}
              {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
      <Outlet />
    </Fragment>
  );
};

export default Header;
