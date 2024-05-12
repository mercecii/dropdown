import React from "react";
import logo from "./logo.svg";
import "./App.css";
import DropdownPage from "./components/DropdownPage";
import InputDebounced from "./components/InputDebounced";

function App() {
  return (
    <div className="App">
      <DropdownPage />
      <InputDebounced />
    </div>
  );
}

export default App;
