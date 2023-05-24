import React from "react";

// TODO: Create a styles object called "styles"
const styles = {
  navbar: {
    backgroundColor: "rgb(19, 109, 219)",
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
      <footer className="footer">
        <p>&copy; 2023 Aaron Agraz. All Rights Reserved.</p>
      </footer>
    </nav>
  );
}

export default Footer;
