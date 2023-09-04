import React from 'react'

const Greet = () => {
    // let currDate = new Date(2023, 9, 5, 12);
    let curDate = new Date();
    curDate = curDate.getHours();

    let greeting = '';

    // const cssStyle1 = {
    //     color: 'blue'
    // };
    const cssStyle1 = {}

    if (curDate >= 1 && curDate < 10) {
        greeting = "Good Morning";
        cssStyle1.color = 'blue'
    }
    else if (curDate >= 10 && curDate < 16) {
        greeting = "Good Afternoon";
        cssStyle1.color = "yellow";
    }
    else if (curDate >= 16 && curDate < 20) {
        greeting = "Good Evening";
        cssStyle1.color = "orange";
    }
    else {
        greeting = "Good Night";
        cssStyle1.color = "red";
    }

    const bodyStyle = {
        backgroundColor: "#b4f2e1",
        boxSizing: "border-box",
        margin: 0,
        padding: 0,
        fontFamily: "Josefin Sans, sansSerif"
    }

    const divStyle = {
        width: '100%',
        height: '104vh',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: '-30px'
    }

    const h1Style = {
        padding: '20px 20px',
        backgroundColor: '#ffe9c5',
        color: '#fa9191',
        borderRadius: '20px'
    }

    const spanStyle = {
        color: '#eb6383'
    }


    return (
        <>
            {/* <h1>Hello Sir - {currDate}</h1> */}
            {/* <h1>Hello Sir, Good Morning</h1> */}
            {/* <h1>Hello Sir, {curDate}</h1> */}
            {/* <h1>Hello Sir, {greeting}</h1> */}

            <div style = {bodyStyle}>
                <div style={divStyle}>
                    <h1 style = {h1Style}>Hello Sir, <span style={cssStyle1}>{greeting}</span></h1>
                </div>
            </div>
        </>
    )
}

export default Greet





/*
a) Create a react app from scratch.
b) Show a heading that says Hello Sir, Good Morning with time, if time is between 1am-10am
c) 10am-4pm show as Good Afternoon
d) 4pm-8pm show as Good Evening
e) 8pm-1am show as Good Night
f) Apply CSS & dynamically change the color of Greeting parts only using Inline CSS Ex. Red, orange, yellow, blue, etc...
*/