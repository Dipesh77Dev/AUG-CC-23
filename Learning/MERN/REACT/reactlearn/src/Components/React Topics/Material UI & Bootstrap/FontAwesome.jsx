import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleMinus } from "@fortawesome/free-solid-svg-icons";

const FontAwesome = () => {
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

        {/* Normal Button */}
        <div className="C8_button_div">
          <button className="C8_button" onClick={increase}>
            Increment
          </button>
          <button className="C8_button" onClick={decrease}>
            Decrement
          </button>
        </div>
        <br />

        {/* FontAwesome Icon - */}
        <div className="C8_button_div">
          <button onClick={increase}>
            <i className="fa-solid fa-plus"></i>
          </button>
          <button onClick={decrease}>
            {/* <FontAwesomeIcon icon="fa-sharp fa-solid fa-minus" beat /> */}

            {/* Individual Import ->  */}
            {/* <FontAwesomeIcon icon={faMinus} beat/> */}
            <FontAwesomeIcon icon={faCircleMinus} />
          </button>
        </div>
        <br />

      </div>
    </div>
  );
};

export default FontAwesome;
