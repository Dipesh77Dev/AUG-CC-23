import React from 'react'
import { add, sub, mult, div, div1 } from './Challenge4SubPart'

const Challenge4 = () => {
    const liStyle = {
        display: 'flex',
        flexDirection: 'column',
    }

    return (
        <>
            <ul style={liStyle}>
                <li> Addition of two no. is {add(10, 20)}</li>
                <li> Subtraction of two no. is {sub(10, 5)}</li>
                <li> Multiplication of two no. is {mult(10, 5)}</li>
                <li> Divison of two no. is {div(10, 5)}</li>
                <li> Divison of two no. is {div1(20, 7)}</li>
            </ul>
        </>
    )
}

export default Challenge4