import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <a href="/" className="header-logo">
        <img src="/NBAlogo.png" alt="NBA Logo" />
      </a>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/compare">Compare</Link>
      </nav>
    </header>
  );
};

export default Navbar;
