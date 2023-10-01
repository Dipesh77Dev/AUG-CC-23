import React, { useState } from "react";
import "./Events.css";

const Events = () => {
  const pink = "#DC48E7";
  const [bgColor, setBgColor] = useState(pink);
  const [btnName, setBtnName] = useState("Click");

  const backgroundChange = () => {
    console.log("Changing to next page with new button & background color");
    let newBg = "#6DE4EB";
    setBgColor(newBg);
    setBtnName("Come on ... 😉 ");
  };

  const returnNormal = () => {
    console.log("Return to normal....");
    setBgColor(pink)
    setBtnName("Return to Normal.. 😇");
  };

  return (
    <div className="main_div" style={{ backgroundColor: bgColor }}>
      <button
        className="main_btn"
        onClick={backgroundChange}
        onDoubleClick={returnNormal}
      >
        {btnName}
      </button>
    </div>
  );
};

export default Events;

{
  /* 
<div style={{fullBodyStyle, backgroundColor: bgColor}}>
<button styleName={buttonStyle}>Click</button>
<button style={buttonStyle} onMouseEnter={backgroundChange} onMouseLeave={}> 
*/
}
