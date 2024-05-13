import React, { createContext, useContext } from "react";

export const CounterContext = createContext<any[]>([]);
const useCounterContext = () => useContext(CounterContext);

const Counter = () => {
  const [context, dispatch] = useCounterContext();

  return (
    <div>
      Counter - {context}
      <button onClick={() => dispatch({ type: "INCREASE" })}>INCREASE</button>
      <button onClick={() => dispatch({ type: "DECREASE" })}>DECREASE</button>
    </div>
  );
};

export default Counter;
