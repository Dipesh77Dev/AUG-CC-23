import React from 'react'

const Challenge6 = () => {
    let ct = new Date().toLocaleTimeString();
    // console.log(ct);

    const [currentTime, setCurrentTime] = React.useState(ct);

    const ChangeTime = () => {
        // let ct = new Date().toLocaleTimeString();
        // setCurrentTime(currentTime);
        setCurrentTime(ct);
    }
 
  return (
    <div style = {{margin: '20% 40%', width: '30%'}}>
        {/* <h1>{ct}</h1> */}
        <h1>{currentTime}</h1>
        <button style = {{width: '50%'}} onClick={ChangeTime}>Time</button>
    </div>
  )
}

export default Challenge6