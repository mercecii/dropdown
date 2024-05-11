import React, { useContext } from "react";
import { counterContext } from "../App";

const Counter = () => {
  const [context, dispatch] = useContext(counterContext);

  return (
    <div>
      Counter - {context}
      <button onClick={() => dispatch({ type: "INCREASE" })}>INCREASE</button>
      <button onClick={() => dispatch({ type: "DECREASE" })}>DECREASE</button>
    </div>
  );
};

export default Counter;
