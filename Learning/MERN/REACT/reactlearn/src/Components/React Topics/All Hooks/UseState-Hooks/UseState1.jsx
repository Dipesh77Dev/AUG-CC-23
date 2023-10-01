import React, { useState } from "react";

const UseState1 = () => {
  const [val, setVal] = useState(0);

  const handleDecrement = () => {
    if (val > 0) {
      setVal(val - 1);
    } else {
      alert(" We can't go beyond 0...");
    }
  };

  return (
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
      {/* <button onClick = {() => count === 0 ? setCount(0) : setCount(count - 1)}></button> */}
    </div>
  );
};

export default UseState1;
