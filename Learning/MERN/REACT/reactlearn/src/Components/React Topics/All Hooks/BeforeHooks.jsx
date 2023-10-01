import React from "react";

const BeforeHooks = () => {
  let x = 0;
  let result = x + 2;

  const handleBeforeHook = () => {
    let ok = x++;
    // console.log(`Orignal Value - ${x}`);
    // console.log(`Updated Value - ${ok}`);
    // console.log(`Result Value - ${result}`);
  };
  return (
    <>
      <p>Before Hooks :) </p>
      <p>
        Original value - {x}, Updated value - {result}
      </p>
      <button onClick={handleBeforeHook}>Before Hooks</button>
    </>
  );
};

export default BeforeHooks;
