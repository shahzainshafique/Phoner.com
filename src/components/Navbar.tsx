import React from "react";
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
  const { openCart, cartQuantity } = useShoppingCart();
  return (
    <nav className="navbar navbar-inverse navbar-dark navbar-expand-sm bg-dark fixed-top">
      <div className="container">
        <a href="/" className="navbar-brand">
          <FaMobile className="mb-2" />
          Phoner
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div id="navbarCollapse" className="collapse navbar-collapse ">
          <ul className="nav navbar-nav navbar-right">
            <li className="nav-item">
              <a href="/" className="nav-link active">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="/store" className="nav-link ">
                Store
              </a>
            </li>
            <li className="nav-item">
              <a href="/about" className="nav-link ">
                About
              </a>
            </li>
          </ul>
        </div>
        <ul className="nav navbar-nav navbar-right ">
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
