import { NavigateFunction, useNavigate } from "react-router-dom";
import Counter from "./Counter";
import DropdownPage from "./DropdownPage";
import InputDebounced from "./InputDebounced";
import {
  decrement,
  fetchPokeList,
  increment,
  selectValue,
} from "../redux/slices/counterSlice";
import { useDispatch, useSelector } from "react-redux";
import DropdownPageThunk from "./DropdownPageThunk";

const Home = () => {
  const value = useSelector(selectValue);
  const navigate: NavigateFunction = useNavigate();
  const dispatch = useDispatch();
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
      {/* <DropdownPage /> */}
      <DropdownPageThunk />
      <Counter />
      <InputDebounced />
      {`value = ${value}`}
      <button onClick={() => dispatch(increment())}>INCREASE</button>
      <button onClick={() => dispatch(decrement())}>DECREASE</button>
    </>
  );
};
export default Home;
