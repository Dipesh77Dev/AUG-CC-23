import { useState, useEffect, useRef } from "react";

const UseRef3 = () => {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);
  const inputElement = useRef();

  const [inputValue1, setInputValue1] = useState("");
  const previousInputValue = useRef("");

  useEffect(() => {
    count.current = count.current + 1;
  });

  useEffect(() => {
    previousInputValue.current = inputValue1;
  }, [inputValue1]);

  const focusInput = () => {
    inputElement.current.focus();
    inputElement.current.style.backgroundColor = "red";
    // inputElement.style.backgroundColor = 'red'
  };

  return (
    <>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <h1>Render Count: {count.current}</h1>
      </div>
      <hr />
      <div>
        <input type="text" ref={inputElement} />
        <button onClick={focusInput}>Focus Input</button>
      </div>
      <hr />
      <div>
        <input
          type="text"
          value={inputValue1}
          onChange={(e) => setInputValue1(e.target.value)}
        />
        <h2>Current Value: {inputValue1}</h2>
        <h2>Previous Value: {previousInputValue.current}</h2>
      </div>
    </>
  );
};

export default UseRef3;
