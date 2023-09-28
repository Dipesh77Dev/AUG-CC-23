import React, { useEffect, useState } from "react";

const Hook3 = () => {
  const [no, setNo] = useState(0);
  const [nos, setNos] = useState(0);

  //   Normal render Or changes while everytime dom updates ->

  //   useEffect( () => {
  //     alert("Clciked...");
  //   })

  // For 1st page render only ->

  //   useEffect( () => {
  //     alert("Clciked...");
  //   }, [])

  // For that varaible which we had to change while render & first render  ->

  useEffect(() => {
    alert("Clciked...");
  }, [nos]);

  return (
    <>
      <button onClick={() => setNo(no + 1)}>Click - {no}</button>
      <button onClick={() => setNos(nos + 1)}>Click - {nos}</button>
    </>
  );
};

export default Hook3;



/* 
<button
onClick={
  (() => setNo(no + 1),
  () => {
    alert("Clciked...");
  })
}
>
Click - {no}
</button> 
*/
