import React from "react";
import { NavLink, Outlet, useSearchParams } from "react-router-dom";

const User = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const isShowActiveUsers = searchParams.get("filter") === "active";

  return (
    <div>
      <nav>
        <NavLink style={getNavLinkStyle} to={"1"}>
          User 1
        </NavLink>
        <NavLink style={getNavLinkStyle} to={"2"}>
          User 2
        </NavLink>
        <NavLink style={getNavLinkStyle} to={"3"}>
          User 3
        </NavLink>
      </nav>
      <button
        onClick={() => {
          setSearchParams({ filter: "active" });
        }}
      >
        Active users
      </button>
      <button
        onClick={() => {
          setSearchParams({});
        }}
      >
        Reset Filter
      </button>
      <h1>
        {isShowActiveUsers ? "Showing Active Users . . ." : "Showing All Users"}
      </h1>
      <Outlet />
    </div>
  );
};

export default User;

const getNavLinkStyle = ({ isActive }: { isActive: boolean }) => {
  return {
    padding: "10px",
    textDecoration: isActive ? "none" : "underlined",
    fontWeight: isActive ? "bold" : "normal",
  };
};
