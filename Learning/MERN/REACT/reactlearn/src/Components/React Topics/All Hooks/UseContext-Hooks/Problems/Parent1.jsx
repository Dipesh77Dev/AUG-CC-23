import React, { useState } from "react";

import Child4 from "./Child4";
import Child1 from "./Child1";

const Parent1 = () => {
  const [user, setUser] = useState("Raj");
  return (
    <div>
      <h1>Hello - {user}, I am the Parent Component..</h1>
      <Child4 x={user} />
      <Child1 y={user} />
    </div>
  );
};

export default Parent1;

// Child 1-3 are nested amongst them & 4 is in different part.
