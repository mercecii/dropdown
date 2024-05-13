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
          <Route Component={Home} path="/" />
          <Route Component={ComponentA} path="a" />
          <Route Component={ComponentB} path="b" />
          <Route Component={ComponentC} path="c" />
          <Route Component={OrderSummary} path="order-summary" />
          <Route Component={Products} path="products">
            <Route
              index
              Component={FeaturedProducts}
              path="featured-products"
            />
            <Route index Component={FeaturedProducts} />
            <Route Component={NewProducts} path="new-products" />
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
