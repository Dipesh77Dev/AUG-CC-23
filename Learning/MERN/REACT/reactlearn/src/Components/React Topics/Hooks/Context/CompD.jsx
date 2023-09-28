import React, { useContext } from "react";
import { FirstName, LastName } from "./Hook2";

const CompD = () => {
    const fname = useContext(FirstName);
    const lname = useContext(LastName);
    // const age = useContext(); if we keep empty it will give an error..

  return (
    <div>
      <p>Hello world! in Component D</p>
        <h1>My First-Name is {fname} & Last-Name is {lname}</h1>
    </div>
  );
};

export default CompD; 