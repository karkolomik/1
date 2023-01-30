import { useState } from "react";
import "./index.scss";

function App() {
  const [counter, setCounter] = useState(0);
  const setNewCountPlus = () => {
    setCounter(counter + 1);
  };
  const setDefault = () => {
    setCounter(0);
  };
  const setNewCountMinus = () => {
    setCounter(counter - 1);
  };
  return (
    <div className="App">
      <div>
        <h2>Counter:</h2>
        <h1>{counter}</h1>
        <button onClick={setNewCountMinus} className="minus">
          Minus -
        </button>
        <button onClick={setDefault} className="default">
          Default
        </button>
        <button onClick={setNewCountPlus} className="plus">
          Add +
        </button>
      </div>
    </div>
  );
}

export default App;
