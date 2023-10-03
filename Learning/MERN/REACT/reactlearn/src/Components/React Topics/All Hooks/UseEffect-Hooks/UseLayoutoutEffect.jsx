import React, { useState, useEffect, useLayoutEffect } from 'react'

const UseLayoutoutEffect = () => {
    const [num, setNum] = useState(0);

    useEffect(()=> {
        console.log("First UseEffect...")
    }, []);

    useLayoutEffect(()=> {
        console.log("Second UseLayoutEffect...")
    }, []);

    useEffect(()=> {
        console.log("Third UseEffect...")
    }, []);

    useLayoutEffect(()=> {
        console.log("Forth UseLayoutEffect...")
    }, []);

    useEffect(()=> {
        console.log("Fifth UseEffect...")
    }, []);

    useEffect(()=> {
        console.log("Sixth UseEffect...")
    }, []);

    useEffect(()=> {
        if(num === 0 ){
            setNum(num + Math.random() + 200)
        }
    }, [num]);

  return (
    <div>
        <p>My new random number : {num}</p>
        <button onClick = { () => setNum(0)}>Random No</button>
    </div>
  )
}

export default UseLayoutoutEffect