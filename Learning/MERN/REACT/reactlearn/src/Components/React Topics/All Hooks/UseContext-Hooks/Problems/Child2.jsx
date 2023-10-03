import React from 'react'
import Child3 from './Child3'

const Child2 = ({y}) => {
  return (
    <div>
      {/* <h1>Hello - {y}, I am the Child Component2..</h1> */}
        <Child3 y={y}/>
    </div>
  )
}

export default Child2