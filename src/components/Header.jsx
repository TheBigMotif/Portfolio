import React from "react";
import Nav from "./Nav.jsx";
// TODO: Create a styles object called "styles"

function Header() {
  // TODO: Add a style attribute to `nav`
  return (
    <nav className="navbar">
      <a href="/">Header</a>
      <Nav></Nav>
    </nav>
  );
}

export default Header;
