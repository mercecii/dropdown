import { useReducer } from "react";
import "./App.css";
import Router from "./components/Router";
import { AuthProvider } from "./utils/auth";
import store from "./redux/store";
import { Provider } from "react-redux";
import { CounterContext } from "./components/Counter";

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

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Provider store={store}>
      <AuthProvider>
        <CounterContext.Provider value={[state, dispatch]}>
          <div className="App">
            <Router />
          </div>
        </CounterContext.Provider>
      </AuthProvider>
    </Provider>
  );
}

export default App;
