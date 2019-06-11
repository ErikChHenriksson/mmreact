import React from "react";
import { Link } from "react-router-dom";
import MovieMindedLogo from "../../Images/MovieMindedLogo.png";

function Header() {
  return (
    <header style={headerStyle}>
      <img
        style={{ height: "30%", width: "30%" }}
        src={MovieMindedLogo}
        alt="Logo"
      />
      <br />
      <Link style={linkStyle} to="/">
        | Watchlist{" "}
      </Link>{" "}
      |
      <Link style={linkStyle} to="/about">
        {" "}
        About{" "}
      </Link>{" "}
      |
      <Link style={linkStyle} to="/quiz">
        {" "}
        Quiz{" "}
      </Link>{" "}
      |
    </header>
  );
}

const headerStyle = {
  background: "#000",
  color: "#ffff",
  textAlign: "center",
  padding: "10px"
};

const linkStyle = {
  color: "#fff",
  textDecoration: "none"
};

export default Header;
