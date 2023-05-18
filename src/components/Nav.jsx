import React from "react";
import { Link } from "react-router-dom";

// TODO: Create a styles object called "styles"
const styles = {
  navbar: {
    backgroundColor: "blue",
    padding: "10px",
    color: "white",
  },
  ul: {
    listStyleType: "none",
    display: "flex",
    justifyContent: "space-around",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "16px",
    fontWeight: "bold",
  },
};

function Nav() {
  // TODO: Add a style attribute to `nav`
  // in jsx, class is typed as className
  return (
    <nav style={styles.navbar}>
      <ul style={styles.ul}>
        <li>
          <Link to="/" style={styles.link}>
            About
          </Link>
        </li>
        <li>
          <Link to="/portfolio" style={styles.link}>
            Portfolio
          </Link>
        </li>
        <li>
          <Link to="/contact" style={styles.link}>
            Contact
          </Link>
        </li>
        <li>
          <Link to="/resume" style={styles.link}>
            Resume
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
