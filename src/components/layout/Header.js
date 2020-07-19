import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Header style={headerStyle}>
      <h1>TodoList</h1>
      <Link style={linkStyle} to="/">
        Home
      </Link>{" "}
      |{" "}
      <Link style={linkStyle} to="/about">
        About
      </Link>
    </Header>
  );
}

const headerStyle = {
  padding: "10px",
  background: "#333",
  color: "#fff",
  textAlign: "center",
};

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
};
export default Header;
