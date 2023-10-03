import React, {useState, useMemo} from 'react'

const UseMemo1 = () => {
    const [num1, setNum1] = useState(0);
    const [show, setShow] = useState(false);

    const getValue = () => {
        return setNum1(num1 + 1);
    };

    const countNumber = (num) => {
        console.log(num);
        for(let i = 0; i <= 10000000; i++) {}
        return num;
    };

    const CheckData = () => {
        return countNumber(num1);
    };

    const CheckData1 = useMemo (() => {
        return countNumber(num1);
    }, [num1]);

  return (
    <div>
        <button onClick={getValue}>
            Counter
        </button>
        {/* <p>My increased number: { CheckData }</p> */}
        {/* <p>My increased number: <CheckData /></p> */}

        <p>My increased number: { CheckData1 }</p>
        <button onClick={() => setShow(!show)}>
            {show ? "You had clicked me" : "Plz click me"}
        </button>
    </div>
  )
}

export default UseMemo1