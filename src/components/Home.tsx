import { NavigateFunction, useNavigate } from "react-router-dom";
import Counter from "./Counter";
import DropdownPage from "./DropdownPage";
import InputDebounced from "./InputDebounced";

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
export default Home;
