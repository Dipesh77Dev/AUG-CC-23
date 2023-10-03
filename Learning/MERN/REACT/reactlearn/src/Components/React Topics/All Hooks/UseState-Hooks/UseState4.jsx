import React, { useState } from "react";

const UseState4 = () => {
  const [registerData, setRegisterData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const { name, email, password, username } = registerData;

  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setRegisterData((oldValue) => {
      return { ...oldValue, [name]: value };
      //   return { ...oldValue, name: value };
      //   return { ...oldValue, name: [value] };
    });
  };

  function submitData() {
    alert("All datas had been submitted!!!");
  }

  return (
    <>
      <form onSubmit={submitData}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "70vh",
            paddingTop: "250px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={handleInputs}
            placeholder="Enter your name"
            autoComplete="off"
            required
          />
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleInputs}
            placeholder="Enter your username"
            autoComplete="off"
            required
            style={{ marginTop: "15px" }}
          />
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleInputs}
            placeholder="Enter your email"
            autoComplete="off"
            required
            style={{ marginTop: "15px" }}
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleInputs}
            placeholder="Enter your password"
            autoComplete="off"
            required
            style={{ marginTop: "15px" }}
          />

          <button type="submit" style={{ marginTop: "20px", width: "100px" }}>
            Submit
          </button>
        </div>
      </form>
      <hr />
      <div>
        <p style={{textAlign: "center"}}>
          My Data is -- Name: {name}, User: {username}, Email: {email}
        </p>
      </div>
    </>
  );
};

export default UseState4;
