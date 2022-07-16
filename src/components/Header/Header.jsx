import React from "react";
import { NavLink as Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <Link to={"/"}>Home</Link>
      <Link to={"/about"}>About</Link>
      <Link to={"/contact"}>Contact</Link>
    </div>
  );
};

export default Header;
