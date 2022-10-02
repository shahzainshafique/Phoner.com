import React, { useState } from "react";
import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { FaMobile } from "react-icons/fa";
import { useShoppingCart } from "../context/ShoppingCartContext";

const Navbar = () => {
  const links = document.querySelectorAll(".nav-link");

  if (links.length) {
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        links.forEach((link) => {
          link.classList.remove("active");
        });
        link.classList.add("active");
      });
    });
  }
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  const { openCart, cartQuantity } = useShoppingCart();
  return (
    <nav className="navbar navbar-expand-md navbar-inverse navbar-dark bg-dark fixed-top">
      <div className="container">
        <a href="/" className="navbar-brand">
          <FaMobile className="mb-2" />
          Phoner
        </a>
        <ul className="nav navbar cartt">
          {cartQuantity > 0 && (
            <Button
              onClick={openCart}
              style={{
                width: "3rem",
                height: "3rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              variant="outline-light"
              className="rounded-circle"
            >
              <FaShoppingCart />
              <div
                className="rounded-circle bg-danger d-flex justify-content-center ms-4 align-items-center"
                style={{
                  color: "white",
                  padding: "9px",
                  width: "1rem",
                  height: "1rem",
                  position: "absolute",
                  // bottom: "0",
                  // right: "0",
                  top: "0",
                  transform: "translate(25%, 25%)",
                }}
              >
                {cartQuantity}
              </div>
            </Button>
          )}
        </ul>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={!isNavCollapsed ? true : false}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          id="navbarCollapse"
          className={`${
            isNavCollapsed ? `collapse` : ""
          } navbar-collapse justify-content-end align-center`}
        >
          <ul className="nav navbar-nav navbar-right mx-4">
            <li className="nav-item">
              <a href="/" className="nav-link active">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="/store" className="nav-link active">
                Store
              </a>
            </li>
            <li className="nav-item">
              <a href="/about" className="nav-link active">
                About Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
{
  /* <NavbarBs sticky="top" classNameName="bg-white shadow-sm py-2 ">
      <Container>
        <Nav>
          <Nav.Link to={"/"} as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to={"/store"} as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to={"/about"} as={NavLink}>
            About
          </Nav.Link>
        </Nav>
      </Container> */
}

export default Navbar;
