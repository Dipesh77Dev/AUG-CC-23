/* 
1] Values & Variables =>

Variable - It is an container which is used for storing data.
Keyword - Keywords are reserved words that are part of the syntax in the programming language. 
eg - await, break, case, catch, class, const, continue, debugger, default, delete, do, else, enum, export, extend, false, finally, for, function, if, implements, import, in, instanceof, interface, let, new, null, package, private, protected, public, return, super, switch, static, this, throw, try, true, typeof, var, void, while, with, yield.
Identifier - It is a unique name that is given to entities like variables, functions, class, etc.
camelCase, PascalCase.

var myName = "Raj"; [var - variable(key)/keyword; myName - variable name; "Raj" - value].  Semicolon is optional in JS.

Variables/Identifiers Rule -
1. 1st Character must be a letter, underscore(_), dollar($), but better is using letter only. We can't use Number as first character.
eg. Valid - var age; var _age; var $age; var my_age$is22; 
Invalid - var 22Age.
2. Rest of variable name can include any letter, number, underscore. Can't use other characters, including spaces.
eg. We can't use space in between 2 variables i.e var _my Age = 25 (Wrong)
We can write as var my, age = 25..
3. Varaible Names are Case Sensitive ('y' & 'Y' are different).
eg. var myAge = 25; cl(myage); - Error bcoz while reading its same but naming convention is different.
4. No limit to variable name.
5. We cant use keyword as a variable name.
eg. var var = 25;

var age; - Declaration [if we console this it will return undefined. undefined means we had not giving any value but afterwards we can give it a value]
age = 22; - Initialization
var age = 25; Dynamic Initialization[Declaration + initialization]
*/

let myName = 'Raj'
// var age = 21;
let myAge = 22
// console.log(myAge);
// console.log("My age is -", myAge);
console.log(`1. Varaibles => My name is - ${myName} & age is - ${myAge}
\n `)






/*
2] Datatypes(which type of data it contains) =>
Primitives -
undefined: typeof instance === "undefined"
Boolean: typeof instance === "boolean" [true/false => 1/0 or we can use yes/no]
Number: typeof instance === "number" [10, 2.5]
String: typeof instance === "string" ["Raj", 'Raj']
BigInt: typeof instance === "bigint" [Part of ES 2015]
Symbol: typeof instance === "symbol" [Part of ES 2015]

In other languages we write like (here we can get idea by keyword name what exactly data it stores)-
char name = ""; int age = "". 

But in Js -
var name = "", let name = "", const name = "".

To check which datatype it contains we had one method -
typeof();
*/

let myName1 = 'Rajesh'
let myAge1 = 25
let isLegal1 = true
// console.log(`Name is ${name} & its type is -`, typeof(name)); // Error
// console.log(`Name is ${myName1} & its type is -`, typeof(myName1));
// console.log(`Age is ${myAge1} & its type is -`, typeof(myAge1));
// console.log(`18+ is ${isLegal1} & its type is -`, typeof(isLegal1));

console.log(`2. Datatypes => 
My Name is ${myName1} & its type is ${typeof myName1}.
My Age is ${myAge1} & its type is ${typeof myAge1}.
I am 18+ is ${isLegal1} & its type is ${typeof isLegal1}.
\n `)






/*
3] Expressions & Operators =>
Expression - Combination of Operator & Operand.
console.log(10 + 20); [+ - operator, 10 & 20 are operands]

Operators -
1. Assignment Operator[It assigns a value to its left operand based on the value of its right operand. Simple assignment operator is equal(=)]

2. Arithmetic Operator[It takes numerical values (either literals/variables) as their operand & returns a single numerical value Or just deal with mathematics operations].

3. Comparison Operator[It compares its operands & returns a logical value based on whether the comparison is true/false].

4. Logical Operator[It used with Boolean(logical) values & return a Boolean value].
Comparison & Logical will always return a boolean value(true/false).

5. String Operator[Concatenation operator(+) - Used to combine 2 string values together, Or returning another string that is the union of 2 operand string].

6. Conditional(ternary) Operator [We will see in es6 or in loops. But it is shorthand for "if-else"]
*/

console.log(10 + 20)

let x = 5
let y = 5

console.log(x == y)
console.log('Is both x & y are equal or not' + x == y) // false [bcoz here its like we are concatenating].

// To deal with this we had template literal operator comes in es 6
console.log(`Is both x & y are equal - ${x == y} \n`)

let a1 = 10 // simple assignment operator [ a1 =10]
let a2 = 5
a2 += 5 // addition assignment operator [a2 = a2 + 5 ]
let a3 = 5
a3 -= 5 // subtraction assignment operator [a3 = a3 -5 ]
let a4 = 5
a4 *= 5 // multiplication assignment operator [a4 = a4 * 5 ]
let a5 = 5
a5 /= 5 // divide[Quotient] assignment operator [a5 = a5 / 5 ]
let a6 = 5
a6 %= 5 // modulus[Remainder] assignment operator [a6 = a6 % 5 ]
let a7 = 5
a7 **= 5 // Exponention[Power/Raise to] assignment operator [a7 = a7 ** 5]
let text = 'Hello'
text += 'World'

console.log(`Assignment Operators => 
Simple Operator - ${a1}, 
Addition Operator - ${a2}, 
Subtraction Operator - ${a3},
Multiplication Operator - ${a4}, 
Division Operator - ${a5},
Modulus Operator - ${a6},
Exponention Opearator - ${a7},
Normal String/Concate - ${text}
\n `)

let add = 7 + 7
let sub = 7 - 7
let mul = 7 * 7
let div = 7 / 7
let modulus = 7 % 7
let exp = 7 ** 2

console.log(`Arithmetic Opeators =>
Addition is - ${add}, Subtraction is ${sub}, Multiplication is - ${mul}, Division is(Quotient) - ${div}, Modulus is(Remainder) - ${modulus}, Exponention/Power is - ${exp}. \n `)



/* 
Part of Arithmetic operator only =>
Increment(increase) & Decrement(decrease) -
Operator: x++ or ++x; x-- or --x
If we use postfix(x++) - It increments & return the value before incrementing. It means the expression is evaluated first using the original value of the variable & then the variable is incremented(increased).
If we use prefix(++x) - It increments & return the value after incrementing. It means the variable is incremented first & then the expression is evaluated using the new value of the variable. 
*/

let num = 10
// let newNum = 20++;
let newNum = num++
let newNum1 = num++ + 5 // (num + 5)
let num1 = 7
let newNum2 = ++num1
let newNum3 = ++num1 + 5

console.log(`Increment & Decrement =>
Normal value - ${num}
Increment postfix - ${newNum}
Increment postfix - ${newNum1}
Normal value - ${num1}
Increment prefix - ${newNum2}
Increment prefix - ${newNum3}
`)

let sum1 = 20
let sum2 = 15
let sum3 = 20

const equalTo = sum1 == sum2 // f
const EqualTo = sum1 == sum3 // t

const notequalTo = sum1 != sum2 // t
const NotEqualTo = sum1 != sum3 // f

const greatherThan = sum1 > sum2 // t
const GreaterThan = sum1 > sum3 // f

const greatherThanAndEqualTo = sum1 >= sum2 // t
const GreaterThanAndEqualTo = sum1 >= sum3 // t

const lessThan = sum1 < sum2 // f
const LessThan = sum1 < sum3 // f

const lessThanAndEqualTo = sum1 <= sum2 // f
const LessThanAndEqualTo = sum1 <= sum3 // t

console.log(`Comparison Operator =>
equal to - ${equalTo},
Equal to - ${EqualTo}
notequal to - ${notequalTo},
NotEqual to - ${NotEqualTo}
greatherThan - ${greatherThan},
GreaterThan - ${GreaterThan}
greatherThanAndEqualTo - ${greatherThanAndEqualTo},
GreaterThanAndEqualTo - ${GreaterThanAndEqualTo}
lessThan - ${lessThan},
LessThan - ${LessThan}
lessThanAndEqualTo - ${lessThanAndEqualTo},
LessThanAndEqualTo - ${LessThanAndEqualTo}`)



/*
Logical AND (&& - ampersand) - It(logical conjunction) for a set of expression is true iff(if & only if) all of its expression are true.
Logical OR (|| - vertical pipe/2 pipe) - It(logical disjunction) for a set of expression is true iff(if & only if) one or more of its expression are true. 
Logical NOT (!) - It(logical complement, negation) makes true as false Or vice-versa
We can had many logical expression in one statement but we should had atleast 2 expression to compare amongst them.
Logical AND/OR are important bcoz its used in validations.
*/

let la = 10
let la1 = -5
let la2 = 7
let check1 = la > la1 // t
let logicalAnd = check1 && la1 > 0 // f
let LogicalAnd = la2 > la && la1 > 0 // f
let LogicalAnd1 = la > la2 && la2 > 0 // t
let LogicalOR = la > la2 || la2 > 0 // t
let LogicalOR1 = la < la2 || la2 > 0 // t
let LogicalOR2 = la < la2 || la2 > 10 // f
let LogicalOR3 = la > la2 || la2 > 10 || (la = 0) // t
let LogicalOR4 = la > la2 || la > la2 || (la = 0) // t
let logicalNot = la > 0 || la1 > 0 // t
let logicalNot1 = !(la > 0 || la1 > 0) // although it true but it will reverse & make as false.
let logicalNot2 = true // true
let logicalNot3 = !true // false
let logicalNot4 = false // false
let logicalNot5 = !false // true

console.log(`Logical Operator =>
check1 - ${check1}
logicalAnd - ${logicalAnd}
LogicalAnd - ${LogicalAnd}
LogicalAnd1 - ${LogicalAnd1}
LogicalOr - ${LogicalOR}
LogicalOR1 - ${LogicalOR1}
LogicalOR2 - ${LogicalOR2}
LogicalOR3 - ${LogicalOR3}
LogicalOR4 - ${LogicalOR4}
logicalNot - ${logicalNot}
logicalNot1 - ${logicalNot1}
logicalNot2 - ${logicalNot2}
logicalNot3 - ${logicalNot3}
logicalNot4 - ${logicalNot4}
logicalNot5 - ${logicalNot5}
`)

const str = 'Hello World!!'
const str1 = 'Hello '
const str2 = 'World!!'
const str3 = str1 + str2
const str4 = str1 + str2 + ' Great Learning, ' + 'Keep it up dude...'
const str5 = 'Am I Good in - ' + 'JS ??'
const fullName = 'Dipesh Dattatray Devrukhkar'
const firName = 'Dipesh'
const lastName = 'Devrukhkar'
const fullName1 = firName + ' Dattatray ' + lastName

console.log(`String Concatenation Operator =>
Whole string - ${str}
str1 - ${str1}
str2 - ${str2}
str3 - ${str3}
str4 - ${str4}
str5 - ${str5}
fullName - ${fullName}
fullName1 - ${fullName1}
`)







/*
4] Control Statement & Loops =>
1. if else, if elseif[if statement executes when the condition is true, if the condition is false then another statement/else condition will execute]

2. switch statement[Evaluates an expression, matching the expression's value to a case clause & executes statements associated with that case].

3. while loop[It creates a loop that executes a specified statement as long as test condition evaluates to true; loop - repeat again & again]

4. do-while loop[It gives one output doesn't matter if its condition satisfied or not]

5. for loop[shorthand of while loop, do while loop & gives result fast as compared to them].

6. for in/for of loop[Used in array so it will be in array section & its introduced in ES6]

7. conditional(ternary) operator[It is the only operator that takes 3 operands Or Shorthand for if-else]

ShortHand for if else is ternary operator
But when we had nested if else then we used Switch Statements.
*/

var contro = 500
// if we go with friends to party so. if i had money = give, else friend will give my money. if(expression/condition){... true...}else{...false...}
if (contro > 500) {
    console.log(`I had money, I will give`)
} else {
    console.log(`Else - My friend will give`)
}


if (contro <= 500) {
    console.log(`If - I had money, I will give`)
} else {
    console.log(`My friend will give`)
}


let age1 = 20
if (age1 >= 18) {
    console.log('He/she are eligible to vote')
} else {
    console.log('He/she are not eligible to vote')
}


// variable name = (conditn) ? val1(true) : val2(false)
let age2 = 15
// console.log((age2 > 18) ? "Drive" : "Can't Drive")
let Rajesh = age2 > 18 ? 'Can Drive' : "Can't Drive"
console.log(`Rajesh ${Rajesh}`)



// Without break/continue statement =>
// Q] Find the area of circle, triangle, rectangle - area = circle =>; area = triangle =>; area = rectangle =>.

const PI = 3.14
let r = 5,
    l = 10,
    b = 7,
    side = 10
let cir = PI * r * r
let tri = (l * b) / 2 // 1/2 * b * h
let rect = l * b // w * h... same for parallelogram
let squ = side * side



/*
// let area = "rectangle";
let area = "parallelogram";

if(area == "circle"){
    // console.log(`Circle found => Value is - ${PI} * ${r} * ${r}`)
    console.log(`Circle found => Value is - ${cir}`)
}
else if(area == "rectangle"){
    console.log(`Rectangle found => Value is - ${rect}`)
}
else if(area == "square"){
    console.log(`Square found => Value is - ${squ}`)
} 
else if(area == "triangle"){
    console.log(`Triangle found => Value is - ${tri}`)
}
else{
    console.log(`${area} not found`)
}
*/



// We can had multiple cases and it should ends with semicolon; We can have only 1 default that if no match than execute this and default can be given anywhere (i.e in middle, in end); but we had one problem that whenever it matches with case it will run till the end.

/*
let area1 = 'rectangle'
switch(area1){
    case 'circle' :
        console.log(`Circle found => Value is - ${cir}`);
    case 'triangle' :
        console.log(`Triangle found => Value is - ${tri}`);
    case 'rectangle' :
        console.log(`Rectangle found => Value is - ${rect}`);
    case 'square' :
        console.log(`Square found => Value is - ${squ}`);
    default :
        console.log(`${area1} not found`)
}
*/



// To deal with above problem we had break statement[Terminates/end current loop, switch or label statements & transfers program control to statement following the terminated statement. We can't pass break keyword in default]

let area1 = 'rectangle'
switch (area1) {
    case 'circle':
        console.log(`Circle found => Value is - ${cir}`)
        break
    case 'triangle':
        console.log(`Triangle found => Value is - ${tri}`)
        break
    case 'rectangle':
        console.log(`Rectangle found => Value is - ${rect}`)
        break
    case 'square':
        console.log(`Square found => Value is - ${squ}`)
        break
    default:
        console.log(`${area1} not found`)
}



// Continue - it terminates execution of the statements in the current iteration of the current or labeled loop, and continues execution of the loop with the next iteration.



// Loops -

// If we had to print nos from 1 - 5

/*
Wrong Approach -
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
*/

/* Right approach =>
let whileLoop = 1;
while(whileLoop < 100){
    // console.log(`Infinite Loop - ${whileLoop}`); // Infinite loop
    whileLoop++;
    console.log(`For ${whileLoop} - ${whileLoop}`)
}
*/

// Block Scope = {} so if condition true than goes to block, if condition false then goes outside the block
let whileLoop1 = 20
while (whileLoop1 < 10) {
    whileLoop1++
    console.log(`For whileLoop => ${whileLoop1} - ${whileLoop1}`)
}


// Diffn While Loop - Until we dont get condition true it doesn't show; but in doWhile - whether condition satisfied or not we get output for once.
let doWhileLoop = 0
debugger
do {
    doWhileLoop++
    console.log(`For doWhileLoop =>${doWhileLoop} - ${doWhileLoop}`)
} while (
    // while(doWhileLoop > 20)
    doWhileLoop < 5
)


// for(initializer[var num = 1]; condition[num >= 10]; iteration[num++ / num--]){ Code to execute....}
for (let num = 1; num < 5; num++) {
    debugger
    console.log(`For loop => ${num} is ${num}`)
}


for (let num = 1; num > 5; num++) {
    console.log(`For loop => ${num} is ${num}`)
}






/*
5. Function =>
Function - It are first-class objects that can be passed to other functions, returned from functions, and assigned to variables and properties. They make JavaScript code more readable, organized, reusable, and maintainable Or 
It is a block of code which is designed to perform a particular task.

Function Definition[Before we use a function, we need to define it. A function definition (also called a function declaration/function statement) consists of the function keyword, followed by: 
a.The name of the function,
b. A list of parameters to the function, enclosed in parentheses and separated by commas, 
c. The JavaScript statements that define the function, enclosed in curly brackets, {...}].

Call Function[Defining a function cannot used it. It will execute when something invokes it (calls the function)]
Function Parameters & Arguments[
Function parameters are the names listed in the function's definition.
Function arguments are the real values passed to the function OR passed the values when we call the function].

Function Expressions[It simply means create a function and put it into the variable]

Return Keyword[When JavaScript reaches a return statement, the function will stop executing. Functions often compute a return value. The return value is "returned" back to the "caller"]

Anonymous Function[A function expression is similar to and has the same syntax as a function declaration. One can define "named" function expressions (where the name of the expression might be used in the call stack for example) or "anonymous" function expressions]
We avoid giving function name i.e function(){}.
*/

/*
let ok = 20
let ok1 = 15
let ok2 = ok + ok1
console.log(ok2) // 35
We can't use this anywhere & can't change value of ok or ok1.
When we had to deal - ok2 with different-different numbers, so that time we can use functn.
*/


// don't use any varaibles name same as the function name given, it will run but we will had confusion...
function f1() {
    let ok = 20,
        ok1 = 10
    let ok2 = ok + ok1
    console.log(`Function => ${ok2}`)
}
f1()
console.log(f1())
// console.log(`Function => ${f1()}`);



function f2(x, y) {
    const z = x + y
    console.log(`Function with parameters & argument - ${z}`)
}
f2() // No Arguments
f2(5, 5)
f2(50, 50)
f2(20, 30)



function f3(x, y) {
    const z = x + y
    console.log(
        `Function with parameters & argument & stored in Variables - ${z}`
    )
}
let func = f3(7, 7)
// func;



function f4(x, y) {
    return (z = x + y)
}
let func1 = f4(7, 7)
console.log(`Function with return keyword => ${func1}`)



let f5 = function (x, y) {
    return (z = x + y)
}

let respo = f5(10, 20)
let respo1 = f5(5, 5)
let respo2 = f5(10, 10)

console.log(`Anonymous function => ${f5(2, 4)}`)
console.log(`Anonymous function with problem => ${f5}`)
console.log(`Anonymous function with problem => ${f5()}`)
console.log(`Anonymous function => ${respo}`)
console.log(`Anonymous function => ${respo}`)
console.log(`Anonymous function => ${respo1 > respo2}`)
console.log(`Anonymous function => ${respo1 < respo2}`)






/*
6] ES6 =>

JS had been introduced at 1996;
JS had submitted to ECMA for standardization which resulted in ECMAScript by 1997.
By 2015 we started giving standardize name for js & annual releases of ECMAScript.
Till 2014 we get amazing features & update, in 2014 we got 'use strict' mode so that we can't have waste debuggings, but from year 2015 it comes with many features so it make JS more easy to use..
In 2015(known as ECMAScript 2015 or ES6[6th edition of js]).
After 2015 we are getting new js edition [i.e 2015 - ES6, 2016 - ES7, 2017 - ES8].

New features for ES6/Modern JS/ECMAScript 2015 =>
let & const[Challenge, interview question]; template strings; default arguments; destructuring[Array or Objects, IMP.]; Object properties; Arrow Functions; Rest Operator[We don't use that much]; Spread Operator[Imp.]
Destrucing, Object Properties, Rest & Spread Operator can be deal when we done with arrays & Objects topics.
*/

// Template literals =>

// Normal Methods -
console.log('Namaste JS!!')
let normalString = 'Hello'
console.log(normalString + ' World')
let name1 = 'Rohit'
let age3 = 27
let hobby = 'Playing Cricket'
let bankBalance = 500
console.log(
    'Normal way => My name is - ' +
    name1 +
    '. My age is - ' +
    age3 +
    '. My Hobby is - ' +
    hobby +
    '. Bank Balance is - ' +
    bankBalance
)

console.log(`Template Literal => My name is - ${name1}. My age is - ${age3}. My Hobby is - ${hobby} & His nickname is "Shaanya", 
Nickname can also be as - 'Chiku'.
Bank Balance is - ${bankBalance * 20}
`) // Automatic replacing of variables with real value is called as string interpolation.



// Default Parameters/Arguments[It allow named parameters to be initialized with default values, if no value or undefined is passed] =>

function mult(a, b) {
    return a * b
}
var line = 'Normal Function'
var multResult = mult(10, 10)
// console.log(`${line} (mult(10, 10))`)
// console.log(mult(10,10))
console.log(`${line} => ${multResult}`)


function mult1(a, b) {
    return a * b
    // var line = 'ES6 Default Parameters & Arguments'
}
var line1 = 'normal func'
var mult1Result = mult1(5)
console.log(`${line1} => ${mult1Result}`)


function mult2(a, b = 3) {
    return a * b
}
var line2 = 'ES6 Default Parameters & Arguments'
var mult2Result = mult2(5)
console.log(`${line2} => ${mult2Result} \n`)



// Arrow Function/Fat Arrow Function =>

// Normal Functn -

// console.log(`Normal Function => ${powerFunc}`)
console.log(power(7, 2))

function power(x, y) {
    let result = x ** y
    return `Power of ${x} raise to ${y} is = ${result}`
}
var powerFunc = power(7, 2)
// let powerFunc = power(7,2);
console.log(`Normal Function => ${powerFunc}`)


// console.log(add(50,50))
console.log(add4())
function add4() {
    let x1 = 50,
        x2 = 50
    let z1 = x1 + x2
    return `Normal add function - ${z1}`
}


// Arrow -
// console.log(add5())
const add5 = () => {
    let x1 = 100,
        x2 = 100
    let z1 = x1 + x2
    return `Arrow add function - ${z1}`
}
console.log(add5())


const add6 = () => {
    let x1 = 100,
        x2 = 100
    return `Reduce in Arrow add function 1 - ${x1 + x2}`
}
console.log(add6())


const add7 = () => {
    return `Reduce in Arrow add function 2 - ${(x1 = 75) + (x2 = 75)}`
}
console.log(add7())


// If there is only one return statement no need to used that.
const add8 = () => {
    ; `Reduce in Arrow add function 3 - ${(x1 = 75) + (x2 = 75)}`
}
console.log(add8()) // undefined


// If there is only one return statement no need to used that.
const add9 = () => `Reduce in Arrow add function 4 - ${(x1 = 75) + (x2 = 75)}`
console.log(add9())






/*
7] Arrays =>
Array[
When we use var, we can store only 1 value/data at a time. 
But when we had to store multiple values & datatypes in one variable then we use array. In Js we have an array class & array are the prototype of this class].
var names = ["Raj", "Dipu", "Lollz"]
Raj - Lower Index/Lower Boundary/Starting Element; Lollz - Upper Index, Upper Boundary/Ending element.
So in array inside this [] is called as Elements.
So to access each individual elements we had the index no. & it starts with 0 & to access last element - we can had array.length - 1. 
Length starts with 1 & index starts with 0, if we had to go reverse so its starts with -1


Traversal of Array <--> [length, for loop, for in, for of, forEach()]
Search & Filter in an Array <--> [Search -> indexOf(), lastIndexOf(), includes(); Filter -> find(), findIndex(), filter()]
Sort & Compare an Array <--> [sort(), reverse()]
Insert, Read, Replace/update, Delete elements in array[CRUD Operation] <--> [push(), pop(), shift(), unshift(), splice()]
Map(), Reduce(), Filter()
*/

// var f1 = "Rajesh" , "Ramesh" - error
let fri1 = 'Rajesh',
    fri2 = 'Ramesh',
    fri3 = 'Pakya',
    fri4 = 'Gotya'
let ag1 = 30,
    ag2 = 28,
    ag3 = 35,
    ag4 = 20
console.log(`
${fri1} - ${ag1}
${fri2} - ${ag2}
${fri3} - ${ag3}
${fri4} - ${ag4}
`)



/*
How can we store this whole values & different datatypes only in 1 variable that can be done by array.
In other programming language when we deal with array so it is used to store multiple values is right, but there is catch if we are storing only string value so we are not able to stored any other datatypes in that array.
But in JS we can store any kind of datatypes in an array.
One thing is that we can store multiple values at a time, but we can't store that extra data to that particular respective data, so for that we had an objects. 
*/

let myFriendsName = ['Rajesh', ' Ramesh', ' Pakya', ' Gotya']
console.log(`My friends Name in Array - ${myFriendsName}`)

// let myArray1 = ["Rajesh", 20, male, 'Ramesh', 25, male, "Pinki", 28, female, true, false, 100]

// var myArray1 = new Array    // Its optional bcoz js automatically understand that if we used [] then it will be an array's data.


let myArray1 = ['Rajesh', 20, 'Ramesh', 25, 'Pinki', 28, true, false, 100]
let myArray2 = [
    ('Rajesh', 20, false),
    ('Ramesh', 25),
    ('Pinki', 28),
    (true, false),
    100
]
console.log(`My Array1 - ${myArray1}
My Array2, but not getting whole array only last value for storing that one's whole data we required objects - ${myArray2}`)



// Traversal of Array[It traverse/navigate to each element of an array. If we want to get single value/data at a time & also if we want to change the data of that particular element].

let myArray3 = ['Dipesh', 'Tarun', 'Mandar', 'Vedant', 'Krishna']
console.log(`My friends names =>
For whole Array - ${myArray3};
For first element Dipesh - ${myArray3[0]},
For Tarun - ${myArray3[1]},
For Mandar - ${myArray3[2]},
For Vedant - ${myArray3[3]},
For Krishna - ${myArray3[4]},
For last element when we had huge data - ${myArray3[myArray3.length - 1]},
For last element when we had huge data - ${myArray3[myArray3.length - 2]}. `)
// For going with descending - ${myArray3[-1]},
// For going with descending - ${myArray3[-3]}.


// if we want to check the length of elements of an array Or if we had large no of data so if want to access last data so at that time we can had myArray3.length - 1, myArray3.length-2 ...
console.log(`Total elements in array - ${myArray3.length}`) // .length is an property; if it method than it would be - .length()


// for loop, for in, for of, forEach() -

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


// for of [gives values/elements] -
for (let elements of myFriends) {
    console.log(`For of loop gives elements => ${elements}`)
}


// for each[calls a function for each elements in an array OR
// We can pass one callback function with this 3 params - elements(particular element in array), index(index no), array(particular array), thisArg(not mandatory/optional)]
// Combination of for In + for of = for Each.
// In for each we can't have break statement bcoz if it starts with data it will show the data to us till the end
// thisArg(4th parameter) it supports in normal function, in fat arrow we can't pass the 4th parameter in it -

myFriends.forEach(function (element, index, array) {
    // console.log(`For Each => ${element} & index no is - ${index} of that array - ${array}`)
    console.log(`Normal Function => ${element} index no is - ${index}`)
    console.log(`Normal Function => ${array}`)
})


myFriends.forEach((element, index, array) => {
    console.log(`Fat Arrow Function => ${element} index no is - ${index}`)
    console.log(`Fat Arrow Function => ${array}`)
})



// Search & Filter in an Array[Search : Search the data(eg. in amazon we can write any brandName so it will show that particular brands detail), filter : put condition (eg. like price, color, etc...)] -

// Search Methods in Array -

// Array.prototype.indexOf() : Returns the first (least) index of an element within the array equal to an element, or -1 if none is found. It search the element from the 0th index number; [Forward Direction & access array one time only] -

let myFriends1 = [
    'Dipesh',
    'Tarun',
    'Mandar',
    'Vedant',
    'Krishna',
    'Priya',
    'Koyal',
    'Mansi',
    'Priya',
    'Bhakti',
    'Khusbu'
]

// console.log(`a. IndexOf => ${myFriends1.indexOf(Khusbu)}`) - Error
console.log(myFriends1.indexOf('Mandar')) // 2
console.log(`a. IndexOf => ${myFriends1.indexOf('Priya', 4)}`) // 5
console.log(`a. IndexOf => ${myFriends1.indexOf('Priya', 6)}`) // 8
console.log(`a. IndexOf => ${myFriends1.indexOf('Priya', 9)}`) // -1
console.log(`a. IndexOf => ${myFriends1.indexOf('priya', 4)}`) // -1



// Array.prototype.lastIndexOf() : Returns the last (greatest) index of an element within the array equal to an element, or -1 if none is found. It search the element last to first. [Backward Direction & access array one time only] -

console.log(myFriends1.lastIndexOf('Priya')) // 8
console.log(`a. lastIndexOf => ${myFriends1.lastIndexOf('Priya', 4)}`) // -1
console.log(`a. lastIndexOf => ${myFriends1.lastIndexOf('Priya', 6)}`) // 5
console.log(`a. lastIndexOf => ${myFriends1.lastIndexOf('Priya', 9)}`) // 8
console.log(`a. lastIndexOf => ${myFriends1.lastIndexOf('priya', 4)}`) // -1



// Array.prototype.includes() : Determines whether the array contains a value, returning true/false as appropriate. [Forward only & access array one time only]

console.log(myFriends1.includes('Priya')) // true
console.log(`a. includes => ${myFriends1.includes('priya', 4)}`) // false
console.log(`a. includes => ${myFriends1.includes('Priya', 5)}`) // true
console.log(`a. includes => ${myFriends1.includes('Priya', 9)}`) // false



// Filter Methods of array  -

// Array.protoype.find() : arr.find(callback(element[, index[, array]])[, thisArg]). Returns the found element in the array, if some element in the array satisfies the testing function, or undefined if not found. Only problem is that it return only one element

const prices = [0, 50, 100, 150, 200, 250, 300, 350, 400, 500, 600, 700, 1000]

// Contitn 1 - prices > 500
const findMethod1 = prices.find((currVal, index, arr) => {
    return currVal > 500
})


// Contitn 2 - prices <= 500
const findMethod2 = prices.find((currVal, index, arr) => {
    return currVal <= 500
})


// Contitn 3 - prices = 200 && prices > 100
const findMethod3 = prices.find((currVal, index, arr) => {
    return (currVal = 200 && currVal > 100)
})


// Contitn 4 - prices = 200 || prices > 100
const findMethod4 = prices.find((currVal, index, arr) => {
    return (currVal = 200 || currVal > 100)
})


// Contitn 5 - prices >= 1000
const findMethod5 = prices.find((currVal, index, arr) => {
    return currVal > 1000
})

// console.log(prices.find((currVal, index, arr) =>currVal > 500));     // currVal is nothing but just an element
console.log(
    `Find method with only 1st element : ${findMethod1}, ${findMethod2}, ${findMethod3}, ${findMethod4}, ${findMethod5}`
) // 600, 0, 150, 0, undefined



// Array.prototype.findIndex() : Returns the found index in the array, if an element in the array satisfies the testing function, or -1 if not found.


// Contitn 1 - prices > 500
const findMethod6 = prices.findIndex((elem, index, arr) => {
    return elem > 500
})


// Contitn 2 - prices <= 500
const findMethod7 = prices.findIndex((elem, index, arr) => {
    return elem <= 500
})


// Contitn 3 - prices = 200 && prices > 100
const findMethod8 = prices.findIndex((elem, index, arr) => {
    return (elem = 200 && elem > 100)
})


// Contitn 4 - prices = 200 || prices > 100
const findMethod9 = prices.findIndex((elem, index, arr) => {
    return (elem = 200 || elem > 100)
})


// Contitn 5 - prices >= 1000
const findMethod10 = prices.findIndex((elem, index, arr) => {
    return elem > 1000
})

// console.log(prices.findIndex((currVal, index, arr) =>currVal > 500));
console.log(
    `Find Index Method with only index no. of that element: ${findMethod6}, ${findMethod7}, ${findMethod8}, ${findMethod9}, ${findMethod10}`
) // 10, 0, 3, 0, -1



// Array.prototype.filter() : Returns a new array containing all elements of the calling array for which the provided filtering function returns true. It does't mutate the current array(doesn't change any value in current array instead it makes a new array with updated one).
// For solving all above problem we had one solution that it returns all the elements in an new array i.e (filter method). [Its very important bcoz, it are using in React & Node for filteration].

// Contitn 1 - prices > 500
const findMethod11 = prices.filter((elem, index, arr) => {
    return elem > 500
})


// Contitn 2 - prices <= 500
const findMethod12 = prices.filter((elem, index, arr) => {
    return elem <= 500
})


// Contitn 3 - prices = 200 && prices > 100
const findMethod13 = prices.filter((elem, index, arr) => {
    return (elem = 200 && elem > 100)
})


// Contitn 4 - prices = 200 || prices > 100
const findMethod14 = prices.filter((elem, index, arr) => {
    return (elem = 200 || elem > 100)
})


// Contitn 5 - prices >= 1000
const findMethod15 = prices.filter((elem, index, arr) => {
    return elem > 1000
})

// console.log(prices.findIndex((currVal, index, arr) =>currVal > 500));
console.log(
    findMethod11,
    findMethod12,
    findMethod13,
    findMethod14,
    findMethod15
)
console.log(`Filter Method: 
FindMethod11 - ${findMethod11}, 
FindMethod12 - ${findMethod12},
FindMethod13 - ${findMethod13}, 
FindMethod14 - ${findMethod14}, 
FindMethod15 - ${findMethod15}`)



// Sort & Compare an Array[ASC, DES] - It sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

// Array.prototype.sort() -

const months = ['March', 'Aug', 'Jan', 'Dec', 'Apr', 'Oct', 'Feb', 'Nov', 'Jul']
const nos1 = [1, 25, 0, 45, -3, 10000, -8, 100, -15, 5.5, 999, 777]
const sort1 = months.sort()
const sort2 = nos1.sort()
console.log(`Sorted Array: ${sort1}, 
${sort2}`)

// However, the numbers are sorted as string & had a sort comparison, i.e ("25" is bigger than "100", because "2" is bigger than "1"). Because of this, the sort() method produce an incorrect result when sorting numbers.


var fruits = ['Banana', 'Orange', 'Apple', 'Mango']
var fruits1 = ['Banana', 'Orange', 'Apple', 'Mango']

let fruitsA = fruits.sort()
let fruitsB = fruits1.reverse()



// Array.prototype.reverse() - It reverses an array in place. 1st array element becomes last & last array element becomes 1st.

console.log(`Normal sort - ${fruitsA}.
Reverse sort - ${fruitsB}.`)



// Insert, Read, Replace/update, Delete elements in array[CRUD Operation]

// Array.prototype.push() - It adds 1 or more elements to the end of an array & returns new length of the array.

// const sports1 = ['cricket', 'football'];

// // sports.push('Kabaddi')
// const beforePush = sports1
// const afterPush = sports1.push('Hockey');
// const afterPushData = sports1

// console.log(`
// Before Push - ${beforePush},
// After Push - ${afterPush}
// After Push Data - ${afterPushData}
// `);


const sports2 = ['Cricket', 'Football']
console.log(`
Before Push Method => ${sports2}`)


sports2.push('Kabaddi')
console.log(`After Push Method - Add data in Last => ${sports2}`)


const count = sports2.push('Hockey', 'Chess')
console.log(count)

// sports2.push('Hockey' , 'Chess', 'Carrom'); console.log(sports2);

console.log(`After Push Method - Add data in Last => ${sports2}`)



// Array.prototype.unshift() - It adds one or more elements to the  beginning of an array and returns the new length of the array.

const city = ['Srilanka', 'WestIndia']
console.log(`City is - ${city}`)

city.unshift('Newzland')
console.log(`After Unshift method - ${city}`)

const moreUnshift = ('India', 'Austrilia')
console.log(`Array - ${moreUnshift}`)

const moreUnshift1 = city.unshift('India', 'Austrilia')
console.log(`Final array - ${city}, Count - ${moreUnshift1}`)

// Sort perfectly work with string, but when it deals with nos, so it create problem.


const myNos = [3, 4, 5]
console.log(`Array - ${myNos}`)
console.log(`FinalArray => Count - ${myNos.unshift(0, 1, 2)}, Array - ${myNos}`)



// Array.prototype.pop() - It removes the last element from an array and returns that element. This method changes the length of the array.

const myArray = [1, 2, 3, 4, 5, 0]
console.log(`Before pop Array => ${myArray}`)

const finalArray = myArray.pop()
console.log(
    `Final Array Removed => ${finalArray}, Final Array after pop => ${myArray}, Count - ${myArray.length}`
)


const plants = ['broccoli', 'cauliflower', 'kale', 'tomato', 'cabbage']

console.log(plants)
console.log(plants.pop())
console.log(plants)



// Array.prototype.shift() - The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.

const evenNo = [1, 2, 4, 6, 8, 10]
console.log(`Before shift Array => ${evenNo}`)

const finalArray1 = evenNo.shift()
console.log(
    `Final Array Removed => ${finalArray1}, Final Array after shift => ${evenNo}, Count - ${evenNo.length}`
)


const plants1 = ['broccoli', 'cauliflower', 'kale', 'tomato', 'cabbage']

console.log(plants1)
console.log(plants1.pop())
console.log(plants1)


// Splice method can do all CRUD Operation. Adds or removes any elements from an array.



// Map(), Reduce(), Filter() - 70% - 80% it is used in react & node for filteration, play with data, play with array or api's data.


// Array.prototype.map() - Returns a new array containing the results of calling a function on every element in this array.
// let newArray = arr.map(callback(currentValue[, index[, array]]) { return element for newArray, after executing something}[, thisArg]);
// It return new array without mutating the orignal array, but in for each it modifies in the original array itself.


const arr2 = [1, 4, 9, 16, 25, 36, 49]
console.log(`
Before Map method Array - ${arr2}`)

// num > 9
let newArr1 = arr2.map((curElem, index, arr) => {
    return curElem > 9
})
console.log(`After Map method Array - ${newArr1}`)


let newArr2 = arr2.map((curEl, index, arr) => {
    return `
    Current Element index no. - ${index} & its value is ${curEl}belongs to array - ${arr}`
})
console.log(`After Map method Array - ${newArr2}`)


let newArrForEach = arr2.forEach((curEl, index, arr) => {
    return `
    Current Element index no. - ${index} & its value is ${curEl}belongs to array - ${arr}`
})
console.log(`After For Each method Array - ${newArrForEach}`)



// Reduce Method - It flatten an array means to convert the 3d or 2d array into a single dimensional array. The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in single output value.
// The reducer function takes four arguments: Accumulator(Used for storing data), Current Value/Element(Access/Traverse through an individual elements of array), Current Index(Index No), Source Array(Array).
// In ES 2020 we had alternate topics which had replaced the reduce method.

let greatherThan10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(`greatherThan10 - ${greatherThan10}`)

let finalResult2 = greatherThan10
    // .map((elem, index, arr) => elem * 2)
    // .filter(elem => elem > 10)
    // .reduce((acc, elem) => (acc += elem))

    .map((elem, index, arr) => {
        let mult2 = elem * 2
        console.log(`${elem} * 2 => ${mult2}`)
        return mult2;
    })
    .filter((elem) => {
        let gt10 = elem > 10
        // console.log(`${elem} > 10 => ${gt10, elem}`)
        console.log(`${elem} > 10 => ${elem}, ${gt10}.`)
        return gt10;
    })
    .reduce((acc, elem) => {
        let sum1 = acc + elem;
        // console.log(`${elem} Sum is => ${sum1}`)
        console.log(`${elem} + ${acc} => ${sum1}`)
        return sum1;
    })

console.log(`Final Result 2 - ${finalResult2}`)

// Now if we had to sum the value which we get it's not possible bcoz with map we will get true/false and return an new array, filter we will provide only condition that what we had to performed (i.e what is remaining or what should filled ). So that time for having total sum, total product, or anything but we need only single value is done by reduce method.


// let arrReduce = [5, 6, 2, 7, 9]
// console.log(`arrReduce - ${arrReduce}`)


// let sumReduce = arrReduce.reduce((accumulator, curElem, index, array) => {
//     return (accumulator += curElem)
// })
// console.log(`sumReduce - ${sumReduce}`)


// Eg. we had 4 subject Marks, in that we know 3 subject Marks i.e [5,6,7], but how can i get to know my 1 subject marks which I was not present for that lecture.

let arrReduce = [5, 6, 7]
console.log(`arrReduce - ${arrReduce}`)
// arr.unshift(10);

let sumReduce = arrReduce.reduce((accumulator, curElem, index, array) => {
    return (accumulator += curElem)
}, 10)
console.log(`sumReduce - ${sumReduce}`)


// How to fatten an array - converting 2d and 3d array into one dimensional array 

const arr3 =
    [
        ['zone_1', 'zone_2'],
        ['zone_3', 'zone_4'],
        ['zone_5', 'zone_6'],
        ['zone_7', 'zone_8']
    ];

const arr4 =
    [
        ['zone_1', 'zone_2'],
        ['zone_3', 'zone_4'],
        ['zone_5', 'zone_6'],
        ['zone_7', ['zone_7', ['zone_7', 'zone_8']]]     // but there is an catch, that if we do more nested array so it didn't make from 2D array to single array, so in ES 2020 we had better soln for this & replace the reduce method..
    ];

let flatArr1 = arr3.reduce((accum, currVal) => {
    return accum.concat(currVal);
})

let flatArr2 = arr4.reduce((accum, currVal) => {
    return accum.concat(currVal);
})

console.log(flatArr1);
console.log(flatArr2);
console.log(arr4.flat(Infinity));  // ES 2020


// const arr5 = [['zone_1', 'zone_2'], ['zone_3', ['zone_1', 'zone_2', ['zone_1', 'zone_2']]]];
// console.log(arr5.flat(3));
// console.log(arr5);






/*
8] Strings => 
[
String is zero or more characters written inside quotes. It are used for storing and manipulating text. We can use single or double quotes.
Strings can be created as primitives, from string literals, or as objects, using the String() constructor. String can hold only one value in a variable. [eg. let car = "Audi",(Right) let car = "Audi", "BMW"(Wrong)]
].

Escape Character[\' => ' ==> Single Quote; \" => " ==> Double Quote; \\ => \ ==> Backslash; \b => backspace; \f => form feed; \n => New Line; \r => Carriage Return; \t => Horizontal Tabular; \v => Vertical Tabulars]
Finding a String in String <--> [indexOf(), lastIndexOf(), .length]
Searching for String in String <--> [search(regex)]
Extracting String Parts <--> [slice(start, end); substring(start, end); substr(start, length)]
Replacing String Content <--> [replace(), replaceAll()]
Extracting String Characters <--> [charAt(position); charCodeAt(position), property access [ ] ].
Other useful methods <--> [upperCase(); lowerCase(); concat(); trim()]; Convert String to an array using split method
*/


// 👉 How to find the length of a string
// String.prototype.length 🙋‍♂️
// Reflects the length of the string. 

// let myName = "vinod thapa";
// console.log(myName.length);


let myOrgNameDoubleQuote = "DD";
let myOrgNameDoubleQuoteWithSpace = "D D";
let myOrgNameSingleQuote = 'DD';
let myOrgNameSingleQuoteWithSpace = 'D D';
let myOrgNamewithNull = " "


let ytName = new String("GG Ok"); // We dont used this bcoz its shows an diff output
let ytName1 = 'GG';

console.log(`
String => ${myOrgNameDoubleQuote}, ${myOrgNameDoubleQuoteWithSpace}, ${myOrgNameSingleQuote}, ${myOrgNameSingleQuoteWithSpace}, ${myOrgNamewithNull}`);
// console.log((ytName + ytName1));
console.log((ytName, ytName1));



// String.prototype.length - Reflects the length of the string.

let demoName = "Cool Buddy";
console.log(`Demo Name - ${demoName}
Length - ${demoName.length}`);  // The length property returns the length of a string.



// Escape Character (\' => ' => Single Quote, \" => " => Double Quote, \\ => \ => Backslash). But remember when we had to use both quote so interchange give whole outside string as single & use inside as double or vice-versa.

// let anySentence1 = "We are the so-called "Vikings" from the north.";
// console.log(anySentence1);  // Error

let anySentence2 = "We are the so-called \"Vikings\" from the north.";
console.log(anySentence2);


let anySentence3 = "We are the so-called 'Vikings' from the north. "; console.log(anySentence3);  // if you dont want to mess, simply use the alternate quotes 


// Finding a string -


// String.prototype.indexOf(searchValue [, fromIndex]) - The indexOf() method returns the index of (the position of) the first occurrence of a specified text in a string. JavaScript counts positions from zero. 0 is the first position in a string, 1 is the second, 2 is the third, ...etc. Remember in string spaces are also count. If its present it will return index no, if not it will return as -1(we had seen this in array).


const myBioData = 'Hello Guyz I am Web Developer';
console.log(`
Index Of =>
Wrong Match bcoz its case-sensitive - ${myBioData.indexOf("web", 6)}
Correct - ${myBioData.indexOf("Web")}
Correct - ${myBioData.indexOf("G", 8)}`);

// Soln =>  -1, 16, -1



// String.prototype.lastIndexOf(searchValue [, fromIndex]) - Returns the index within the calling String object of the last occurrence of searchValue, or -1 if not found.

const myBioData1 = 'Hello Guyz I am Web Developer';
console.log(`
Last-Index Of =>
Wrong Match bcoz its case-sensitive - ${myBioData1.lastIndexOf("web", 6)}
Correct - ${myBioData1.lastIndexOf("Web")}
Correct - ${myBioData1.lastIndexOf("G", 8)}`);

// Soln =>  -1, 16, 6


// String.prototype.search(regexp) - It searches a string for a specified value and returns the position of the match. The search() method cannot take a second start position argument.

const myBioData2 = 'Hello Guyz I am Web Developer/JS Developer';
const searchBioData1 = myBioData2.search("developer")
const searchBioData2 = "Developer"
const searchBioData2_1 = myBioData2.search("Developer")
const searchBioData3 = myBioData2.search("Devel")
// const searchBioData3 = myBioData2.search("Devel", 5) // E - We cant give start position argument

console.log(`
Search =>
Original data - ${myBioData2},
searchBioData1 - ${searchBioData1},
searchBioData2 - ${myBioData2.search("Developer"), searchBioData2},
searchBioData2_1 - ${searchBioData2_1}
searchBioData3 - ${searchBioData3}
`)

// Soln => whole String; -1; Developer, ; 20; 20. 



// Extracting String Parts - slice(start, end); substring(start, end); substr(start, length);


// slice(start, end) - It extracts a part of a string and returns the extracted part in a new string. It takes 2 parameters: the start position, and the end position (end not included).
// It selects the elements starting at the given start argument, and ends at, but does not include, the given end argument.
// Note: The original array will not be changed.
// Remember: JavaScript counts positions from zero. First position is 0, Second position is 1, ....


// const strSlice = "Apple, Banana, Mango", "Apple, Orange";  // E - String can hold only 1 value in a variable.
const strSlice = "Mango";
const strSlice1 = 'Apple, Banana, Mango';
const resSlice1 = strSlice1.slice(3, 15);
const resSlice2 = strSlice1.slice(3);
const resSlice3 = strSlice1.slice(8, -3);
const resSlice4 = strSlice1.slice(-3);
const resSlice5 = strSlice1.slice(-10, -3);

console.log(`Extract String =>
Slice ==>
String with one item - ${strSlice}
String with multiple items - ${strSlice1}
Final resSlice1 - ${resSlice1}
Final resSlice2 - ${resSlice2}
Final resSlice3 - ${resSlice3}
Final resSlice4 - ${resSlice4}
Final resSlice5 - ${resSlice5}
`)



// substring(start,end) - It is similar to slice(). The difference is that substring() cannot accept negative indexes. If we give negative value then the characters are counted from the 0th position. OR start and end values less than 0 are treated as 0 


const strSubString = "Mango";
const strSubString1 = 'Apple, Banana, Mango';
const resSubString1 = strSubString1.substring(3, 15);
const resSubString2 = strSubString1.substring(3);
const resSubString3 = strSubString1.substring(8, -3);

console.log(`Extract String =>
SubString ==>
String with one item - ${strSubString}
String with multiple items - ${strSubString1}
Final resSubString1 - ${resSubString1}
Final resSubString2 - ${resSubString2}
Final resSubString3 - ${resSubString3}
`)



// The substr() Method - It is similar to slice(). The difference is that the second parameter specifies the length of the extracted part.

var strSubStr = "Apple, Bananaa, Kiwi";
let res1 = strSubStr.substr(0, 4);
let res2 = strSubStr.substr(7, -2);
let res3 = strSubStr.substr(-4);
console.log(res1, `
SubStr ==>
Original String - ${strSubStr},
Res 1 - ${res1},
Res 2 - ${res2},
Res 3 - ${res3},
`);




// String.prototype.replace(searchFor, replaceWith) - It replaces a specified value with another value in a string.

/* 
Points => 
1: The replace() method does not change the string it is called on. It returns a new string.
2: By default, the replace() method replaces only the first match
3:By default, the replace() method is case sensitive. Writing Dipesh (with upper-case) will not work
*/


const myBioDataOrg = 'I am dipesh Dev, Learning JS for now... - dipesh';

let resultBioData = myBioDataOrg.replace('dipesh', "DIPESH");
let resultBioData1 = myBioDataOrg.replace('DIPESH', "dipesh");
let resultBioData2 = myBioDataOrg.replace(/DIPESH/i, "Mandar");
let resultBioData3 = myBioDataOrg.replace(/DIPESH/g, "Mandar");
let resultBioData4 = myBioDataOrg.replace(/dipesh/g, "Mandar");
// let resultBioData5 = myBioDataOrg.replace(/dipesh/i/g, "Mandar");
let resultBioData5 = myBioDataOrg.replaceAll("dipesh", "Tarun"); // Its an part of ES 2021

console.log(`Replacing String =>
Replace ==>
Original String - ${myBioDataOrg},
Resulted/Replaced String Data with 1st match - ${resultBioData}
Wrong bcoz that searching field is not present - ${resultBioData1}
With regular expression(regex) -- (i) case sensitive <-> ${resultBioData2}
With regular expression(regex) -- (g) replace all matches but not work <->${resultBioData3}
With regular expression(regex) -- (g) replace all matches work <->${resultBioData4}
With Replace All Method <->${resultBioData5}
`)


// Extracting String Characters => charAt(position); charCodeAt(position); Property access [ ]


// charAt(position) - It returns the character at a specified index (position) in a string. It doesn't work with negative index values.

let extract1 = "Hello WORLD!!...";
console.log(extract1.charAt(2), extract1.charAt(10), extract1.charAt(5), extract1.charAt(-3), extract1.charCodeAt(0));


// charCodeAt(position) - It returns the unicode of the character at a specified index in a string:
// The method returns a UTF-16 code(an integer between 0 and 65535).
// The Unicode Standard provides a unique number for every character, no matter the platform, device, application, or language. UTF-8 is a popular Unicode encoding which has 88-bit code units. But if we provide negative index it will return as NaN.


let extract2 = "Hello WORLD";
console.log(extract1.charCodeAt(2), extract1.charCodeAt(10), extract1.charCodeAt(5), extract1.charCodeAt(-3), extract1.charCodeAt(0));


// Property Access (ECMAScript 5 - 2009) - It allows property access [ ] on strings..


let extract3 = "HELLO WORLD";
console.log(extract3[0], extract3[3], extract3[5], extract3[7], extract3[10]);



// Other Methods => upperCase(), lowerCase(), concat(), trim(), convert string into array 


// UpperCase() & LowerCase() -

const normalStr = "DIPesh devruKhKAR";
const uc = normalStr.toUpperCase();     // all letter in caps
const lc = normalStr.toLowerCase();     // all letter in small

console.log(` Normal String - ${normalStr}, UpperCase - ${uc}, LowerCase - ${lc}`);


// concat - Joins 2 or more strings.

let fName = "Dipesh";
let lName = "dev"

console.log((fName, lName), (fName + lName), (fName.concat(lName)), (fName.concat(" ", lName)));
console.log(`My first Name is -> ${fName} & Last name is -> ${lName}`)
console.log(`${fName} ${lName}`)


// trim - It removes whitespace from both sides of a string

let strTrim = "              Hello         World!            ";
let strTrim1 = "Hello         World!            ";
let strTrim2 = "Hello World!            ";
let strTrim3 = " Hello World!";
console.log(`${strTrim.trim()}, ${strTrim1.trim()}, ${strTrim2.trim()}, ${strTrim3.trim()}`);



// String convert into Array - A string can be converted to an array with the split() method 

let txt = "a, b,c d,e";             // String
console.log(txt.split(","));        // Split on commas
console.log(txt.split(" "));        // Split on spaces
console.log(txt.split("|"));        // Split on pipe


// Examples =>

let str10 = "Hire the top 1% freelance developers";
let str11 = "Hire the top 1 % free lance developer";
let str12 = 'JavaScript, Python, C++, PHP';
let str13 = 'JavaScript,Python,C++,PHP';
let str14 = 'JavaScript, Python | C++, PHP';
let str15 = 'JavaScript | Python | C++ | PHP';

const splitString1 = str10.split(" ");
const splitString2 = str11.split(" ");
const splitString3 = str11.split("");
const splitString3_1 = str11.split("", 7);
const splitString4 = str12.split(",");
const splitString4_1 = str13.split(",");
const splitString5 = str12.split("|");
const splitString5_1 = str14.split("|");
const splitString6 = str14.split(" | ");
const splitString7 = str15.split(" | ");

console.log(`Split String 1 - ${splitString1}
Split String 2 - ${splitString2}
`, splitString1, splitString2, splitString3, splitString3_1, splitString4, splitString4_1, splitString5, splitString5_1, splitString6, splitString7);





/*
9] Date & Time =>
Date Methods(get & set); Time Methods(get & set).
JavaScript Date objects represent a single moment in time in a platform-independent format. Date objects contain a Number that represents milliseconds since 1 January 1970 UTC.
*/


// Creating Date Objects - 4 ways to create a new Date object <=>

// new Date();
// new Date(year, month, day, hours, minutes, seconds, milliseconds) // it takes total 7 arguments.
// new Date(milliseconds)   // we cannot avoid month section 
// new Date(date string);



// new Date - Date objects are created with the new Date() constructor[constructor will be an oops concept, but till that remember when we see 'new' keyword than understand its same object's constructor. 'new' keyword means we are creating new instance/object throught the Dare class]

// console.log(new Date());
let currentDate = new Date();
let propString = new Date().toString();
let properDateTime1 = new Date().toLocaleString(); // proper format
console.log(`Date => 
Current Date - ${currentDate}, Current String Format - ${propString}, Current format - ${properDateTime1}
`)

// toString() - perfect original timing, toLocaleString() - will get proper time & date Or local area timing, Date() - it will give standard timezone with T & Z. 



// Date.now() - Returns the numeric value corresponding to the current time - the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC

console.log(Date.now()); // it returns milliseconds value from Jan 1, 1970 till today.



// new Date(year, month, ...) -- 7 numbers specify year, month, day, hour, minute, second, and millisecond (in that order)
// Note: JavaScript counts months from 0 to 11. i.e (January is 0. December is 11). Week (0 - Sunday, 6 - Saturday);

let jan = new Date(2023, 0);
let apr = new Date(2022, 3);
// console.log(apr.Date());
let dec = new Date(2023, 11);
// let all = new Date(2023, 0, 6, 05, 30, 10, 05)
let all = new Date(2023, 0, 6, 5, 30, 10, 5);
let date1 = new Date();

// till month is necessary.. for getting date. Or 2 arguments is necessary i.e(year, month).
let date2 = new Date(2023);
let date3 = new Date(0);


console.log(` Date with types =>
Jan with toString -> ${jan.toString()}, 
April with toDateString -> ${apr.toDateString()}, 
December with toLocaleString -> ${dec.toLocaleString()},
All - ${all}, ${all.toLocaleString()},
Date1 - ${date1},
Date2 - ${date2},
Date3 - ${date3},
`);



// new Date(dateString) - It creates a new date object from a date string

let d1 = new Date("August 25, 2023 11:13:00");
console.log(d1, d1.toLocaleString());

// new Date(milliseconds) - It creates a new date object as zero time plus milliseconds:


let d2 = new Date(0);
let d3 = new Date(1609574531435);
let d4 = new Date(86400000*2);
console.log(Date.now(), d2.toLocaleString(), d3.toLocaleString(), d4.toLocaleString);



// Dates Method(with date only) -->

const currentDate1 = new Date();

// get individual date -

let ls1 = currentDate1.toLocaleString();
let fy = currentDate1.getFullYear();
let m = currentDate1.getMonth();
let dt = currentDate1.getDate();
let dy = currentDate1.getDay();

console.log(`Get Methods => ${ls1}, ${fy}, ${m}, ${dt}, ${dy}`);


// set individual date(all will give result in milliseconds[ms]) --

let curDate2 = new Date();

console.log(curDate2.setFullYear(2022)); // The setFullYear() method can optionally set month and day
console.log(curDate2.setFullYear(2022, 10, 5));
let setmonth = curDate2.setMonth(10); // 0-11 jan to dec
console.log(setmonth);
console.log(curDate2.setDate(5));
console.log(curDate2.toLocaleString());



// Time Methods -->

// get individual time --

const currentTime = new Date();

// The getTime() method returns the number of milliseconds since January 1, 1970
console.log(currentTime.getTime());
// The getHours() method returns the hours of a date as a number (0-23)
console.log(currentTime.getHours());
console.log(currentTime.getMinutes());
console.log(currentTime.getSeconds());
console.log(currentTime.getMilliseconds());


// set individual times --

const currentTime1 = new Date();

let st = currentTime1.setTime();
let sh = currentTime1.setHours();
let sh1 = currentTime1.setHours(5);
let sm = currentTime1.setMinutes();
let sm1 = currentTime1.setMinutes(5);
let ss = currentTime1.setSeconds();
let ss1 = currentTime1.setSeconds(5);
let sms = currentTime1.setMilliseconds();
let sms1 = currentTime1.setMilliseconds(5);

console.log(`Set time => set Time - ${st}, set Hour - ${sh}, set Minute - ${sm}, set second - ${ss}, set Milliseconds - ${sms}, ${sh1}, ${sm1}, ${ss1}, ${sms1}`);


let curTime2 = new Date();

// console.log(curTime2.setTime());
console.log(curTime2.setHours(5));
console.log(curTime2.setMinutes(5));
console.log(curTime2.setSeconds(5));
console.log(curTime2.setMilliseconds(5));


// console.log(toLocaleString(1692923301032));
let getter = new Date(1692920152269)
console.log(getter, getter.toLocaleString, getter.toLocaleString())



// Local String Methods -
const lts = new Date().toLocaleTimeString(); // 1:14:43 PM 
const lds = new Date().toLocaleDateString(); // 8/25/2023 
const lstr = new Date().toLocaleString(); // 8/25/2023, 1:14:43 PM

console.log(lts, lds, lstr);





/*
10. Math Objects => The JavaScript Math object allows you to perform mathematical tasks on numbers.
Math.round(), Math.pow(), Math.sqrt(), Math.abs(), Math.ceil(), Math.floor(), Math.min(), Math.max(), Math.random(), Math.round(), Math.trunc()
*/


// Property =>
// a) Pi value -
console.log(`Pi property with Math Object - ${Math.PI}`);


// Methods => 
// b) Math.round() - returns the value of x rounded to its nearest integer.  [After point, if no is greater than 5 it will give increment no & if its less than it will give same no].

let round1 = 10.500, round2 = 20, round3 = 30.455555;

// console.log(Math.round(round1, round2, round3));
// console.log(`Math object round method => ${Math.round(round1), Math.round(round2), Math.round(round3)}`);
console.log(`Math object with round method => ${Math.round(round1)}, ${Math.round(round2)}, ${Math.round(round3)}`);


// c) Math.pow() - returns the value of x to the power of y

// console.log(5**3); can be written as <-->
console.log(`Math Object with power method => ${Math.pow(5,3)}`); // 5 * 5 * 5


// d) Math.sqrt() - the square root of x

let sqrt1 = 25, sqrt2 = 66, sqrt3 = 81
console.log(`Math Object with square root method => ${Math.sqrt(sqrt1)}, ${Math.sqrt(sqrt2)}, ${Math.sqrt(sqrt3)}`);


// e) Math.abs() - returns the absolute (positive) value of x

// console.log(Math.abs(-55));
// console.log(Math.abs(-55.5));
// console.log(Math.abs(-955));
// console.log(Math.abs(4-6));

let abs1 = Math.abs(-55), abs2 = (Math.abs(-1055)), abs3 = -77.5, abs4 = 4-6, abs5 = 5;

// console.log(`Math object with absolute method => ${abs1}, ${abs2}, ${abs3.Math.abs()}, ${abs4}, ${abs4.Math.abs()}, ${abs5.Math.abs()}`)

console.log(`Math object with absolute method => ${abs1}, ${abs2}, ${Math.abs(abs3)}, ${abs4}, ${Math.abs(abs4)}, ${Math.abs(abs5)}`)



// f) Math.ceil() - returns the value of x rounded up to its nearest integer

// console.log(Math.ceil(4.51));
// console.log(Math.round(4.51));
// console.log(Math.ceil(99.01));
// console.log(Math.round(99.1));

let ceil1 = Math.ceil(4.51), ceil2 = Math.round(4.51), ceil3 = Math.ceil(99.01), ciel4 = Math.round(99.1), ciel5 = Math.round(99), ciel6 = Math.ceil(99);

console.log(`Math object with ceil method => ${ceil1}, ${ceil2}, ${ceil3}, ${ciel4}, ${ciel5}, ${ciel6}`)


// g) Math.floor() - returns the value of x rounded down to its nearest integer

// console.log(Math.floor(4.7)); 
// console.log(Math.floor(99.1)); 

let floor1 = Math.floor(4.7), floor2 = Math.floor(100.1), floor3 = Math.floor(99.99), floor4 = Math.floor(50);
console.log(`Math Object with floor method => ${floor1}, ${floor2}, ${floor3}, ${floor4}`);


// h) Math.min() - can be used to find the lowest value in a list of arguments

/*
const min0 = 0, 150, 30, 20, -8, -200
const min1 = (0, 150, 30, 20, -8, -200); // return last value
const min1 = [0, 150, 30, 20, -8, -200];  // NaN
let minResult = Math.min(min1);

// console.log(`Math Object with min method => Original nos - ${min1} & Minimum number amongst them is ${minResult}`);
console.log(`Math Object with min method => Minimum number amongst them is -> ${minResult}`);
*/

console.log(Math.min(0, 150, 30, 20, -8, -200));


// i) Math.max() - can be used to find the highest value in a list of arguments

/*
const max1 = (0, 150, 30, 20, -8, -200);  // return last value
let maxResult = Math.max(max1);

console.log(`Math Object with max method => Maximum number amongst them is -> ${maxResult}`);
*/

console.log(Math.max(0, 150, 30, 20, -8, -200));


// j) Math.random() - returns a random number between 0 (inclusive) [it will include], and 1 (exclusive) [it will not include]

// console.log(Math.floor(Math.random()*10));
// console.log(Math.floor(Math.random()*10)); // 0 to 9

let random1 = (Math.random()*5), random2 = (Math.floor(Math.random()*5));
console.log(`Math object with random method => ${random1}, ${random2}`);


// k) Math.trunc() - returns the integer part of a number

// console.log(Math.trunc(4.6));
// console.log(Math.trunc(-99.1));

let trun1 = (Math.trunc(7.6)), trun2 = (Math.trunc(-48.57));
console.log(`Math object with trunc method => ${trun1}, ${trun2}`)

// if the argument is a positive number, Math.trunc() is equivalent to Math.floor(), otherwise Math.trunc() is equivalent to Math.ceil().






/*
*/