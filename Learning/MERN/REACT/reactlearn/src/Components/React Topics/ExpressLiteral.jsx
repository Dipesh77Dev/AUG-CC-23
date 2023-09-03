import React from 'react'

const name = "Rohit";
const lName = "Yadav";
const date = new Date().toLocaleString();

const ExpressLiteral = () => {
  return (
    <>
      <h3>My name is Raj</h3>
      <h3>My name is name</h3>

      {/* Expressions */}
      <h3>My name is {name}</h3>
      <h3>My age is {"2" + "3"}</h3>
      <h3>Favourite color is - {5 + 2}</h3>
      <h3>Random No. is - {Math.random()}</h3>
      {/* <h3>Date is - {date, name}</h3> */}
      <h3>Date & Name is - {date}, {name}</h3>

      {/* Templale Literal */}
      <h3>My FullName is - {name} {lName}</h3>
      <h3>My FullName is - {name + ' ' + lName}</h3>
      <h3>{`My FullName is => 
        FirstName - ${name} & lastName - ${lName}`}</h3>
      {/* <h3>`My FullName is => {name + ' ' + lName}`</h3> */}
    </>
  )
}

export default ExpressLiteral