import React from "react";

const Form1 = () => {
  const [username, setUserName] = React.useState();
  const [actualName, setActualName] = React.useState("");

  const handleName = (e) => {
    setUserName(e.target.value);
  };

  const submitName = () => {
    // setUserName(username);
    setActualName(username);
  };

  return (
    <div className="form1_div">
      <input
        className="form1_input"
        type="text"
        name="username"
        id="username"
        autocomplete="off"
        placeholder="Enter your name"
        // defaultValue=""
        value={username} // single source of truth.
        onChange={handleName}
      ></input>
      <button className="form1_btn" onClick={submitName}>
        Submit
      </button>
      <hr />
      <h1 className="form1_h1">Hello - {actualName}</h1>
    </div>
  );
};


export default Form1;