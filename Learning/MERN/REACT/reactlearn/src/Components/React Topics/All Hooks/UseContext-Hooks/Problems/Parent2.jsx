import { useState } from "react";

function Component1() {
  const [user, setUser] = useState("Jesse Hall");
  const [age, setAge] = useState(25);

  return (
    <>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 user={user} ag1={age} />
    </>
  );
}

function Component2({ user, ag1 }) {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 user={user} ag2={ag1} />
    </>
  );
}

function Component3({ user, ag2 }) {
  return (
    <>
      <h1>Component 3</h1>
      <Component4 user={user} ag3={ag2} />
    </>
  );
}

function Component4({ user, ag3 }) {
  return (
    <>
      <h1>Component 4</h1>
      <Component5 user={user} ag4={ag3} />
    </>
  );
}

function Component5({ user, ag4 }) {
  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${user} again! & my age is ${ag4}`}</h2>
    </>
  );
}

export { Component1, Component2, Component3, Component4, Component5 };


// Here we can see we want to send data from parent to 5th child but bcoz the components were nested so data had to pass from 2-4 also even they didn't want.