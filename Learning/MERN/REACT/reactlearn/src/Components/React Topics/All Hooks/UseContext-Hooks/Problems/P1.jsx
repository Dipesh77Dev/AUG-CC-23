import React from 'react'
import C1 from './C1'

const P1 = () => {
    const userData = {
        name: "Raj",
        age: 23,
        gender: "Male"
    };

  return (
    <div>
        <C1 details={userData}/>
    </div>
  )
}

export default P1