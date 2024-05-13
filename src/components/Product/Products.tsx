import React from "react";
import { Link, Outlet } from "react-router-dom";

const Products = () => {
  return (
    <div>
      Product
      <input placeholder="Search here" />
      <nav className="products">
        <Link to={"new-products"}>New Products</Link>
        <Link to={"featured-products"}>Featured Products</Link>
        <Outlet />
      </nav>
    </div>
  );
};

export default Products;
