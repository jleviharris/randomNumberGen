import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [randomNumber, setRandomNumber] = useState(0);

  const generateNumber = () => {
    debugger;
    setRandomNumber(randm);
  };
  const randm = Math.floor(Math.random() * 1000);
  return (
    <div className="App">
      <h1>Random Number Generator</h1>
      <div className="counter">{randomNumber}</div>

      <br />

      <button className="Bttn" onClick={generateNumber}>
        Generate Number
      </button>
    </div>
  );
}

export default App;
