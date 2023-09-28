import React, { createContext } from "react";

import CompA from "./CompA";
import CompC from "./CompC";

const FirstName = createContext();
const LastName = createContext();

const Hook2 = () => {
  return (
    <>
      <FirstName.Provider value={"Raj"}>
        <LastName.Provider value={"Dev"}>
          <CompA />
        </LastName.Provider>
      </FirstName.Provider>
    </>
  );
};

export default Hook2;
export { FirstName, LastName };
