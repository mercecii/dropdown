import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const getNavLinkStyle = ({ isActive }: { isActive: boolean }) => {
    return {
      padding: "10px",
      textDecoration: isActive ? "none" : "underlined",
      fontWeight: isActive ? "bold" : "normal",
    };
  };
  return (
    <nav>
      <NavLink style={getNavLinkStyle} to={"/"}>
        Welcome
      </NavLink>
      <NavLink style={getNavLinkStyle} to={"home"}>
        Home
      </NavLink>
      <NavLink style={getNavLinkStyle} to={"a"}>
        A
      </NavLink>
      <NavLink style={getNavLinkStyle} to={"b"}>
        B
      </NavLink>
      <NavLink style={getNavLinkStyle} to={"c"}>
        C
      </NavLink>
      <NavLink style={getNavLinkStyle} to={"products"}>
        Products
      </NavLink>
      <NavLink style={getNavLinkStyle} to={"user"}>
        Users
      </NavLink>
    </nav>
  );
};

export default Navbar;
