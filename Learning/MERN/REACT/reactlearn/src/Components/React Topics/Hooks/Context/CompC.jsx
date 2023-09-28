import React from "react";
import { FirstName, LastName } from "./Hook2";

const CompC = () => {
  return (
    <div>
      <p>Hello world! in Component C</p>
      <FirstName.Consumer>
        {(fname) => {
          return (
            <>
              {/* <h1>My Name is - {fname}</h1> */}
              <LastName.Consumer>
                {(lname) => {
                  return (
                    <h1>
                      My Firstname is - {fname} & LastName is - {lname}
                    </h1>
                  );
                }}
              </LastName.Consumer>
            </>
          );
        }}
      </FirstName.Consumer>
    </div>
  );
};

export default CompC; 