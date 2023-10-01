import React, { useState } from "react";

const UseState3 = () => {
  const [registerData, setRegisterData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  // console.log(name, username, email, password);

  // console.log(registerData.name, registerData.username, registerData.email, registerData.password);

  const handleInputs = (e) => {
    // setRegisterData(e.target.value);
    const name = e.target.name;
    const value = e.target.value;
    console.log(`${name} : ${value}`);
    setRegisterData((oldValue) => {
      return { ...oldValue, [name]: value };
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
            height: "50vh",
            paddingTop: "250px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <input
            type="text"
            name="name"
            id="name"
            // value={name}
            value={registerData.name}
            // onChange={handleInputs()}
            onChange={handleInputs}
            placeholder="Enter your name"
            autoComplete="off"
            required
          />
          <input
            type="text"
            name="username"
            value={registerData.username}
            onChange={handleInputs}
            placeholder="Enter your username"
            autoComplete="off"
            required
            style={{ marginTop: "15px" }}
          />
          <input
            type="email"
            name="email"
            value={registerData.email}
            onChange={handleInputs}
            placeholder="Enter your email"
            autoComplete="off"
            required
            style={{ marginTop: "15px" }}
          />
          <input
            type="password"
            name="password"
            value={registerData.password}
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
    </>
  );
};

export default UseState3;
