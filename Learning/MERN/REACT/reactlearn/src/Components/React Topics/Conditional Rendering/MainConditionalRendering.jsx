import React from "react";
import {
  IfElseCondition,
  ConditionalRendering,
  TernaryCondition,
} from "./ConditionalRendering";

const MainConditionalRendering = () => {
  return (
    <>
      <ConditionalRendering /> <hr /> 
      <IfElseCondition /> <hr />
      <TernaryCondition />
    </>
  );
};

export default MainConditionalRendering;
