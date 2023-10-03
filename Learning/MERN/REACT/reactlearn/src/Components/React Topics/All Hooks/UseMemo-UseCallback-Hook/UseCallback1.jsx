import React, { useState, useMemo, useCallback } from "react";
import Todos from "./Todos";

const UseCallback1 = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const incrementCount = () => {
    setCount(count + 1);
  };

    // const addTodo = () => {
    //  setTodos( (prev) => [ ...prev, `New added`]);
    // };

  const addTodo = useCallback(() => {
    return setTodos((prev) => [...prev, `New added`]);
  }, [todos]);

  return (
    <div>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count : {count}
        <button onClick={incrementCount}> + </button>
      </div>
    </div>
  );
};

export default UseCallback1;

/* 
As we know if we having function, useState or useEffect it re-render again when it gots changes, so that's why when we click on button of any 1 it was running twice in console so to handle this type of situation we can use useMemo but for variables or we can use useCallback for function/component.

In this we will notice that Todos component re-renders even when the todos do not change. 
We are using memo, so the Todos component should not re-render since neither the todos state nor the addTodo function are changing when the count is incremented.
This is because of something called "referential equality".
Every time a component re-renders, its functions get recreated. Because of this, the addTodo function has actually changed.

To fix this, we can use the useCallback hook to prevent the function from being recreated unless necessary.
Use the useCallback Hook to prevent the Todos component from re-rendering needlessly.
So, Now the Todos component will only re-render when the todos prop changes.
*/