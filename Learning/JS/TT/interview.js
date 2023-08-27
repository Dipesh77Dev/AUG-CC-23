// Q1] Difference between Null[Empty/useless/no use] Vs Undefined[When you don't define any value or else you will define it later].

var notUsed = null // [eg. If we build a room but don't stay]
var dontknow = undefined // [eg. sports substitute]
// console.log(notUsed, dontknow);
console.log(`Q1] ${notUsed}, ${dontknow}`)
console.log(`Q1] ${typeof (notUsed, dontknow)}`)
console.log(`Q1] ${typeof notUsed}, ${typeof dontknow} \n \n`) // object, undefined [null datatype is object - 2nd bug]





// Q2] NaN[It is a property of global object(it comes in DOM, BOM; global - means wherever we write code we can access it anywhere). In other words, it is a variable in global scope. Initial value of NaN is Not-A-Number]

// var myPhone = 0123456789
var myPhone = 9874563021
var myNickname = 'Chotu'

console.log(`Q2] ${myPhone} ${myNickname}`)
console.log(`Q2] ${(typeof myPhone, typeof myNickname)}`) // no string
console.log(`Q2] ${isNaN(myPhone)}, ${isNaN(myNickname)} \n`) // false true

if (isNaN(myNickname)) {
  console.log('plz enter valid nos') // this will work
} else {
  console.log('No present')
}

if (isNaN(myPhone)) {
  console.log('plz enter valid nos')
} else {
  console.log('No present') // this will work
}





// Q3] Difference between == (Only Value) vs === (Value & Datatype) ?

let no1 = 5
let no2 = '5'
let no3 = no1 == no2 // t
let no4 = no1 === no2 // f

console.log(`
no1 - ${no1}
no2 - ${no2}
Checking type for no1 - ${typeof no1}
Checking type for no2 - ${typeof no2}
Q3] Normal Values - ${no1} & ${no2}
Checking only value - ${no3}
Checking both value & Datatype - ${no4}`)





// Q4] Difference between Var, Let & Const.

/*
a. var - function scope; let & const - block scope.
b.
var - can be redeclare & reassigned
let - can be reassigned, but can't redeclared
const - fixed value Or can't reassigned & redeclared
*/

var oldName = 'Bandu'
console.log(`OldName in var is - ${oldName}`)
var oldName = 'Raju'
console.log(`OldName in var is - ${oldName}`)
oldName = 'Goa'
console.log(`OldName in var is - ${oldName}`)

let oldName1 = 'Bandu'
console.log(`OldName in let is - ${oldName1}`)
// let oldName1 = "Raju"
// console.log(`OldName in let is - ${oldName1}`)
oldName1 = 'Goa'
console.log(`OldName in let is - ${oldName1}`)

const oldName2 = 'Bandu'
console.log(`OldName in const is - ${oldName2}`)
// const oldName2 = "Raju"
// console.log(`OldName in const is - ${oldName2}`)
// oldName2 = "Goa"
// console.log(`OldName in const is - ${oldName2}`)

// var can access function scope
function check() {
  var firstName = 'Dipesh'
  console.log(`Outer var - ${firstName}`)

  if (true) {
    var lastName = 'Kumar'
    console.log(`Inner var - ${firstName}`)
    console.log(`Inner var - ${lastName}`)
  }
  console.log(`Outer var - ${lastName}`)
}
// console.log(`Outer function var - ${firstName}`)
check()

// let & const can access only block scope [if in parent we had defined child can use i.e firstName had defined out of if else but it will work; but child defined can't be used in parent i.e lastName had been deifned in child so it will work in child only not in parent].
function check1() {
  let firstName1 = 'Dipesh'
  console.log(`Outer let - ${firstName1}`)

  if (true) {
    let lastName1 = 'Kumar'
    console.log(`Inner let - ${firstName1}`)
    console.log(`Inner let - ${lastName1}`)
  }
  // console.log(`Outer let - ${lastName1}`)
}
// console.log(`Outer function let - ${firstName}`)
check1()





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





// Q6] Function & Arrow function ?

/*
a. Function call can be done before declaring the function or after declaring the function; But in arrow function call should be done only after function had been declared, if we try before function declaration it will throw error
b. Arrow function can be used to reduce the line of code rather than in function.
*/





// Q7] Difference between for in & for of loop

let myFriends = ['Dipesh', 'Tarun', 'Mandar', 'Vedant', 'Krishna']

console.log(`Whole Array => ${myFriends}`)

// For loop [i < myfriends.length - bcoz we know length always give one no. extra than index no -
for (let i = 0; i < myFriends.length; i++) {
  console.log(`Normal for loop => ${myFriends[i]}`)
}

// for in [gives index no.] -
for (let elements in myFriends) {
  // console.log(`For in loop => ${myFriends[i]}`)
  console.log(`For in loop gives index no. => ${elements}`)
}

// for of [gives values/elements]
for (let elements of myFriends) {
  console.log(`For of loop gives elements => ${elements}`)
}





// Q8] Difference between forEach, map, filter

// forEach() VS Map() =>

/*
1. Return Value - forEach() method returns undefined & map() returns a new array with the transformed elements. Even if they do same job, returning value remains different.
2. Ability to chain other methods - map() is chainable. It means we can attach reduce(), sort(), filter(), ..., & so on after performing a map() method on array. We can't do with forEach bcoz it returns as undefined.
Map with chain Ex => let a1 = arr.map(() => {}).reduce().sort().reverse();  
*/

const arr = [1, 4, 9, 16, 25]
console.log(arr)

arr.forEach(forEach1)

function forEach1() {
  console.log(`For Each console 1 => ${arr}`)
}

let sum = 0
const numbers = [65, 44, 12, 4]
numbers.forEach(myFunction)

function myFunction(item) {
  sum += item
  console.log(numbers + ' => ', sum)
}

let newArrForEach = arr.forEach((curEl, index, arr) => {
  return `
    Current Element index no. - ${index} & its value is ${curEl} belongs to array - ${arr}`
})
console.log(`After For Each method Array - ${newArrForEach}`)

let newArrMap = arr.map((curEl, index, arr) => {
  return `
    Current Element index no. - ${index} & its value is ${curEl} belongs to array - ${arr}`
})
console.log(`After Map method Array - ${newArrMap}`)




// Q9] String, Arrays, Date & Time Object, Math Object [All Properties & Methods].





// Q10] Difference Between getElementById & querySelector?

/*
getElementById -->
element = document.getElementById(id);
Return a reference to the element by its Id. If the element with specified ID us not in document, it returns null.

querySelector -->
element = document.querySelector(selectors);  // css selectors.
Returns the 1st element within the document that matches the specified group of selectors, if no matches found it returns null.

eg.
<body>
  <ul>
    <li id="web-id">PHP</li>
    <li>HTML</li>
    <li class="web-class">CSS</li>
    <li class="web-class">JS</li>
  </ul>

  <script>
    console.log(document.getElementById("web-id").innerHTML);
    console.log(document.querySelector("#web-id").innerHTML);
  </script>
</body>


Differences <-->
What if we want to get HTML content of 3rd <li>.
We can use querySelector, but we can't used getElementById bcoz no id is there it is represented with class.

<script>
  console.log(document.getElementById("web-class").innerHTML);  // return null..

    console.log(document.querySelector(".web-class").innerHTML);
    console.log(document.querySelector("li.web-class").innerHTML);
    console.log(document.querySelector("ul li.web-class").innerHTML);

</script>
// Amongst both faster is document.getElementById bcoz it supports every browser..
*/






// Q11] Difference Between onclick & addEventListener?

/*
1. addEventListener does not override existing event handlers, whereas onclick overrides any eisting onclick function event handlers.
2. onclick will always work, whereas addEventListener does not work in Internet Explorer before version 9.

eg -->
const oc = document.getElementById('');

oc.onclick = funtion(){
  alert('1st one);
};
oc.onclick = funtion(){
  alert('2nd one);
};
oc.onclick = funtion(){
  console.log('3rd one);
}

// const oc = document.getElementById('');
const oc = document.querySelector('');

oc.addEventListener('click', () => {
  alert('1st one);
});
oc.addEventListener('click', () => {
  alert('2nd one);
});
const third = () => {
  console.log('3rd one');
};
oc.addEventListener('click', third);

*/





// Q12] Difference Between setTimeout() & SetInterval()?

// setTimeout -> After few ms/sec/minutes/hrs/day it will call only once .
// setInterval -> When we want to use/show same content continuosly.




// Q13] Output of -

const obj = {
  myAge: 26,
  myName: () => {
    console.log(this);
  }
}
obj.myName();  // it will return {} - nothing but an window object.


let bioData = {
  myName: {
    realName: "Dipesh Devrukhkar",
    hobbies: 'Playing Games'
  },
  myAge: 26,
  getData() {
    console.log(`My name is - ${this.myName.realName} and my age is - ${this.myAge} `);
  }
}
// bioData.getData();





// Q14] Output of sum (5)(3)(8)(0)(10);

function sumCurry(num1) {
  return function (num2) {
    return function (num3) {
      return function (num4) {
        return function (num5) {
          console.log(num1 + num2 + num3 + num4 + num5);
        }
      }
    }
  }
};

sumCurry(5)(3)(8)(0)(10);