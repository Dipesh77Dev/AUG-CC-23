import React from "react";
import Child2 from "./Child2";

const Child1 = (props) => {
  return (
    <div>
      {/* <h1>Hello - {props.y}, I am the Child Component1..</h1> */}
      <Child2 y={props.y} />
      {/* <Child2 y={y} /> */}
    </div>
  );
};

export default Child1;
