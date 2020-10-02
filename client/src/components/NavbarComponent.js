import React from "react";
import { Link } from "react-router-dom";

export default function NavbarComponent() {
  const navStyle = { color: "white" };

  return (
    <nav className="navBar">
      <Link style={navStyle} to="/">
        <h3>YOUR LOGO</h3>
      </Link>

      <ul className="navLinks">
        <Link style={navStyle} to="/">
          <li> Home</li>
        </Link>
        <Link style={navStyle} to="/departments">
          <li> Departments</li>
        </Link>
        <Link style={navStyle} to="/employees">
          <li>Employees </li>
        </Link>
        <Link style={navStyle} to="/about">
          <li> About</li>
        </Link>
      </ul>
    </nav>
  );
}
