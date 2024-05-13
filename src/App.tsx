import { createContext, useReducer } from "react";
import "./App.css";
import Router from "./components/Router";
import { AuthProvider } from "./utils/auth";

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
    <AuthProvider>
      <counterContext.Provider value={[state, dispatch]}>
        <div className="App">
          <Router />
        </div>
      </counterContext.Provider>
    </AuthProvider>
  );
}

export default App;
