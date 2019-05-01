import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = { color: "#F15b2A" };
  return (
    <nav>
      <NavLink to="/" activeStyle={activeStyle} exact>
        Home
      </NavLink>
      {" | "}
      <NavLink to="/courses" activeStyle={activeStyle}>
        Courses
      </NavLink>
      {" | "}
      <NavLink to="/about-us" activeStyle={activeStyle}>
        About Us
      </NavLink>
    </nav>
  );
};

export default Header;
