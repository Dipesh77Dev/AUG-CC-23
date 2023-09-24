import React, { useState } from "react";

const count = 5;

// const state = useState();
// console.log(state);    [var, functn]

function decrease() {
  alert("Decrease function called...");
}

const Hook1 = () => {
  const increase = () => {
    alert("Increase function called...");
    count + 1; // This was the problem with function component we were not able to handle state function was working but not rendering it, so before hooks for handling state we were using class components.
  };

  const [stateVar, setStateVar] = useState(7);

  const increaseState = () => {
    // setStateVar(35);
    setStateVar(stateVar + 1);
  };

  function decreaseState() {
    setStateVar(stateVar - 1);
  }
  
  return (
    <>
      <div style={{ marginLeft: "40%" }}>
        <h3>Static Value = 0</h3>
        <h3>Dynamic Value = {count}</h3>
        <h3>State Value = {stateVar}</h3>
        <div style={{ display: "flex", flexDirection: "column", width: "50%" }}>
          <button onClick={increase}>Increment</button>
          <br />
          <button onClick={decrease}>Decrement</button>
          <br />
          <button onClick={increaseState}>Increase State</button>
          <br />
          <button onClick={decreaseState}>Decrease State</button>
        </div>
      </div>
    </>
  );
};

export default Hook1;

/* 
<button>Click & Increment</button>
<button onClick = {increase()}>Click & Increment</button> [JS]  
*/
