// 1. Variables -

let _myName = 'Raj' // Valid
let _1my__Name = 'Dipesh' // Valid
// let 1myName = "Error" // Invalid
let $myName = 'RR' // Valid
// let myName% = "RR" // Invalid

// console.log(`Valid => ${_myName}, ${_1my__Name}, ${$myName};
// Invalid => ${$1myName}, ${$myName%}`);

console.log(`1. Varaibles => ${_myName}, ${_1my__Name}, ${$myName} \n `)





// 2. Datatypes =>

const res = 10 + 10 // 20
const res1 = 10 + '10' // 1010
const res2 = 2 - '5' // -3 [bug bcoz num + "" = concat, but num - "" should not be done]
const res3 = 'HT' + 'ML' // HTML
const res4 = ' ' + ' ' //
const res5 = ' ' + 0 // 0
const res6 = true + true // 2
const res7 = true + false // 1
const res8 = false + true // 1
const res9 = false - true // -1
const res10 = 'Hii ' + 'Guyz' // Hii Guyz
const res11 = 'Hii' + ' Guyz' // Hii Guyz
const res12 = 'Hii' + ' Guyz' // Hii Guyz
const res13 = 'Raj' - 'Dipesh' // NaN(Not a Number)
// const res14 = yes + yes    // E - yes is not defined
const res15 = false + false // 0
const res16 = true - true // 0
const res17 = false - false // 0

// console.log(res, res1, res2, res3, res4, res5, res6, res7, res8, res9, res10, res11, res12, res13, res15, res16, res17);
console.log(`2. Datatypes =>
res - ${res}, 
res1 - ${res1}, 
res2 - ${res2}, 
res3 - ${res3}, 
res4 - ${res4}, 
res5 - ${res5}, 
res6 - ${res6}, 
res7 - ${res7}, 
res8 - ${res8}, 
res9 - ${res9}, 
res10 - ${res10}, 
res11 - ${res11}, 
res12 - ${res12}, 
res13 - ${res13}, 
res15 - ${res15}, 
res16 - ${res16}, 
res17 - ${res17} \n `)





// 3. Null/undefined(Doubt) =>

const res18 = NaN === NaN // false
const res19 = Number.NaN === NaN // false [NaN is a property of global object, & its not any datatype or value]
// const res20 = isNan(NaN);   // true  - E
const res21 = isNaN(Number.NaN) // true [Number.NaN - we dont have any number value]
const res22 = Number.isNaN(NaN) // true

// console.log(res1, res2, res3, res4, res5);
console.log(`3. Null/undefined => 
For res18 - ${res18}, 
For res19 - ${res19}, 
For res21 - ${res21}, 
For res22 -${res22} \n `)





// 4. Operators =>

/*
Q1] What will be the output of 5**3 ?
Q2] When we add a number & string, what the output?
Q3] Program to swap 2 Numbers?
Q4] Program to swap 2 Numbers without using 3rd variables ?
*/

const expo = 5 ** 3 // 5 * 5 * 5 = 125
const expo1 = 10 ** -1 // 1/10
console.log(`Q1] ${expo}, ${expo1}`)

const concat = 'Is it a no - ' + 50
const concat1 = 'Is it a no - ' - 50 // NaN
console.log(`Q2] ${concat}, ${concat1}`)

// with using 3rd variable -
var swap1 = 10
var swap2 = 5
// op would be swap1 = 5, swap2 = 10; We had 2 methods -
console.log(`Q3] Before swapping => swap1 - ${swap1}, swap2 - ${swap2}`)

/*
1st method but its not correct
var swap1 = 5
var swap2 = 10
console.log(swap1, swap2);
*/

var swap3 = swap2 // swap3 = 5 & swap2 = 5 which is already present
swap2 = swap1 // swap2 = 10 bcoz we need swap2 values in swap1
swap1 = swap3 // swap1 = 5 bcoz we need swap2 values i.e 5 but we had change & store the value in swap3, so we will take with swap3.

console.log(`Q3] After swapping => swap1 - ${swap1}, swap2 - ${swap2}`)

// without using 3rd variable -
var swap4 = 7
var swap5 = 10

console.log(`Q4] Before swapping => swap4 - ${swap4}, swap5 - ${swap5}`)

swap4 = swap4 + swap5 // 7 + 10 = 17(swap4)
swap5 = swap4 - swap5 // 17 - 10 = 7(swap5) - done
swap4 = swap4 - swap5 // 17 - 7 = 10(swap4) - done

console.log(`Q4] After swapping => swap4 - ${swap4}, swap5 - ${swap5}`)





// 5. Condition & Loops =>

// Q5] Write a program that works out whether if a given year is leap year or not [Use - if else]

/* 
Normal year - 365 days; Leap year - 366 days(extra day 29th feb).
Whatever year we provide if its divided by 4(i.e, 2008,2012,2016,2020,...) [Leap year]
except if it can be exactly divided by 100, then it isn't (such as 2100, 2200, ...) [Not a leap year]
except if it can be exactly divided by 400, then it is(such as 2000, 2400, ...) [Leap year]
*/

const year = 2000
// const year = 2002
debugger // check in browser console for debugging
if (year % 4 === 0) {
  if (year % 100 === 0) {
    if (year % 400 === 0) {
      console.log('Q5] The year ' + year + ' is a leap year')
    } else {
      console.log('Q5] The year ' + year + ' is not a leap year')
    }
  } else {
    console.log('Q5] The year ' + year + ' is a leap year')
  }
} else {
  console.log('Q5] The year ' + year + ' is not a leap year')
}

// Truthy[truth] & Falsy[5 false values - 0, undefined, null, NaN, "", false] values in JS -
if ((score = 100)) {
  console.log('Truthy - We had won congrats')
} else {
  console.log('Falsy - Better Luck next time')
}

if (
  (score = '') ||
  (score = 0) ||
  (score = false) ||
  (score = NaN) ||
  (score = null) ||
  (score = undefined)
) {
  console.log('Truthy - We had won congrats')
} else {
  console.log('Falsy - Better Luck next time')
}

// Q6] Program to print table for given number (8,9,12,15) using for loop

// let x = 8, 9, 12, 15

for (let x = 1; x <= 10; x++) {
  debugger
  // console.log(`for loop => ${x} - ${x}`);
  var tableOf8 = 8 * x
  var tableOf9 = 9
  // console.log(`Table of 8 with for loop - ${tableOf8}`)
  console.log(tableOf9 + ' * ' + x + ' = ' + tableOf9 * x)
}

// for(let num = 1; num<=20; num++)
// {
//     let num1 = 5;
//     let table = num1 * num;
// 	console.log(`${num1} * ${num} = ${table}`); // 5 * 1, 5 * 2...
// }





// 6] Functions =>

// Q1. Difference between Function Parameter Vs Function Arguments

// if we had to find sum(20, 30); sum (50, 50) then we will need to do hardcode, so for reusing we can use function parameter(it is used while defining the function) & function arguments(it is used to pass the real value for params while calling the function).

function f1(x, y) {
  const z = x + y
  console.log(`Function with parameters & argument - ${z}`)
}
f1(5, 5)





// 7] Array =>

/*
Q1. How to Sort the numbers in the array in ascending (up) and descending (down) order?
Q2. Add Dec at the end of an array?
Q3. What is the return value of splice method?
Q4. Update march to March (update)?
Q5. Delete June from an array?
*/

// Splice method can do all CRUD Operation. Adds or removes any elements from an array.

const months = ['Jan', 'march', 'April', 'June', 'July']
console.log(`
Months - ${months}`)

const addDec = months.splice(5, 0, 'December') // splice(index No, Delete count, String).

// const addDec = months.splice(months.length, 0, "December")
console.log(`Add December - ${months}`) // soln 1

console.log(`Return Val - ${addDec}`) // soln 2, we gets an empty array bcoz we had not deleted any count. Bcoz splice method is used mostly for deleting.

// const updateMonth = months.splice(1, 1, 'March');
// console.log(`Updated month march with March - ${months}`);  // soln 3

const indexOfMonth = months.indexOf('march')
const indexOfMonth1 = months.indexOf('June')
const indexOfMonth2 = months.indexOf('April')

if (indexOfMonth != -1) {
  // const updateMonth = months.splice(1, 1, 'March');
  const updateMonth = months.splice(indexOfMonth, 1, 'March')
  // const updateMonth1 = months.splice(1, 1, 'March');
  console.log(`Updated month march with March - ${months}`) // soln 3
  console.log(updateMonth)
}
// else if (indexOfMonth1 != -1) {
//     const updateMonth1 = months.splice(indexOfMonth1, 1, 'june');
//     console.log(`Updated month march with March - ${months}`);  // soln 3
//     console.log(updateMonth1);
// }
else {
  ; ('No data found in this month')
}

if (indexOfMonth1 != -1) {
  const updateMonth2 = months.splice(indexOfMonth1, 1, 'june')
  console.log(`Updated month June with june - ${months}`) // soln 3
  console.log(updateMonth2)
} else {
  ; ('No data found in this month')
}

if (indexOfMonth2 != -1) {
  const updateMonth3 = months.splice(indexOfMonth2, 1)
  // const updateMonth3 = months.splice(indexOfMonth2, Infinity);  For deleting all if we don't know the values use infinity
  console.log(`Deleted April - ${months}`) // soln 4
  console.log(updateMonth3)
} else {
  ; ('No data found in this month')
}


// Map Method -

/*
Q1. Find square root of each element in array. let arr = [1,4,9,16,25,36,49,64,81,100];
Q2. Multiply each element by 2 & return only those elements which are greater than 10. let arr = [1,2,3,4,5,6,7,8,9,10];
*/

let squareRootArr1 = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
console.log(`squareRootArr1 - ${squareRootArr1}`)

let finalResult1 = squareRootArr1.map((elem, index, arr) => {
  // return elem;
  return Math.sqrt(elem)
})
console.log(`Final Result 1 - ${finalResult1}`)

let greatherThan10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(`greatherThan10 - ${greatherThan10}`)

let finalResult2 = greatherThan10
  .map((elem, index, arr) => {
    return elem * 2
    // let multiply = elem * 2
    // console.log(`${elem} * 2 - ${multiply}`)
    // return multiply;
  })
  .filter(elem => elem > 10)
// .filter((curElem) => curElem > 10)
console.log(`Final Result 2 - ${finalResult2}`)





// 8] Strings =>

// Q1. Display only 280 characters of a string like the one used in Twitter.


let tweet1 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

let resTweet = tweet1.slice(0, 280);  // 0 - 279 characters.
console.log(`
Original tweet length - ${tweet1.length}
Final tweet result - ${resTweet}
& Its Length - ${resTweet.length}  
`, tweet1.length, resTweet.length)



// Q2. Return the Unicode of last character in a string.

let str2 = "Hello WORLD";
let lastChar = str2.length;
let lastChar1 = str2.length - 1;

console.log(lastChar, str2.charCodeAt(lastChar), str2.charCodeAt(lastChar1));





// 9] Date & Time =>

// (function(){
//   setInterval(()=> {
//     console.log(new Date().toLocaleTimeString());
//   }, 1000)
// })();
