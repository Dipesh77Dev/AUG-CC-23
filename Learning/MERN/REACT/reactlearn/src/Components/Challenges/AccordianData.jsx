import React, { useState } from "react";

const AccordianData = ({ question, answer }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="C9_accordian_main_div">
        <p className="C9_accordian_toggleIcon" onClick={() => setShow(!show)}>
          {show ? "➖" : "➕"}
        </p>
        <h3 className="C9_accordian_question">{question}</h3>
      </div>
      {show && <p className="C9_accordian_answer"> {answer} </p>}
    </>
  );
};


export default AccordianData;
