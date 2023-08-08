// Q1] Difference between Null[Empty/useless/no use] Vs Undefined[When you don't define any value or else you will define it later].


var notUsed = null; // [eg. If we build a room but don't stay]
var dontknow = undefined; // [eg. sports substitute]
// console.log(notUsed, dontknow);
console.log(`Q1] ${notUsed}, ${dontknow}`);
console.log(`Q1] ${typeof (notUsed, dontknow)}`);
console.log(`Q1] ${typeof (notUsed)}, ${typeof (dontknow)} \n \n`); // object, undefined [null datatype is object - 2nd bug]



// Q2] NaN[It is a property of global object(it comes in DOM, BOM; global - means wherever we write code we can access it anywhere). In other words, it is a variable in global scope. Initial value of NaN is Not-A-Number]


// var myPhone = 0123456789
var myPhone = 9874563021
var myNickname = "Chotu";

console.log(`Q2] ${myPhone} ${myNickname}`);
console.log(`Q2] ${typeof (myPhone), typeof (myNickname)}`);   // no string
console.log(`Q2] ${isNaN(myPhone)}, ${isNaN(myNickname)} \n`);     // false true

if (isNaN(myNickname)) {
    console.log("plz enter valid nos") // this will work
}
else {
    console.log("No present")
}

if (isNaN(myPhone)) {
    console.log("plz enter valid nos")
}
else {
    console.log("No present") // this will work
}




// Q3] Difference between == (Only Value) vs === (Value & Datatype) ?

let no1 = 5
let no2 = '5'
let no3 = no1 == no2    // t
let no4 = no1 === no2   // f


console.log(`
no1 - ${no1}
no2 - ${no2}
Checking type for no1 - ${typeof (no1)}
Checking type for no2 - ${typeof (no2)}
Q3] Normal Values - ${no1} & ${no2}
Checking only value - ${no3}
Checking both value & Datatype - ${no4}`)





// Q4] Difference between Var, Let & Const.





// Q5] Why Functions & Difference between parameters & arguments

/*
We can reuse code: Define the code once, and use it many times.
We can use the same code many times with different arguments, 
to produce different results.     OR
A function is a group of reusable code which can be called anywhere 
in your program. This eliminates the need of writing the same code 
again and again.

DRY => do not repeat yourself
*/