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
\n `);





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


let myName1 = "Rajesh"
let myAge1 = 25
let isLegal1 = true;
// console.log(`Name is ${name} & its type is -`, typeof(name)); // Error
// console.log(`Name is ${myName1} & its type is -`, typeof(myName1));
// console.log(`Age is ${myAge1} & its type is -`, typeof(myAge1));
// console.log(`18+ is ${isLegal1} & its type is -`, typeof(isLegal1));

console.log(`2. Datatypes => 
My Name is ${myName1} & its type is ${typeof (myName1)}.
My Age is ${myAge1} & its type is ${typeof (myAge1)}.
I am 18+ is ${isLegal1} & its type is ${typeof (isLegal1)}.
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


console.log(10 + 20);

let x = 5;
let y = 5;

console.log(x == y);
console.log("Is both x & y are equal or not" + x == y); // false [bcoz here its like we are concatenating].

// To deal with this we had template literal operator comes in es 6
console.log(`Is both x & y are equal - ${x == y} \n`);


let a1 = 10     // simple assignment operator [ a1 =10]
let a2 = 5
a2 += 5        // addition assignment operator [a2 = a2 + 5 ]
let a3 = 5
a3 -= 5     // subtraction assignment operator [a3 = a3 -5 ]
let a4 = 5
a4 *= 5     // multiplication assignment operator [a4 = a4 * 5 ]
let a5 = 5
a5 /= 5     // divide[Quotient] assignment operator [a5 = a5 / 5 ]
let a6 = 5
a6 %= 5     // modulus[Remainder] assignment operator [a6 = a6 % 5 ]
let a7 = 5
a7 **= 5     // Exponention[Power/Raise to] assignment operator [a7 = a7 ** 5]
let text = "Hello"
text += "World"

console.log(`Assignment Operators => 
Simple Operator - ${a1}, 
Addition Operator - ${a2}, 
Subtraction Operator - ${a3},
Multiplication Operator - ${a4}, 
Division Operator - ${a5},
Modulus Operator - ${a6},
Exponention Opearator - ${a7},
Normal String/Concate - ${text}
\n `);



let add = 7 + 7;
let sub = 7 - 7;
let mul = 7 * 7;
let div = 7 / 7;
let modulus = 7 % 7;
let exp = 7 ** 2;

console.log(`Arithmetic Opeators =>
Addition is - ${add}, Subtraction is ${sub}, Multiplication is - ${mul}, Division is(Quotient) - ${div}, Modulus is(Remainder) - ${modulus}, Exponention/Power is - ${exp}. \n `);


/* 
Part of Arithmetic operator only =>
Increment(increase) & Decrement(decrease) -
Operator: x++ or ++x; x-- or --x
If we use postfix(x++) - It increments & return the value before incrementing. It means the expression is evaluated first using the original value of the variable & then the variable is incremented(increased).
If we use prefix(++x) - It increments & return the value after incrementing. It means the variable is incremented first & then the expression is evaluated using the new value of the variable. 
*/

let num = 10
// let newNum = 20++;
let newNum = num++;
let newNum1 = num++ + 5; // (num + 5)
let num1 = 7
let newNum2 = ++num1;
let newNum3 = ++num1 + 5;

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

const equalTo = sum1 == sum2    // f
const EqualTo = sum1 == sum3   // t

const notequalTo = sum1 != sum2    // t
const NotEqualTo = sum1 != sum3   // f

const greatherThan = sum1 > sum2    // t
const GreaterThan = sum1 > sum3   // f

const greatherThanAndEqualTo = sum1 >= sum2    // t
const GreaterThanAndEqualTo = sum1 >= sum3   // t

const lessThan = sum1 < sum2    // f
const LessThan = sum1 < sum3   // f

const lessThanAndEqualTo = sum1 <= sum2    // f
const LessThanAndEqualTo = sum1 <= sum3   // t

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
let check1 = la > la1       // t
let logicalAnd = check1 && la1 > 0      // f
let LogicalAnd = la2 > la && la1 > 0      // f
let LogicalAnd1 = la > la2 && la2 > 0      // t
let LogicalOR = la > la2 || la2 > 0      // t
let LogicalOR1 = la < la2 || la2 > 0      // t
let LogicalOR2 = la < la2 || la2 > 10      // f
let LogicalOR3 = (la > la2) || (la2 > 10) || (la = 0)     // t
let LogicalOR4 = (la > la2) || (la > la2) || (la = 0)     // t
let logicalNot = (la > 0) || (la1 > 0)      // t
let logicalNot1 = !((la > 0) || (la1 > 0))      // although it true but it will reverse & make as false.
let logicalNot2 = (true)    // true
let logicalNot3 = !(true)    // false
let logicalNot4 = (false)    // false
let logicalNot5 = !(false)    // true

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



const str = "Hello World!!";
const str1 = "Hello ";
const str2 = "World!!";
const str3 = str1 + str2;
const str4 = str1 + str2 + " Great Learning, " + "Keep it up dude...";
const str5 = "Am I Good in - " + "JS ??"
const fullName = "Dipesh Dattatray Devrukhkar"
const firName = "Dipesh"
const lastName = "Devrukhkar"
const fullName1 = firName + " Dattatray " + lastName

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

6. for in/for of loop

7. conditional(ternary) operator[It is the only operator that takes 3 operands Or Shorthand for if-else]

ShortHand for if else is ternary operator
But when we had nested if else then we used Switch Statements.
*/


// if we go with friends to party so. if i had money = give else friend will give my money. if(expression/condition){}else{}

var contro = 500

if (contro > 500) {
    console.log(`I had money, I will give`)
}
else {
    console.log(`Else - My friend will give`)
}

if (contro <= 500) {
    console.log(`If - I had money, I will give`)
}
else {
    console.log(`My friend will give`)
}


let age1 = 20
if (age1 >= 18) {
    console.log("He/she are eligible to vote")
} else {
    console.log("He/she are not eligible to vote")
}

// variable name = (conditn) ? val1(true) : val2(false)
let age2 = 15
// console.log((age2 > 18) ? "Drive" : "Can't Drive")
let Rajesh = (age2 > 18) ? "Can Drive" : "Can't Drive"
console.log(`Rajesh ${Rajesh}`)


// Without break/continue statement =>
// Q] Find the area of circle, triangle, rectangle - area = circle =>; area = triangle =>; area = rectangle =>.

const PI = 3.14;
let r = 5, l = 10, b = 7, side = 10
let cir = PI * r * r
let tri = l * b / 2     // 1/2 * b * h
let rect = l * b        // w * h... same for parallelogram
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
        break;
    case 'triangle':
        console.log(`Triangle found => Value is - ${tri}`)
        break;
    case 'rectangle':
        console.log(`Rectangle found => Value is - ${rect}`)
        break;
    case 'square':
        console.log(`Square found => Value is - ${squ}`)
        break;
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

/*
let whileLoop = 1;
while(whileLoop < 100){
    // console.log(`Infinite Loop - ${whileLoop}`); // Infinite loop
    whileLoop++;
    console.log(`For ${whileLoop} - ${whileLoop}`)
}
*/


// Block Scope = {} so if condition true than goes to block, if condition false then goes outside the block
let whileLoop1 = 20;
while (whileLoop1 < 10) {
    whileLoop1++;
    console.log(`For whileLoop => ${whileLoop1} - ${whileLoop1}`)
}



// Diffn While Loop - Until we dont get condition true it doesn't show; but in doWhile - whether condition satisfied or not we get output for once.
let doWhileLoop = 0;
debugger
do {
    doWhileLoop++;
    console.log(`For doWhileLoop =>${doWhileLoop} - ${doWhileLoop}`)
}
// while(doWhileLoop > 20)
while (doWhileLoop < 5)



// for(initializer[var num = 1]; condition[num >= 10]; iteration[num++ / num--]){ Code to execute....}

for (let num = 1; num < 5; num++) {
    debugger;
    console.log(`For loop => ${num} is ${num}`)
}

for (let num = 1; num > 5; num++) {
    console.log(`For loop => ${num} is ${num}`)
}





/*
7. Function =>
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

Anonymous Function[A function expression is similar to and has the same syntax as a function declaration. One can define "named" function expressions (where the name of the expression might be used in the call stack for example) or "anonymous" function expressions].
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
    let ok = 20, ok1 = 10
    let ok2 = ok + ok1
    console.log(`Function => ${ok2}`)
}
f1()
console.log(f1());
// console.log(`Function => ${f1()}`);


function f2(x, y) {
    const z = x + y;
    console.log(`Function with parameters & argument - ${z}`);
}
f2();   // No Arguments
f2(5, 5);
f2(50, 50);
f2(20, 30);


function f3(x, y){
    const z = x + y;
    console.log(`Function with parameters & argument & stored in Variables - ${z}`);
}
let func = f3(7,7);
// func;



function f4(x, y){
   return z = x + y;
}
let func1 = f4(7,7);
console.log(`Function with return keyword => ${func1}`);



let f5 = function (x, y){
    return z = x + y;
}
let respo = f5(10, 20)
let respo1 = f5(5, 5)
let respo2 = f5(10, 10)
console.log(`Anonymous function => ${f5(2,4)}`);
console.log(`Anonymous function with problem => ${f5}`);
console.log(`Anonymous function with problem => ${f5()}`);
console.log(`Anonymous function => ${respo}`);
console.log(`Anonymous function => ${respo}`);
console.log(`Anonymous function => ${respo1 > respo2}`);
console.log(`Anonymous function => ${respo1 < respo2}`);

