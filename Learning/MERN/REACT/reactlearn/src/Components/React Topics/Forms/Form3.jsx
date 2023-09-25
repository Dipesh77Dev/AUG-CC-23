import React, { useState } from "react";

const Form3 = () => {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState("");
  const [actualName, setActualName] = useState('');
  const [actualPassword, setActualPassword] = useState("");

  const handleUserName = (e) => {
    setUserName(e.target.value);
  };

  const handleUserPassword = (e) => {
    setPassword(e.target.value);
  };

  // const inputEvent = (e) => {
  //   setUserName(e.target.value);
  //   setPassword(e.target.value);
  // }

  const submitName = (event) => {
    event.preventDefault();
    setActualName(username);
    setActualPassword(password);
  };

  return (
    <form onSubmit={submitName}>
      <div className="form1_div">
        <input
          className="form1_input"
          type="text"
          autocomplete="off"
          placeholder="Enter your username"
          value={username}
          onChange={handleUserName}
          // onChange={inputEvent}
        ></input>

        <input
          className="form1_input"
          type="password"
          autocomplete="off"
          placeholder="Enter your password"
          value={password}
          onChange={handleUserPassword}
          // onChange={inputEvent}
        ></input>
        <button className="form1_btn" type="submit">
          Submit
        </button>
        <hr />
        <h1 className="form1_h1">UserName - {username} & Password - {password}</h1>
        <h1 className="form1_h1">UserName - {actualName} & Password - {actualPassword}</h1>
      </div>
    </form>
  );
};

export default Form3;