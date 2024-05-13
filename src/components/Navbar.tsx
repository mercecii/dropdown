import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../utils/auth";

const Navbar = () => {
  const getNavLinkStyle = ({ isActive }: { isActive: boolean }) => {
    return {
      padding: "10px",
      textDecoration: isActive ? "none" : "underlined",
      fontWeight: isActive ? "bold" : "normal",
    };
  };
  const auth = useAuth();
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
      {!auth.user && (
        <NavLink style={getNavLinkStyle} to={"/login"}>
          Login
        </NavLink>
      )}
      {auth.user && (
        <NavLink style={getNavLinkStyle} to={"/profile"}>
          Profile
        </NavLink>
      )}
    </nav>
  );
};

export default Navbar;
