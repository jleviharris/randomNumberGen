import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [randomNumber, setRandomNumber] = useState(0);

  const generateNumber = () => {
    setRandomNumber(randm);
  };
  const randm = Math.floor(Math.random() * 1000);
  return (
    <div className="App">
      <div className="container">
        <h1>Random Number Generator</h1>
        <div className="counter">{randomNumber}</div>

        <br />

        <button className="Bttn" onClick={generateNumber}>
          Generate Number
        </button>
      </div>
    </div>
  );
}

export default App;
