import React, { useState } from "react";

const UseState2 = () => {
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(name, username, email, password);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  function submitData() {
    alert("All datas had been submitted!!!");
  }

  return (
    <>
      <form>
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
            // value="Raj"
            value={name}
            onChange={function ok() {
              setName(event.target.value);
            }}
            placeholder="Enter your name"
            autoComplete="off"
            required
          />
          <input
            type="text"
            name="username"
            // value="xyz"
            value={username}
            onChange={(e) => {
              // setUserName(username);
              // setUserName(e.target)
              setUserName(e.target.value);
            }}
            placeholder="Enter your username"
            autoComplete="off"
            required
            style={{ marginTop: "15px" }}
          />
          <input
            type="email"
            name="email"
            // value="xyz@gmail.com"
            value={email}
            onChange={handleEmail}
            placeholder="Enter your email"
            autoComplete="off"
            required
            style={{ marginTop: "15px" }}
          />
          <input
            type="password"
            name="password"
            // value="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            autoComplete="off"
            required
            style={{ marginTop: "15px" }}
          />

          <button
            style={{ marginTop: "20px", width: "100px" }}
            onClick={submitData}
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default UseState2;

/*
// const datas = name && username && email && password === "";

// const res = datas
//   ? alert("Please fill all datas..")
//   : "All datas had been filled, Thz for filling...";
// console.log(`Submitted data - ${res}`);

// if(name && username && email && password !== ''){
//   alert("Please fill all datas..")
// }
// else{
// alert("All datas had been filled, Thz for filling...")
// }
*/
