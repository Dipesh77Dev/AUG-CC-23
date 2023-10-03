import React, { useContext, useState, createContext } from "react";

const UserDetailContext = createContext();
const GenderContext = createContext();

const UseContext1 = () => {
  const [userDetail, setUserDetail] = useState({
    name: "Raj",
    age: 24,
  });
  const [gender, setGender] = useState("M");
  return (
    <>
      {/* <UserDetailContext.Provider value={userDetail, isMarried}> */}
      <UserDetailContext.Provider value={userDetail}>
        <GenderContext.Provider value={gender}>
          <h1>
            Component1/Parent: Hello - {userDetail.name} & Gender : {gender}
          </h1>
        </GenderContext.Provider>
        <Component2 />
      </UserDetailContext.Provider>
    </>
  );
};

function Component2() {
  return (
    <>
      <h1>Component 2: Nested Component No need to pass data</h1>
      <Component3 />
    </>
  );
}

function Component3() {
  return (
    <>
      <h1>Component 3: Nested Component No need to pass data</h1>
      <Component4 />
    </>
  );
}

function Component4() {
  // <GenderContext.Consumer>
  //   {(x) => {
  //     return <h1>My Gender is - {x}</h1>;
  //   }}
  // </GenderContext.Consumer>;

  const finalData = useContext(UserDetailContext);
  // console.log(finalData)
  return (
    <>
      <h1>Component 4 : {`Hello ${finalData.name} again!`}</h1>
    </>
  );
}
export default UseContext1;



/*
S1 : Context creation -
To create context, we must Import createContext and initialize it:
import { useState, createContext } from "react";
const UserContext = createContext()

S2 : Provider -
we'll use the Context Provider to wrap the tree of components that need the state Context.
Wrap child components in the Context Provider and supply the state value.
So Now, all components in this tree will have access to the user Context.

S3: useContext Hook -
In order to use the Context in a child component, we need to access it using the useContext Hook.
eg. See in Component4
*/