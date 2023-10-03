import React, { useRef } from "react";

const UseRef2 = () => {
  const inputReference = useRef();
  console.log(inputReference);
  
  const changeBorder = () => {
    inputReference.current.focus();
    inputReference.current.style.backgroundColor = "blue";
  };

  return (
    <div>
      {/* <input type="text" /> */}
      <input type="text" ref={inputReference} />
      <br />
      <button onClick={changeBorder}>Border-Change</button>
    </div>
  );
};

export default UseRef2;
