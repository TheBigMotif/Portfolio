import React from "react";
import Project from "./Project";
// TODO: Create a styles object called "styles"

function Portfolio() {
  // TODO: Add a style attribute to `nav`
  return (
    <nav className="navbar">
      {/* <a href="/">Portfolio</a> */}
      <Project></Project>
    </nav>
  );
}

export default Portfolio;
