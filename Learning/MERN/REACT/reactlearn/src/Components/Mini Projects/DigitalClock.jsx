import React, { useState } from "react";

const DigitalClock = () => {
  let time = new Date().toLocaleTimeString();

  const [showCurrentTime, setShowCurrentTime] = useState(time);

  const updateTime = () => {
    time = new Date().toLocaleTimeString();
    setShowCurrentTime(time);
  };

  setInterval(updateTime, 1000);
  return (
    <>
      <div style={{marginLeft: '50%'}}>
        <h1>{time}</h1>
      </div>
      {/* <h5>{showCurrentTime}</h5> */}
      {/* <button onClick={updateTime}>Current Time</button> */}
    </>
  );
};

export default DigitalClock;

