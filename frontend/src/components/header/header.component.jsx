import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Nav, NavDropdown, Navbar } from "react-bootstrap";
import { FaCartPlus } from "react-icons/fa";

import { setUser } from "../../features/user/authSlice";

const Header = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const logoutHandler = (e) => {
    console.log("logout click");
    e.preventDefault();
    dispatch(setUser(null));
    localStorage.removeItem("user");
  };

  return (
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

            {user ? (
              <Nav.Link onClick={logoutHandler}>Logout</Nav.Link>
            ) : (
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            )}

            {user && user.isAdmin && (
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>

                <NavDropdown.Item as={Link} to="/admin/product">
                  Products List
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="admin/product/AddProduct">
                  Add Products
                </NavDropdown.Item>
              </NavDropdown>
            )}

            <Nav.Link className="icons" as={Link} to="/cart">
              <div>
                <span>
                  <FaCartPlus />
                  <small className="count d-flex">0</small>
                </span>
              </div>
            </Nav.Link>

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
  );
};

export default Header;
