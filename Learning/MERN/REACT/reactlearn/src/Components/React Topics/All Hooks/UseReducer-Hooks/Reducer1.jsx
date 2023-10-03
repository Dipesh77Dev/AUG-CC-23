import React, { useState, useReducer } from "react";

const initialValue = 0;

const reducer = (state, action) => {
    if (action.type === "INC"){
        return (state = state + 1)
    }
    if (action.type === "DEC"){
        // return (state = state - 1)
        let newNum = 0
        state >= 1 ? (newNum = state - 1) : (newNum = 0, alert("Sorry, but we can't go beyond this"))
        // count >= 1 ? (newNum = count - 1) : (newNum = 0)
        return newNum;
    }
    return state;
  }

const Reducer1 = () => {
  //   const [val, setVal] = useState(0);

  const [count, dispatch] = useReducer(reducer, initialValue);

  /*
  const handleIncrement = () => {
    setVal(val + 1);
  };

  const handleDecrement = () => {
    val > 0 ? setVal(val - 1) : alert(" We can't go beyond 0...");
  };
*/

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: "50%",
      }}
    >
      <button
        style={{ width: "100px" }}
        //   onClick={handleIncrement}
        onClick={() => dispatch({ type: "INC" })}
      >
        +
      </button>
      <p>{count}</p>
      <button
        style={{ width: "100px" }}
        //   onClick={handleDecrement}
        onClick={() => dispatch({ type: "DEC" })}
      >
        -
      </button>
    </div>
  );
};

export default Reducer1;

/*
switch (action.type){
    case "INC" :
        return (state += 1);
    case "DEC":
        let newNum = 0
        state >= 1 ? (newNum = state - 1) : (newNum = 0, alert("Sorry, but we can't go beyond this"))
        return newNum;
    default:
        return state;
}
*/