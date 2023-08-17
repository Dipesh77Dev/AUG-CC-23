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
function check () {
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
function check1 () {
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

function forEach1 () {
  console.log(`For Each console 1 => ${arr}`)
}

let sum = 0
const numbers = [65, 44, 12, 4]
numbers.forEach(myFunction)

function myFunction (item) {
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


