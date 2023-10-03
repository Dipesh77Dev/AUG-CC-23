import React, { useState, useEffect, useRef } from "react";

const UseRef1 = () => {
  // const [count, setCount] = useState(0);

  const [userInput, setUserInput] = useState("");
  // const [count, setCount] = useState();

  const count = useRef(0);
  // console.log(count);

  useEffect(() => {
    // setCount(count + 1);
    count.current = count.current + 1;
  });

  return (
    <div>
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      {/* <p> No. of times when component renders - {count}</p> */}
      <p> No. of times when component renders - {count.current}</p>
    </div>
  );
};

export default UseRef1;
