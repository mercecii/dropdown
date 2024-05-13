import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import NoMatch from "./NoMatch";
import OrderSummary from "./OrderSummary";
import Admin from "./User/Admin";
import Welcome from "./Welcome";

const LazyHome = React.lazy(() => import("./Home"));
const ComponentA = React.lazy(() => import("./ComponentA"));
const ComponentB = React.lazy(() => import("./ComponentB"));
const ComponentC = React.lazy(() => import("./ComponentC"));
const UserDetails = React.lazy(() => import("./User/UserDetails"));
const User = React.lazy(() => import("./User/User"));
const Products = React.lazy(() => import("./Product/Products"));
const NewProducts = React.lazy(() => import("./Product/NewProducts"));
const FeaturedProducts = React.lazy(() => import("./Product/FeaturedProducts"));

const WithSuspense = ({ children }: { children: React.ReactElement }) => {
  return (
    <React.Suspense fallback={<>Loading . . .</>}>{children}</React.Suspense>
  );
};

const Router = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="home" element={<WithSuspense children={<LazyHome />} />} />
        <Route path="a" element={<WithSuspense children={<ComponentA />} />} />
        <Route path="b" element={<WithSuspense children={<ComponentB />} />} />
        <Route path="c" element={<WithSuspense children={<ComponentC />} />} />
        <Route
          path="order-summary"
          element={<WithSuspense children={<OrderSummary />} />}
        />
        <Route
          path="products"
          element={<WithSuspense children={<Products />} />}
        >
          <Route
            index
            element={<WithSuspense children={<FeaturedProducts />} />}
          />
          <Route
            path="new-products"
            element={<WithSuspense children={<NewProducts />} />}
          />
          <Route
            path="featured-products"
            element={<WithSuspense children={<FeaturedProducts />} />}
          />
        </Route>
        <Route path="user" element={<WithSuspense children={<User />} />}>
          <Route
            path=":userId"
            element={<WithSuspense children={<UserDetails />} />}
          />
          <Route path="admin" element={<WithSuspense children={<Admin />} />} />
        </Route>
        <Route path="*" element={<WithSuspense children={<NoMatch />} />} />
      </Routes>
    </div>
  );
};

export default Router;
