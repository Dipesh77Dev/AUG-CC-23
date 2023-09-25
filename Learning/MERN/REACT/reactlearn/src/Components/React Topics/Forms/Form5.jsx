import React, { useState } from "react";

const Form5 = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    age: "",
  });

  const inputEvent = (e) => {
    // const value = e.target.value;
    // const name = e.target.name;
    const { value, name } = e.target;

    setData((prev) => {
    //   console.log(prev);
    return{
        ...prev,
        // name : value,
        [name] : value,
        // value : [name],
    }
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
          name="firstName"
          autoComplete="off"
          placeholder="Enter your firstName..."
          value={data.firstName}
          onChange={inputEvent}
        ></input>

        <input
          className="form1_input"
          type="lastName"
          name="lastName"
          autoComplete="off"
          placeholder="Enter your lastName..."
          value={data.lastName}
          onChange={inputEvent}
        ></input>

        <input
          className="form1_input"
          type="email"
          name="email"
          autoComplete="off"
          placeholder="Enter your email..."
          value={data.email}
          onChange={inputEvent}
        ></input>

        <input
          className="form1_input"
          type="number"
          name="mobile"
          autoComplete="off"
          placeholder="Enter your mobile no..."
          value={data.mobile}
          onChange={inputEvent}
        ></input>

        <input
          className="form1_input"
          type="number"
          name="age"
          autoComplete="off"
          placeholder="Enter your age..."
          value={data.age}
          onChange={inputEvent}
        ></input>

        <button className="form1_btn" type="submit">
          Submit
        </button>
        <hr />
        <h1 className="form1_h1">
          My firstName - {data.firstName}, lastName - {data.lastName} & age is -{" "}
          {data.age}
        </h1>
        <h3 className="form1_h1">Email -- {data.email}</h3>
      </div>
    </form>
  );
};

export default Form5;