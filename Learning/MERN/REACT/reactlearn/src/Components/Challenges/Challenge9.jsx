import React, { useState } from "react";

import { questions } from "./questionApi";

import AccordianData from "./AccordianData";

const Challenge9 = () => {
  const [data, setData] = useState(questions);
  //   console.log(data);

  return (
    <>
      <section className="C9_main_section">
        <h1 className="C9_main_heading">Top 10 React Basics Interview Questions --</h1>
        {data.map((currElem) => {
          const { id } = currElem;
          return <AccordianData key={id} {...currElem} />;
        })}
      </section>
    </>
  );
};

export default Challenge9;




// return <AccordianData data={data}/>;
// return <AccordianData key={currElem.id}/>