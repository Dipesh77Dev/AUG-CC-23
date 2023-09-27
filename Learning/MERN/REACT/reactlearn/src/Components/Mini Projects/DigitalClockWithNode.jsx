import { useEffect, useState } from "react";
import Clock from "react-clock";

const DigitalClockWithNode = () => {
  const [value, setValue] = useState(new Date());
//   console.log(value)

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      {/* <p>{value}</p> */}
      <Clock value={value} />
    </div>
  );
};

export default DigitalClockWithNode;

/*
import Clock from "react-digital-clock";
const DigitalClockWithNode = () => {
    <Clock />
}
*/
