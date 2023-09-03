import React from 'react'

const Challenge2 = () => {
    const myName = "Raj";
    // const currentDate = new Date();
    const currentDate = new Date().getDate();
    const properCurrentDate = new Date().toLocaleDateString();
    // const currentTime = new Time();
    const currentTime = new Date().getTime();
    const properCurrentTime = new Date().toLocaleTimeString();

    return (
        <>
            <h1>Hello Everyone, My Name is - {myName} !!!</h1>
            <div>
                <h3>We will fetch current time & date -- </h3>
                <p>Current Date - {currentDate}; Current Time - {currentTime}</p>
                <p>Proper format for Current Date - {properCurrentDate}; Proper Current Time - {properCurrentTime}</p>
            </div>
        </>
    )
}

export default Challenge2;

// & Current Time - {currentTime}



/*
a) Create react app from Scratch.
b) Add one h1 element with any name.
c) Add one p element with current date.
d) Add one p element with current time.
*/