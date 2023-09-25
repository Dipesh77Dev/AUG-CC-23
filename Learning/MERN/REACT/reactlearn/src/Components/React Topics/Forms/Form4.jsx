import React, { useState } from "react";

const Form4 = () => {
  // const [data, setData] = useState({});
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const inputEvent = (e) => {
    // console.log(e.target.value);
    // console.log(e.target.name);
    // console.log(e.target.placeholder);

    const value = e.target.value;
    const name = e.target.name;

    // console.log(value, name);

    setData((prev) => {
      // console.log(prev);

      if (name == "username") {
        return {
          username: value,
          email: prev.email,
          password: prev.password,
        };
      } else if (name == "email") {
        return {
          username: prev.username,
          email: value,
          password: prev.password,
        };
      } else if (name == "password") {
        return {
          username: prev.username,
          email: prev.email,
          password: value,
        };
      }
      else{
        return (<h1>Error Happened....</h1>)
      }
      // value: [name]
    });
  };

  const submitName = (event) => {
    event.preventDefault();
    alert("Form submitted...");
  };

  return (
    <form onSubmit={submitName}>
      <div className="form1_div">
        <input
          className="form1_input"
          type="text"
          name="username"
          autoComplete="off"
          placeholder="Enter your username..."
          // value={data.username}
          onChange={inputEvent}
        ></input>

        <input
          className="form1_input"
          type="email"
          name="email"
          autoComplete="off"
          placeholder="Enter your email..."
          // value={data.email}
          onChange={inputEvent}
        ></input>

        <input
          className="form1_input"
          type="password"
          name="password"
          autoComplete="off"
          placeholder="Enter your password..."
          // value={data.password}
          onChange={inputEvent}
        ></input>
        <button className="form1_btn" type="submit">
          Submit
        </button>
        <hr />
        <h1 className="form1_h1">
          UserName - {data.username} & Email - {data.email}
        </h1>
      </div>
    </form>
  );
};

export default Form4;
