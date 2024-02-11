import { useState } from "react";

import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  const addValue = () => {
    setCounter((counter += 1));
    console.log("clicked", counter);
  };

  const clearValue = () => {
    setCounter((counter = 0));
  };

  return (
    <>
      <h1>Counter Project</h1>

      <h2>Counter value:{counter}</h2>

      <button onClick={addValue} style={{ backgroundColor: "DodgerBlue" }}>
        Add value
      </button>
      <br />
      <button onClick={clearValue} style={{ backgroundColor: "DodgerBlue" }}>
        Clear value
      </button>
    </>
  );
}

export default App;
