import React, { useState, useEffect } from "react";

const UseEffect1 = () => {
  const [val, setVal] = useState(0);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [calculation, setCalculation] = useState(0);


  const handleDecrement = () => {
    if (val > 0) {
      setVal(val - 1);
    } else {
      alert(" We can't go beyond 0...");
    }
  };

  // No dependency pass - it will run everytime like when page load & component re-render.
  useEffect(() => {
    document.title = val;
    setTimeout(() => {
      setCount1((count1) => count1 + 1);
    }, 1000);
  });

  // Empty Array - It will run only once when page load
  useEffect(() => {
    document.title = val;
    setTimeout(() => {
        setCount2((count2) => count2 + 1);
      }, 1000);
  }, []);

  // Props/state values - Runs on page load/first render, & any time when dependencies values get changed.
  useEffect(() => {
    document.title = val;
    setCalculation(() => count3 * 2);
  }, [count3]);

  return (
    <>
      <h1>I've rendered {count1} times!</h1>
      <h1>I've rendered {count2} times!</h1>
      <p>Count: {count3}</p>
      <button onClick={() => setCount3((c) => c + 1)}>+</button>
      <p>Calculation: {calculation}</p>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginTop: "50%",
        }}
      >
        <button style={{ width: "100px" }} onClick={() => setVal(val + 1)}>
          +
        </button>
        <p>{val}</p>
        <button style={{ width: "100px" }} onClick={handleDecrement}>
          -
        </button>
      </div>
    </>
  );
};

export default UseEffect1;
