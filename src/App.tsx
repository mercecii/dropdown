import { createContext, useReducer } from "react";
import "./App.css";
import DropdownPage from "./components/DropdownPage";
import Counter from "./components/Counter";
import InputDebounced from "./components/InputDebounced";
import { NavigateFunction, Route, Routes, useNavigate } from "react-router-dom";
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import ComponentC from "./components/ComponentC";
import Navbar from "./components/Navbar";
import OrderSummary from "./components/OrderSummary";
import NoMatch from "./components/NoMatch";
import Products from "./components/Product/Products";
import FeaturedProducts from "./components/Product/FeaturedProducts";
import NewProducts from "./components/Product/NewProducts";
import User from "./components/User/User";
import UserDetails from "./components/User/UserDetails";
import Admin from "./components/User/Admin";

const initialState = 0;
const reducer = (state: number, action: { type: string }) => {
  switch (action.type) {
    case "INCREASE":
      return state + 1;
    case "DECREASE":
      return state + 1;
    case "RESET":
      return initialState;
    default:
      return initialState;
  }
};

export const counterContext = createContext<any[]>([]);

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <counterContext.Provider value={[state, dispatch]}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="a" Component={ComponentA} />
          <Route path="b" Component={ComponentB} />
          <Route path="c" Component={ComponentC} />
          <Route path="order-summary" Component={OrderSummary} />
          <Route path="products" Component={Products}>
            <Route index Component={FeaturedProducts} />
            <Route path="new-products" Component={NewProducts} />
            <Route path="featured-products" Component={FeaturedProducts} />
          </Route>
          <Route path="user" Component={User}>
            <Route path=":userId" Component={UserDetails} />
            <Route path="admin" Component={Admin} />
          </Route>
          <Route Component={NoMatch} path="*" />
        </Routes>
      </div>
    </counterContext.Provider>
  );
}
const Home = () => {
  const navigate: NavigateFunction = useNavigate();
  return (
    <>
      <h1>HOME</h1>
      <button
        onClick={(e) => {
          navigate("order-summary");
        }}
      >
        order-summary
      </button>
      <DropdownPage />
      <Counter />
      <InputDebounced />
    </>
  );
};
export default App;
