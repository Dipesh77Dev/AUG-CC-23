import React from 'react'

const C2 = (props) => {
    console.log(props);
  return (
    <div>
        <p>Finally received</p>

        <h4>Child2 = My name is : {props.name}, age : {props.age}, gender : {props.gender}</h4>

        <h4>Child2 = My name is : {props.details.name}, age : {props.details.age}, gender : {props.details.gender}</h4>

    </div>
  )
}

export default C2