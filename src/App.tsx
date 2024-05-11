import React, { createContext, useReducer } from "react";
import logo from "./logo.svg";
import "./App.css";
import DropdownPage from "./components/DropdownPage";
import Counter from "./components/Counter";

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
        <DropdownPage />
        <Counter />
      </div>
    </counterContext.Provider>
  );
}

export default App;
