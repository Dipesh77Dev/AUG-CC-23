import React, { useState } from "react";

import './Challenge.scss';

const Challenge8 = () => {
  const [number, setNumber] = useState(0);

  const increase = () => {
    setNumber(number + 1);
  };

  const decrease = () => {
    if (number > 0) {
      setNumber(number - 1);
    } else {
      setNumber(0);
      alert("You can go beyond 0 or negative values...");
    }
  };

  return (
    <div className="C8_main_div">
      <div className="C8_center_div">
        <h1 className="C8_main_heading">{number}</h1>
        <div className="C8_button_div">
          <button className="C8_button" onClick={increase}>
            Increment
          </button>
          <button className="C8_button" onClick={decrease}>
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
};

export default Challenge8;
