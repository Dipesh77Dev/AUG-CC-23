import React from "react";

const Form1 = () => {
  const [username, setUserName] = React.useState("");
  const [actualName, setActualName] = React.useState("");

  const handleName = (e) => {
    setUserName(e.target.value);
  };

  const submitName = (e) => {
    e.preventDefault();    // It doesn't show whatever we type in addressbar & doesn't refresh the page
    setActualName(username);
  };

  return (
    <>
      <form onSubmit={submitName}>
        <div className="form1_div">
          <input
            className="form1_input"
            type="text"
            name="username"
            id="username"
            autocomplete="off"
            placeholder="Enter your name"
            value={username}
            onChange={handleName}
          ></input>
          <button type="submit" className="form1_btn">
            Submit
          </button>
          <hr />
          <h1 className="form1_h1">Hello - {actualName}</h1>
        </div>
      </form>
    </>
  );
};

export default Form1;

// When we were not using form tag everything was working properly, means we were able to store the data in state, but when we use form tag it has default behaviour that it refresh the page, & we were setting methods like GET/POST & action like php, etc it goes to backend & store in DB. 
// But here we don't want to send to DB, just when user type we should display data by using form tag we can do it by form's event - onSubmit method.