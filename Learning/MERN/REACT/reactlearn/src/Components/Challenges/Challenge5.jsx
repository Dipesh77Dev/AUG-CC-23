import React from "react";

const headerStyle = {
  textAlign: "center",
};


const SlotMachine1 = () => {
  let x = "😇";
  let y = "😇";
  let z = "😇";
  z = "😎";

  if (x === y && y === z) {
    return (
      <>
        <div>
          <h1>
            {x} {y} {z}
          </h1>
          <h3>This is Matching...</h3>
          <hr />
        </div>
      </>
    );
  } else {
    return (
      <>
        <div>
          <h1>
            {x} {y} {z}
          </h1>
          <h3>This is Not Matching...</h3>
          <hr />
        </div>
      </>
    );
  }
};


const SlotMachine2 = (props) => {
  if (props.x === props.y && props.y === props.z) {
    return (
      <>
        <div>
          <h1>
            {x} {y} {z}
          </h1>
          <h3>This is Matching...</h3>
          <hr />
        </div>
      </>
    );
  } else {
    return (
      <>
        <div>
          <h1>
            {x} {y} {z}
          </h1>
          <h3>This is Not Matching...</h3>
          <hr />
        </div>
      </>
    );
  }
};


const SlotMachine3 = (props) => {
  //   let x = props.x;
  //   let y = props.y;
  //   let z = props.z;

  let { x, y, z } = props;

  if (x === y && y === z) {
    return (
      <>
        <div>
          <h1>
            {x} {y} {z}
          </h1>
          <h3>This is Matching...</h3>
          <hr />
        </div>
      </>
    );
  } else {
    return (
      <>
        <div>
          <h1>
            {x} {y} {z}
          </h1>
          <h3>This is Not Matching...</h3>
          <hr />
        </div>
      </>
    );
  }
};


const Challenge5 = () => {
  return (
    <>
      <h1 style={headerStyle}>Welcome to Slot Machine game....</h1>

      {/* 
      <div>
        <SlotMachine1 />
        <SlotMachine1 />
      </div> 
      */}


      {/* 
      <div>
        <SlotMachine2 x={"😇"} y={"😇"} z={"😇"} />
        <SlotMachine2 x={"😇"} y={"😇"} z={"😎"} />
        <SlotMachine2 x={"😇"} y={"😇"} z={"😇"} />
        <SlotMachine2 x={"😇"} y={"😇"} z={"😎"} />
      </div> 
      */}


      <div>
        <SlotMachine3 x={"😇"} y={"😇"} z={"😇"} />
        <SlotMachine3 x={"😇"} y={"😇"} z={"😎"} />
        <SlotMachine3 x={"😇"} y={"😇"} z={"😇"} />
        <SlotMachine3 x={"😇"} y={"😇"} z={"😎"} />
      </div>
    </>
  );
};


export default Challenge5;