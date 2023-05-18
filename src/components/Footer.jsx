import React from "react";

// TODO: Create a styles object called "styles"
const styles = {
  navbar: {
    backgroundColor: "gray",
    padding: "10px",
    color: "white",
    textAlign: "center",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "16px",
    fontWeight: "bold",
  },
};

function Footer() {
  // TODO: Add a style attribute to nav
  return (
    <nav style={styles.navbar}>
      <a href="/" style={styles.link}>
        Footer
      </a>
    </nav>
  );
}

export default Footer;
