import React from 'react'
import C2 from './C2'

const C1 = ({details}) => {
    // const {name, age, gender} = props
  return (
    <>
    <p>C1 = My name is {details.name} & age is {details.age}</p>
    <C2 details={details}/>
    </>
  )
}

export default C1