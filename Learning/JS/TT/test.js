// window.alert("Hi");


// // 1] Keyword - fixed/reserved 

// // var a;  // Declare
// // a = 15; // initialization

// // var b = 20; // Dynamic Initialization

// // Value - Fixed/Literal; var/Variables.

// // console.log(10);
// // console.log('Raj');

// // var c = 10;
// // let d = 20;
// // const e = 15;

// // let firstName = "John";
// // let fN = "Mandaar"

// // let fn = "" , sN = 5, tn = true;

// // fN - camelCase; FN - PascalCase;

// /* Rules -
// 1. Varaible names doesnt have limit.
// 2. Combination of alphabets, numbers, $, _ .
// 3. Starting letter for variable alphabet, $, _. Can't used number in start.
// 4. Case - Sensitive
// */

// // let ssfsfsbfsfjfiof = "";
// // let adadad23323$_ = '';
// // adadad23323$_sFFDFD%%%

// // let $Rakj; let _SDFSF; let ADsdsd; 
// // let 23dsdsd

// // let Raj = ''; let raj = '';


// /* 
// 2] Datatype - which type of data is storing in variables.
// Primitvie/ Non-Primitive.

// Primitive [String, No, Boolean, Null, Undefined];
// Non-Primitve[array, object, function]
// */

// // let str2 = "Raj";
// // str2 = "RJ"
// // console.log(str2);

// // let arr1 = ["Raj","Mandar"];
// // console.log(arr1.push("Tarun"));
// // console.log(arr1);


// let str1 = "", str5 = '';  // string
// let num1 = 5;               // number
// let bool1 = true  // 1      // boolean
// let bool2 = false // 0
// let val1 = null;            // object
// let undefined;              // undefined

// let arr1 = [];              // object
// let obj1 = {};              // object
// var fun = function f1() { }            // function

// // console.log(`Normal Values => ${str1}, ${str5}, ${num1}, ${bool1}, ${bool2}, ${val1}, ${undefined}, ${arr1}, ${obj1}, ${fun}`);
// // console.log(`typeof => ${typeof(str1)}, ${typeof(str5)}, ${typeof(num1)}, ${typeof(bool1)}, ${typeof(bool2)}, ${typeof(val1)}, ${typeof(undefined)}, ${typeof(arr1)}, ${typeof(obj1)}, ${typeof(fun)}`);


// /* 3] Diff between var, let, const */

// var name; 	// declare

// name = "Tarun"   // initialization

// var name = "Mandar"  // Dynamic Initialization.


// // redeclare & reassign

// var name; 	// declare
// var name;		// redeclare;

// var name = "";
// name = "Tarun"  // assign
// name = "Mandar"  // reassign 

// /* In js[declare, initialize] */

// var assign1;
// assign1 = "Raj"

// let assign2;
// assign2 = "Mandar"

// const assign3 = "Tarun"


// /* Hoisting[initialize, declare & works only with var keyword] */
// assign = "Hoist";
// var assign;

// // assign6 = ""; 
// // let assign6;  // E

// // assig7 = ""; 
// // const assign7;  // E

// // console.log(assign1, assign2, assign3, assign);


// /*
// 4] JS - global[var,let,const] , function[var, let, const] func fna (){} , block[let, const] {}
// */

// /*
// let gsoa = "Global Scope 1"
// // console.log(`GS outside anything - ${gsoa}`)

// if(true){
//     const bs1 = "Block scope 1"
//     // console.log(`Block scope inside if- ${bs1}`)
//     // console.log(`GS inside Block Scope - ${gsoa}`)
// }

// function f1(){
//     // console.log(`GS inside function scope- ${gsoa}`)
//     var bs2 = "function scope 1"
//     // console.log(`function scope inside if- ${bs2}`)
// } 
// f1();

// // console.log(`function scope inside if- ${bs2}`)

// // console.log(`Block scope inside if- ${bs1}`)
// */

// // parent - global scope
// var money = 100;
// // console.log(money);

// // child1 - function scope of gs
// function f2() {
//     let city = "Mumbai"
//     // console.log(city);
//     // console.log(money);
// }
// f2();

// // child2 - block scope of gs
// if (true) {
//     const state = "Maharashtra"
//     // console.log(state);
//     // console.log(money);
// }


// // console.log(city);
// // console.log(state);




// /*
// Diff between var, let & const with scopes
// 3 - GS(Global Scope - var, let & const, [FS , BS]); 
// FS(Function Scope - var);    func f1(){}
// BS(Block Scope - let & const);    {}
// */


// // global scope =>
// var GS1 = "Global Scope with var keyword";
// let GS2 = "Global Scope with let keyword";
// const GS3 = "Global Scope with const keyword";

// // console.log(`Global Scope - ${GS1}, ${GS2}, ${GS3} \n`);

// // funcion scope =>
// function f1() {
//     const FS1 = "Funcion Scope with var keyword, ";
//     // console.log(`Global Scope inside function - ${GS1}, ${GS2}, ${GS3} \n`);
//     // console.log(`Inside Function - ${FS1} \n`);

//     if (true) {
//         let FS_BS1 = "Block Scope is inside function scope with var keyword";
//         console.log(`Function within block - ${FS1} \n`);
//         console.log(`Block within function - ${FS_BS1} \n`);
//     }

//     function f2() {
//         const FS2 = "Another Funcion Scope with var keyword"
//         console.log(FS1 + FS2);
//     }
//     f2();

//     // console.log(FS2);
//     // console.log(`Block outside function - ${FS_BS1} \n`);
// }
// f1();

// // console.log(`Inside Function - ${FS1} \n`);


// // block scope =>
// if (true) {
//     var BS1 = "Block Scope with var keyword";
//     // console.log(`Block Scope inside function - ${GS1}, ${GS2}, ${GS3} \n`);
//     // console.log(`Inside Block - ${BS1} \n`);
// }

// // console.log(`Outside Block - ${BS1} \n`);


// // if (false) {
// //     console.log(`Block Scope inside function - ${GS1}, ${GS2}, ${GS3} \n`);
// // }
// // else {
// //     console.log(`Block Scope inside function - ${GS1}, ${GS2}, ${GS3} \n`);
// // }


// // 5] Operators =>

// let x1 = 10, x2 = 5;
// let x3 = x1 + x2;     // x3 = x1 + x2 (Expression => We had one operator, we had more than 1 operands)

// // Assignment Operator, Arithmetic Operators, Comparison Operators, Logical Operators, String Operators, type Operator, bitwise Operator  (Not imp...), ternary operator...



// // Bitwise Operator => &(AND); |(OR); ~(NOT); ^(XOR); <<(Left Shift); >>(Right Shift); >>>(Unsigned Right Shift).

// // Type Operator => typeof(Returns the type of a variable); instanceof(Returns true if an object is an instance of an object type)

// // Arithmetic Operator => (Maths terms <==> + , - , * , /, %, ++, --, **[Es 2016]).

// let z1 = 10, z2 = 7;
// let z3 = 5, z4 = 2;
// let z5 = 0;
// let z6 = 3

// if (true) {
//     debugger;
//     let add = z1 + z2;      // 17
//     let sub = z1 - z2;      // 10
//     let mul = z1 * z2;      // 70
//     let div = z1 / z2;      // 1.42
//     let mod = z1 % z2;      // 3
//     let expo = z3 ** z4;    // 25
//     let inc = z5++;        // 1
//     let dec = z6--;        // 2
//     let str = "Welcome to JS "
//     str += 2023
//     console.log(add, sub, mul, div, mod, inc, dec, expo, str);
// }
// else {
//     "Not found"
// }


// /* 
// Part of Arithmetic operator only =>
// Increment(increase) & Decrement(decrease) -
// Operator: x++ or ++x; x-- or --x
// If we use postfix(x++) - It increments & return the value before incrementing. It means the expression is evaluated first using the original value of the variable & then the variable is incremented(increased).   // return value & increase.
// If we use prefix(++x) - It increments & return the value after incrementing. It means the variable is incremented first & then the expression is evaluated using the new value of the variable. // increase & return value
// */

// if (true || false) {
//     debugger;
//     let inc1 = 10, inc2 = 7;
//     let postIncrement = inc1++ // 10
//     let preIncrement = ++inc1 // 12
//     let postDecrement = inc2--  // 7
//     let preDecrement = --inc2  // 5

//     let postIncrementBy10 = inc1++ + 10           // 12 + 10 = 22

//     console.log(`Postfix => ${postIncrement} & ${postDecrement} & ${postIncrementBy10}
// Prefix => ${preIncrement} & ${preDecrement}
// `);
// }
// else {
//     console.log("Not found")
// }


// if (true) {
//     debugger;
//     let inc5 = 11, dec5 = 5;

//     let postInc5 = inc5++       // 10,      
//     // inc5 = 11
//     let preInc5 = ++inc5        // 12

//     console.log(`
//     Normal => ${inc5}, ${dec5},
//     Post => ${postInc5}, ${inc5},
//     Pre => ${preInc5}, ${dec5}
// `)
// }

// /*
// Assignment Operator => 
// = (Assignment).
// =, +=, -=, *=, **=, %=, /=, [Assign with Arithmetic Operator]
// &&=, ||=, ??=, [Assign with Logicial Operator]
// &=, ^=, |=  [Assign with Bitwise Operator]; <<=, >>=, >>>= [Assign with Shift operator];
// We don't have any comparison operator  with assignment operator.
// */

// debugger;
// var assign = 5;
// var addAssign = assign += 10   // assign += 10 <=> assign = assign + 15 = 25
// var subAssign = assign -= 3
// var mulAssign = assign *= 3
// var divAssign = assign /= 3
// var modAssign = assign %= 3
// var expoAssign = assign **= 3

// var logAndAssign = assign &&= 3 // assign &&= 10 <=> assign && 10
// var logOrAssign = assign ||= 3
// var logNotAssign = assign ??= 3

// var bitAndAssign = assign &= 3
// var bitOrAssign = assign ^= 3
// var bitNotAssign = assign |= 3

// console.log(assign, addAssign, subAssign, mulAssign, divAssign, modAssign, expoAssign, logAndAssign, logOrAssign, logNotAssign, bitAndAssign, bitOrAssign, bitNotAssign);

// /*
// And <==> All condition true <==> true, if any conditn false it will return false 
// Or <==> Any 1 condition true <=> true, if all false <=> false
// Not <==> true => false, or vice-versa
// */


// // let age = 18;

// // if(age > 18 || age < 15){
// //     console.log("Eligible for driving/Vote")
// // }
// // else{
// //     console.log("Not Eligible for driving/Vote")
// // }

// /*
// let x = 10, a = x++  ==> x = 11, a = 10
// let x = 10, a = ++x ==> x = 11, a = 11
// */

// let x4 = 7, a1 = x4++;
// let x5 = 1, a2 = ++x5;

// console.log(`
// Normal => ${x4}, ${x5}
// After post => ${x4} <==> ${a1}
// After pre => ${x5} <==> ${a2}
// `)


// debugger;
// if (true) {
//     let count = 5;
//     // let result1 = count++;   // count = 6, result1 = 5
//     // let result1 = ++count;      // count = 6, result1 = 6
//     // let result1 = count--;   // result1 = 5
//     let result1 = --count;   // result1 = 4
//     console.log(result1);
// }


// // Comparison Operator => <, >, <=, >=, !=, ==, ===, !==, ?

// let comp1 = 10, comp2 = 5, comp3 = 10, comp4 = "5", comp5 = "Yo";

// let lessThan = comp1 < comp2;   // f  [Exp => Operator + Operand; Whole line => Statement].
// let lessThanAndEqualTo = comp1 <= comp2;   // f
// let moreThan = comp1 > comp2;   // t
// let moreThanAndEqualTo = comp1 >= comp2;   // t


// let EqualToValue = (comp1 == comp2);   // f
// let EqualToValueAndDat = comp1 === comp2;   // f


// let notEqualToValue = comp1 != comp2;   // t
// let NotEqualToValueAndDat = comp1 !== comp2;   // f

// console.log(`
// Value - ${comp1}, ${comp2}, ${comp3}, ${comp4}, ${comp5}
// Less Than - ${lessThan}
// Less Than And Equal To - ${lessThanAndEqualTo}
// More Than - ${moreThan}
// More Than And Equal To - ${moreThanAndEqualTo}
// Equal to value - ${EqualToValue}
// Equal to value & Datatype - ${EqualToValueAndDat}
// Not Equal to value - ${notEqualToValue},
// Not Equal to value & Datatype- ${EqualToValueAndDat},
// `)


// // ternary operator(?) => Shorthand for if else. (conditn) ? true : false


// // if(cond)( true block/statements...) else{ false block/statements ...}
// let age = 18;

// if (age > 18 || age < 15) {
//     console.log("Eligible for driving/Vote")  // true
// }
// else {
//     console.log("Not Eligible for driving/Vote")   // false
// }


// let age1 = 20;
// let ternResult = (age1 < 18) ? "Eligible for driving/Vote" : "Not Eligible for driving/Vote"
// console.log(ternResult);

// // Nullish Coalescing (??)
// // let name5 = 'name';
// // let text5 = null;
// // let result = name5 ?? text5;
// // console.log(`Nullish Coalescing - ${result}`);


// // Logical Operators => &&(logical and); ||(logical or); !(logical not);
// // let log1 = 10; log2 = -10; log3 = "Raj";

// // let resLogAnd1 = (log1 > log2) && (log1 <= log2) // f
// // let resLogAnd2 = (log1 < log2) && (log1 > log2)  // f
// // let resLogAnd3 = (log1 < log2) && (log1 <= log2)  // f
// // let resLogAnd4 = (log1 < log2) && (log1 < log2)  // f
// // let resLogAnd5 = (log1 > log2) && (log1 > log2)  // t
// // let resLogAnd6 = (log1 > log2) && (log1 > log2) && (log2 == log1) // f

// // console.log(resLogAnd1, resLogAnd2, resLogAnd3, resLogAnd4, resLogAnd5, resLogAnd6);


// let log1 = 10; log2 = -10; log3 = "Raj";

// // let log5 = 10; log6 = -10; log7 = "Raj";

// let resLogOr1 = (log1 > log2) || (log1 <= log2)
// let resLogOr2 = (log1 < log2) || (log1 > log2)
// let resLogOr3 = (log1 < log3) || (log3 <= log2)
// let resLogOr4 = (log3 < log2) || (log1 < log3)
// let resLogOr5 = (log1 > log2) || (log1 > log2)
// let resLogOr6 = (log1 > log2) || (log1 > log2) || (log2 == log3) || (log2 === log7)

// console.log(resLogOr1, resLogOr2, resLogOr3, resLogOr4, resLogOr5, resLogOr6);


// let log8 = 15; log9 = 7;

// let resLogNot1 = !((log8 > log9) || (log8 <= log9))
// let resLogNot2 = !((log8 > log9) && (log8 <= log9))

// let resLogNot3 = true;
// let resLogNot4 = false;

// let resLogNot5 = !(true);
// let resLogNot6 = !(false);

// console.log(resLogNot1, resLogNot2, resLogNot3, resLogNot4, resLogNot5, resLogNot6)


// // And(If all are true then its true, if one condition is false then its false); Or(If any 1 condition true than true, if all are false then its false); Not(vice-versa).



// // String Operators
// const strConcat1 = "" + ""
// const strConcat2 = "Hello" + "World"
// const strConcat3 = "Hello " + "World"
// const strConcat4 = "Hello" + " World"
// const strConcat5 = 5 + "10"
// const strConcat6 = "5" + "10"
// const strConcat7 = 5 + "Cool"
// const strConcat8 = "" + "Cool"
// const strConcat9 = "Hi" + ""
// const strConcat10 = 10 + 100


// console.log(strConcat1, strConcat2, strConcat3, strConcat4, strConcat5, strConcat6, strConcat7, strConcat8, strConcat9, strConcat10);


// /*
// 1. Variables can have any length (only sn).
// 2. We can had alphachar(uppercase alphabet & lowercase alphabet), numbers, $, _ [Mixture]
// 3. 1st letter of varaible name should not be a number.
// 4. We can start with $, _ in start but use only characters[better naming convention].
// 5. Case - sensitive.
// 6. No other symbol can used leaving $ or _
// 7. Reserved Keyword cant be used as variable name.
// */


// // Condition - Checking values in true/false.. Loops - Working on repeatness of code,
// // Condition - if, if else, if else if, nested if else.
// // Conidition - break; loops - break & continue

// let schoolResult = 50;
// let gender = true;

// // if(schoolResult >= 35 ){
// //     console.log('Congrats you are passed')   // true
// // } else {
// //     console.log('Sorry you had failed, better luck next time...')   // false
// // }


// if (schoolResult > 35) {
//     console.log('Congrats you are passed')
// }
// else if (schoolResult == 35) {
//     console.log('Congrats you are passed with first class..')
// }
// else {
//     console.log('Sorry you had failed, better luck next time...')
// }


// // Nested statement ...

// // let ranks = 10;

// // if (ranks == 0) {
// //     console.log('Football is best')
// // }
// // else if (ranks == 1) {
// //     console.log('Cricket is best')
// // }
// // else if (ranks == 2) {
// //     console.log('Badminton is best')
// // }
// // else if (ranks == 3) {
// //     console.log('Hockey is best')
// // }
// // else if (ranks == 4) {
// //     console.log('Chess is best')
// // }
// // else if (ranks == 5) {
// //     console.log('Carrom is best')
// // }
// // else {
// //     console.log('Other games are best but not in top 5 like - Ludo, Kabaddi, Golf....')
// // }



// // switch statement -

// let ranks1 = 0;

// switch (ranks1) {
//     case 0:
//         console.log(`Rank1 => Football is best`);
//         break;
//     case 1:
//         console.log(`Rank1 => Cricket is best`);
//         break;
//     case 2:
//         console.log(`Rank1 => Badminton is best`);
//         break;
//     case 3:
//         console.log(`Rank1 => Hockey is best`);
//         break;
//     case 4:
//         console.log(`Rank1 => Chess is best`);
//         break;
//     case 5:
//         console.log(`Rank1 => Carrom is best`);
//         break;
//     default:
//         console.log(`Rank1 => Other games are best but not in top 5 like - Ludo, Kabaddi, Golf....`)
// }


// let ranks2 = 4;

// switch (ranks2) {
//     case 0:
//         ranks2 == 0
//         console.log(`Rank2 => Football is best`);
//         break;
//     case 1:
//         ranks2 == 1
//         console.log(`Rank2 => Cricket is best`);
//         break;
//     case 2:
//         ranks2 == 2
//         console.log(`Rank2 => Badminton is best`);
//         break;
//     case 3:
//         ranks2 == 3
//         console.log(`Rank2 => Hockey is best`);
//         break;
//     case 4:
//         ranks2 == 4
//         console.log(`Rank2 => Chess is best`);
//         break;
//     case 5:
//         ranks2 == 5
//         console.log(`Rank2 => Carrom is best`);
//         break;
//     default:
//         console.log(`Rank2 => Other games are best but not in top 5 like - Ludo, Kabaddi, Golf....`)
// };

// let sportsName = "cricket"

// switch (sportsName) {
//     case "football":
//         sportsName = "Messi, Ronaldo, Neymar";
//         console.log(sportsName);
//         break;

//     default:
//         console.log("Please search other sports...");
//         break;

//     case "cricket":
//         sportsName = "Dhoni, Rohit, Virat";
//         console.log(sportsName);
// }


// // while, dowhile, for...

// // print 0 - 5 is is posibble using condition ?

// // while - check for condition till true, if we get false it will exit the loop...

// let no = 0;
// /* console.log(no); */

// // while (no < 5) {
// //     no++;
// //     console.log(no);
// // }

// // while (no > 5) {
// //     no++;
// //     console.log(no);
// // }

// // do{
// //     no++;
// //     console.log(no);
// // }while(no < 5)

// // do{
// //     no++;
// //     console.log(no);
// // }while(no > 5);

// // for loop [while, do while];  ==> (initialize, conditn, inc/dec);
// debugger;
// for (let no1 = 0; no1 < 5; no1++) {
//     // console.log(no1);
// }


// // for in, for of [Array] ==> ES6;

// const array1 = ['Raj', 'Mandar', 'Tarun', 'Vedant']; // 4

// let i = 0
// for ( ; i < array1.length; i++) {
//     console.log([i], array1[i]);
// }

// for ( let result in array1 ){
//     console.log(result)
// }

// for ( let result of array1 ){
//     console.log(result)
// }


// Strings - [Properties - value (sq.length); Methods - action(sq.indexOf());]



let sq = "Lorem ? Ipsum is simply dummy text of the printing and typesetting industry"
// console.log(sq);
// console.log(sq.length);

let escape = "Hello, \" Age \" s \nGood \n \t Bro \v budd"
let escape1 = 'Hello,  "Ages" Good Bro  budd'
// console.log(escape, escape1);

let x = new String("Hello")  // dont use bcoz new keyword complicates the code & sometime give wrong o/p.
// console.log(typeof(x));



// Methods -

// 1] Finding(We can't find by regex) --> indexof("searchvalue", "fromwhere[optional]")  <--> get(return indexno.) [FD], notget(-1); lastIndexof("searchvalue", "fromwhere[optional]") <--> get(return) [BD], notget(-1)   ==>
// Difference in Search & indexof() -
// The search() method cannot take a second start position argument.
// The indexOf() method cannot take powerful search values (regular expressions).


let myBioData = 'Hello Guy, Guyz I am Web Developer';
let io = myBioData.indexOf("I" , 8);   // 11
let io1 = myBioData.indexOf("I" , 12);  // -1
let io2 = myBioData.indexOf("Guyz" , 2);  // 6
let io3 = myBioData.indexOf("Gu");  // 
// let io1 = myBioData.indexOf("i" , 11);  // -1  // its case-sensitive.
// console.log(io, io1, io2, io3);


let myBioData1 = 'Hello Guyz I am Web Developer. I am good in programming';
let lio = myBioData1.lastIndexOf("I" , 3);  // -1
let lio1 = myBioData1.lastIndexOf("I");  // 11
let lio2 = myBioData1.lastIndexOf("I" , 14);  // 11
let lio3 = myBioData1.lastIndexOf("I");  // 31
let lio4 = myBioData1.lastIndexOf("I", 30); 
// let s8 = myBioData2.search(/developer/i);
// console.log(lio, lio1, lio2, lio3, lio4, s8);


// 2] Search("searchvalue") <--> get(return) [FD], notget(-1)  ==>
const myBioData2 = 'Hello Guyz I am Web Developer/JS Developer';
let s1 = myBioData2.search("Developer");
let s2 = myBioData2.search("developer");
let s3 = myBioData2.search("devel");
let s4 = myBioData2.search("Devel");
let s5 = myBioData2.search("oper");
let s6 = myBioData2.search("oper", 3);
// let s7 = myBioData2.search(/developer/i);
// console.log(s1, s2, s3, s4, s5, s6, s7);




// 3] Extracting - [slice(start, end); substring(start, end); substr(start, length)]    ==>


const strSlice = 'Apple, Banana, Mango';

let slice1 = strSlice.slice(1,6);
let slice2 = strSlice.slice(6,14);
let slice3 = strSlice.slice(6);
let slice4 = strSlice.slice(-3);
let slice5 = strSlice.slice(-3, -10);
let slice6 = strSlice.slice(-5, -3);
let slice7 = strSlice.slice(14, 10);
let slice8 = strSlice.slice(14, -3);


// console.log(`slice1 -> ${slice1} 
// slice2 -> ${slice2}
// slice3 -> ${slice3}
// slice4 -> ${slice4}
// slice5 -> ${slice5}
// slice6 -> ${slice6}
// slice7 -> ${slice7}
// slice8 -> ${slice8}
// original string -> ${strSlice}
// `);


const substring = 'Apple, Banana, Mango';

let substring1 = substring.substring(1,6);
let substring2 = substring.substring(6,13);
let substring3 = substring.substring(6);
let substring4 = substring.substring(-3);
let substring5 = substring.substring(-3, -10);
let substring6 = substring.substring(-5, -3);
let substring7 = substring.substring(14, 10);
let substring8 = substring.substring(14, -3);


// console.log(`substring1 -> ${substring1} 
// substring2 -> ${substring2}
// substring3 -> ${substring3}
// substring4 -> ${substring4}
// substring5 -> ${substring5}
// substring6 -> ${substring6}
// substring7 -> ${substring7}
// substring8 -> ${substring8}
// original string -> ${substring}
// `);

const substr1 = 'Apple, Banana, Mango';   // immutabilty - primitive datatype.
let substrSlice1 = substr1.substr(0, 4);
let substrSlice2 = substr1.substr(7, -2);
let substrSlice3 = substr1.substr(-4);
let substrSlice4 = substr1.substr(-4, 7);
let substrSlice5 = substr1.substr(-4, -10);

// console.log(`substr1 -> ${substrSlice1} 
// substr2 -> ${substrSlice2}
// substr3 -> ${substrSlice3}
// substr4 -> ${substrSlice4}
// substr5 -> ${substrSlice5}
// original string -> ${substr1}
// `)


// Replacing String Content <--> [replace("forwhichchanges, "updatedvalue"), replaceAll("forwhichchanges, "updatedvalue")]

const myBioDataOrg = 'I am dipesh Dev, Learning JS for now... - dipesh, dipesh';

let replace1 = myBioDataOrg.replace("dipesh", "tarun");
let replace2 = myBioDataOrg.replace(/dipesh/g, "tarun");
let replace3 = myBioDataOrg.replace("Dipesh", "tarun");
let replace4 = myBioDataOrg.replace(/DipESH/i, "tarun");
// let replace5 = myBioDataOrg.replace(/DipESH/i/g, "tarun");

console.log(`before - ${myBioDataOrg}
replace1 -> ${replace1} 
replace2 -> ${replace2} 
replace3 -> ${replace3} 
replace4 -> ${replace4}
after - ${myBioDataOrg} 
`)

let replaceAll1 = myBioDataOrg.replaceAll("dipesh", "Vedant");
let replaceAll2 = myBioDataOrg.replaceAll("vedant", "Vedant");
// console.log(`Replace All - ${replaceAll1}, ${replaceAll2}`)


const myBioDataOrg1 = 'Table of 8 * 8 = 82';

let res1 = myBioDataOrg1.replace('8', '10');
let res2 = myBioDataOrg1.replace(/8/g, '10');
// console.log(res1, res2);




// Imp - string.property; array.property; object.property.[property - value]... string.method(); array.method(); object.method() [method is an action/function].
// Search - indexOf[FD, return index when true or -1, it can use -ve also], lastIndexOf[BD, return index when true or -1], search[same as indexOf but we can use regex].
// Extract - slice(start, end); substring(start, end); substr(start, length);
// Replace - replace(oldvalue, "updated value")[we can use /i, /g]; replaceAll.



// Extracting String Characters of single data <--> [charAt(position); charCodeAt(position), property access [ ] ].


// The charAt() method returns the character at a specified index (position) in a string
let text = "HELLO WORLD";
let char = text.charAt(0);
let char1 = text.charAt(6);

console.log(char, char1);


// The charCodeAt() method returns the unicode of the character at a specified index in a string. The method returns a UTF-16 code (an integer between 0 and 65535)

let text2 = "HELLO WORLD";
let char2 = text2.charCodeAt(0);

console.log(char2);  // 72


// property access - ECMAScript 5 (2009) allows property access [ ] on strings.
/*
Property access might be a little unpredictable:

It makes strings look like arrays (but they are not)
If no character is found, [ ] returns undefined, while charAt() returns an empty string.
It is read only. str[0] = "A" gives no error (but does not work!)
*/

let text3 = "HELLO WORLD";
let pa = text3[4];

console.log(pa);  // O



// Other useful methods <--> [toUpperCase(); toLowerCase(); concat(); trim(); pad(); split(); toLocaleLowerCase(), toLocaleUpperCase()]; 


let uc = "abcDefGHI";
console.log(uc.toUpperCase(), uc.toLowerCase());

// uc.toLocaleLowerCase, uc.toLocaleUpperCase will return a function


let t1 = "Hello";
let t2 = "World";
let t4 = 5;
let t5 = true;
let t3 = t1.concat(" ", t2);
let t6 = t1.concat(" ", t5);
let t7= t2.concat(" ", t4);
console.log(t3, t6, t7);


// trim() - Used to remove extra whitespace from both sides, trimStart() - used to remove extra from starting of string, trimEnd() - used to remove extra from ending of string.


let trim1 = "Hello World";
let trim2 = "      Hello         World       ";

console.log(trim2.trimStart());
console.log(trim2.trimEnd());
console.log(trim2.trim());


//  padStart() - give spaces from start, padEnd() - give spaces from end.

let pad1 = "Hello World";
let pad2 = "Hello";


console.log(pad1.padStart());
console.log(pad1.padStart(5));
console.log(pad1.padStart(20));
console.log(pad1.padEnd());
console.log(pad1.padEnd(9));
console.log(pad1.padEnd(20));

console.log(pad2.padStart(5));
console.log(pad2.padStart(7));
console.log(pad2.padEnd(9));


// split - convert in string [comma(,); spaces(""); pipe(|)]  [pipe(|) converts into comma(,) & vice versa]
let split1 = "a, b,c d,e";
let split2 = "a, | b, c | d,e";   
let str15 = 'JavaScript | Python | C++ | PHP';

console.log(split1, split2);
console.log(split1.split());
console.log(split1.split(","));
console.log(split1.split(" "));
console.log(split1.split("|"));
console.log(split2.split("|"));
console.log(str15.split(" | "));


// g - global search, i - case insensitive
// Search Methods/Match Methods - match('value'), matchAll(), include("value", start position[optional]), startsWith(), endsWith()
// includes, startsWith(), endsWith() we can't use regex.

let m1 = "The rain in SPAIN stays mainly in the plain";
let m2 = "I love cats. Cats are very easy to love. Cats are very popular."

console.log(m1.match("ain"));
console.log(m1.match("ain", 20)); // We can't use 2nd arguments
console.log(m1.match("dre")); // doesnt found returns null
console.log(m1.match(/Ain/i));
console.log(m1.match(/ain/i));
console.log(m1.match(/ain/gi)); // console.log(m1.match(/ain/ig));

console.log(m2.matchAll("ain"));
console.log(m2.matchAll("Cats"));


let inc = "Hello world, welcome to the universe.";
console.log(inc.includes("world"));
console.log(inc.includes("world", 4));
console.log(inc.includes("world", 10));
console.log(inc.includes("World"));
// console.log(inc.includes(/World/i)); We can't use regex


let st1 = "Hello world, welcome to the universe.";
console.log(st1.startsWith("Hello"));  // true
console.log(st1.startsWith("Hello", 10));  // false
console.log(st1.startsWith("Hello", 2));  // false
console.log(st1.startsWith("world", 2));  // false
console.log(st1.startsWith("world", 6));  // true
console.log(st1.startsWith("world"));  // false



let e1 = "John Doe";
console.log(e1.endsWith("Doe"));
console.log(e1.endsWith("Doe", 4));
console.log(e1.endsWith("Doe", 5));
console.log(e1.endsWith("Doe", 6));
console.log(e1.endsWith("Doe", 8));
console.log(e1.endsWith("John"));



// if we want to convert array, no, boolean in string we had - toString() & when we convert object in string we will get [object Object].
let no = 5;
let boolean = true;
let arr = ["Raj", 7, false, "Ok", {key: "value"}, function f1(){}]
let obj = {
    name: "Raj",
    age: 24,
    isEligible: true
  }

console.log(no.toString(), boolean.toString(), arr.toString(), obj.toString())  // boolean.tostring()





// String Methods - 25.  Array Methods[CRUD...] - .

// Creation of arr -
const arr1 = [];
console.log(arr1);
arr1[1] = 'Hello';
arr1[2] = 'World'
console.log(arr1);


// Access of arr -
const arr2 = ["Raj", "Mandar", "Tarun", "vedant"];

console.log(arr2.length-1);
console.log(arr2);
console.log(arr2[1]);
console.log(arr2[10]);
console.log(arr2[3]);


const arr3 = ["Raj", "Mandar", "Tarun", "vedant", "Raj", "Mandar", "Tarun", "vedant", "Raj", "Mandar", "Tarun", "vedant", "Raj", "Mandar", "Tarun", "vedant"];

console.log(arr3.length);
console.log(arr3[15]);
console.log(arr3.length-1);
console.log(arr3[arr3.length-1]);


// Changes/updates -
const arr4 = ["Raj", 'Rohit', "Mandar", "Tarun", "vedant"];
console.log(arr4);

let arr5 = arr4[1]= 'Virat'
console.log(arr5);
// console.log(arr4[1]= 'Virat');

console.log(arr4);



/*
Traversal of Array <--> [length, for loop, for in, for of, forEach()]
Search & Filter in an Array <--> [Search -> indexOf(), lastIndexOf(), includes(); Filter -> find(), findIndex(), filter()]
Sort & Compare an Array <--> [sort(), reverse()]
Insert, Read, Replace/update, Delete elements in array[CRUD Operation] <--> [push(), pop(), shift(), unshift(), splice()]
Map(), Reduce(), Filter()
Other methods - 
*/




// 1] Access for loops...
const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits);

// let fLen = fruits.length;

let text1 = "Fruits with =>";

debugger;
for (let i = 0; i < fruits.length; i++) {
  text1 += fruits[i];
//   console.log(text1);
}


// ES 6 -
for (let result in fruits){
  console.log(result);
}

for (let result of fruits){
  console.log(result);
}


const fruitsWithUndefined = ["Banana", "Orange", "Apple"];
fruitsWithUndefined[6] = "Lemon";  // Creates undefined "holes" in fruits
console.log(fruitsWithUndefined);


// Associative Arrays - Arrays with named indexes are called associative arrays (or hashes). JavaScript does not support arrays with named indexes. In JavaScript, arrays always use numbered indexes.  

// const person = [];
// person[0] = "John";
// person[1] = "Doe";
// person[2] = 46;
// person.length;    // Will return 3
// person[0];        // Will return "John"


// const person = [];
// person["firstName"] = "John";
// person["lastName"] = "Doe";
// person["age"] = 46;
// person.length;     // Will return 0
// person[0];         // Will return undefined



// array, object, null = object Datatype.

const fruitsType = ["Banana", "Orange", "Apple"];
const fruitsType1 = { fruit1: "Banana", fruit2: "Orange", fruit3: "Apple"};
console.log(typeof fruitsType, typeof(null));
console.log(Array.isArray(fruitsType), Array.isArray(fruitsType1))






// 2.1] Search methods - indexof(), lastIndexOf(), includes()
let myFriends1 = ['Dipesh', 'Tarun', 'Mandar', 'Vedant', 'Krishna', 'Priya', 'Koyal', 'Mansi', 'Priya', 'Bhakti', 'Khusbu', 'Mansi', 'Priya'];

console.log(`a. IndexOf => ${myFriends1.indexOf(Khusbu)}`) // - Error
console.log(myFriends1.indexOf('Mandar')); 
console.log(`a. IndexOf => ${myFriends1.indexOf('Priya', 4)}`) 
console.log(`a. IndexOf => ${myFriends1.indexOf('Priya', 6)}`) 
console.log(`a. IndexOf => ${myFriends1.indexOf('Priya', 9)}`) 
console.log(`a. IndexOf => ${myFriends1.indexOf('priya', 4)}`) 



console.log(myFriends1.lastIndexOf('Priya'))
console.log(`a. lastIndexOf => ${myFriends1.lastIndexOf('Priya', 4)}`)
console.log(`a. lastIndexOf => ${myFriends1.lastIndexOf('Priya', 6)}`)
console.log(`a. lastIndexOf => ${myFriends1.lastIndexOf('Priya', 9)}`) 
console.log(`a. lastIndexOf => ${myFriends1.lastIndexOf('priya', 4)}`) 


console.log(myFriends1.includes('Priya')) 
console.log(`a. includes => ${myFriends1.includes('priya', 4)}`) 
console.log(`a. includes => ${myFriends1.includes('Priya', 5)}`)
console.log(`a. includes => ${myFriends1.includes('Priya', 9)}`)
console.log(`a. includes => ${myFriends1.includes('Priya', 9)}`)




// 2.2] Filter Methods - find(), findIndex(), filter()

/*
const prices = [0, 50, 100, 150, 200, 250, 300, 350, 400, 500, 600, 700, 1000]

// Contitn 1 - prices > 500
const findMethod1 = prices.find((currVal, index, arr) => {
    return currVal > 500
});


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


// Contitn 5 - prices > 1000
const findMethod5 = prices.find((currVal, index, arr) => {
    return currVal > 1000
})


console.log(findMethod5);


const prices = [0, 50, 100, 150, 200, 250, 300, 350, 400, 500, 600, 700, 1000]

// Contitn 1 - prices > 500
const findMethod1 = prices.findIndex((currVal, index, arr) => {
    return currVal > 500
});


// Contitn 2 - prices <= 500
const findMethod2 = prices.findIndex((currVal, index, arr) => {
    return currVal <= 500
})


// Contitn 3 - prices = 200 && prices > 100
const findMethod3 = prices.findIndex((currVal, index, arr) => {
    return (currVal = 200 && currVal > 100)
})


// Contitn 4 - prices = 200 || prices > 100
const findMethod4 = prices.findIndex((currVal, index) => {
    return (currVal = 200 || currVal > 100)
})


// Contitn 5 - prices > 1000
const findMethod5 = prices.findIndex((currVal) => {
    return currVal > 1000
})


console.log(findMethod5);


const prices = [0, 50, 100, 150, 200, 250, 300, 350, 400, 500, 600, 700, 1000]

// Contitn 1 - prices > 500
const findMethod1 = prices.filter((currVal, index, arr) => {
    return currVal > 500
});


// Contitn 2 - prices <= 500
const findMethod2 = prices.filter((currVal, index, arr) => {
    return currVal <= 500
})


// Contitn 3 - prices = 200 && prices > 100
const findMethod3 = prices.filter((currVal, index, arr) => {
    return (currVal = 200 && currVal > 100)
})


// Contitn 4 - prices = 200 || prices > 100
const findMethod4 = prices.filter((currVal, index) => {
    return (currVal = 200 || currVal > 100)
})


// Contitn 5 - prices > 1000
const findMethod5 = prices.filter((currVal) => {
    return currVal > 1000
})


console.log(findMethod5);

*/





// 3] Sort & Compare an Array <--> [sort(), reverse()]
const months = ['March', 'Aug', 'Jan', 'Dec', 'Apr', 'Oct', 'Feb', 'Nov', 'Jul']
const nos1 = [1, 25, 0, 45, -3, 10000, -8, 100, -15, 5.5, 999, 777]
const sort1 = months.sort()
const sort2 = nos1.sort()
console.log(`Sorted Array: ${sort1}, 
${sort2}`)


var fruits1 = ['Banana', 'Orange', 'Apple', 'Mango']
console.log(fruits1);
let fruitsB = fruits1.reverse()
console.log(fruitsB)




// 4] [CRUD Operation] <--> [push(), pop(), shift(), unshift(), splice()]

// pop - removes last element
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
console.log(`Fruits Before Pop Method - ${fruits1}`);

const res3 = fruits1.pop();
console.log(`Fruits which Pop - ${res3}`)
console.log(`Fruits After Pop Method - ${fruits1}`)


// shift - removes first element
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
console.log(`Fruits Before shift Method - ${fruits2}`);

const res4 = fruits2.shift();
console.log(`Fruits which shift - ${res4}`)
console.log(`Fruits After shift Method - ${fruits2}`)


// push - add after last element
const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
console.log(`Fruits Before shift Method - ${fruits3}`);

const res5 = fruits3.push("Virat");
console.log(`Fruits which shift - ${res5}`)
console.log(`Fruits After shift Method - ${fruits3}`)


// unshift - add in 1st position
const fruits4 = ["Banana", "Orange", "Apple", "Mango"];
console.log(`Fruits Before shift Method - ${fruits4}`);

const res6 = fruits4.unshift("Virat");
console.log(`Fruits which shift - ${res6}`)
console.log(`Fruits After shift Method - ${fruits4}`)


/* 
splice - The splice(first parameter, second parameter, rest parameter) method can add & delete at same time. 
The first parameter - defines the position where new elements should be added (spliced in).
The second parameter - defines how many elements should be removed.
The rest of the parameters - define the new elements to be added.
The splice() method returns an array with the deleted items.
*/

let myFriendsSplice1 = ['Dipesh', 'Tarun', 'Mandar', 'Vedant', 'Krishna']
console.log(`Friends List Before splice Method - ${myFriendsSplice1}`);

const res10 = myFriendsSplice1.splice(1, 0, "Sneha", "Priyanka", "Mansi");
console.log(`Friends List After adding -  ${myFriendsSplice1}`);

const res11 = myFriendsSplice1.splice(1, 2, "Sneha", "Priyanka", "Mansi");
console.log(`Friends List After deleting - ${myFriendsSplice1}`);


/*
The first parameter (0) defines the position where new elements should be added (spliced in).
The second parameter (1) defines how many elements should be removed.
The rest of the parameters are omitted. No new elements will be added.
*/

let myFriendsSplice2 = ['Dipesh', 'Tarun', 'Bhakti', 'Mandar', 'Vedant', 'Krishna'];
// console.log(`Friends List Before Removing - ${myFriendsSplice2}`);
const res12 = myFriendsSplice2.splice(2, 3);
// console.log(`Friends List After Removing - ${myFriendsSplice2}`);


// slice - The slice() method slices out a piece of an array into a new array. The slice() method creates a new array. The slice() method does not remove any elements from the source array/original array

let myFriendsx = ['Dipesh', 'Tarun', 'Mandar', 'Vedant', 'Krishna']
console.log(`Friends List Before slice Method - ${myFriendsx}`);

const res8 = myFriendsx.slice(2);
console.log(`Friends List After slice Method - ${res8}`);

console.log(myFriendsx);


// The slice() method can take two arguments like slice(1, 3). The method then selects elements from the start argument, and up to (but not including) the end argument.

let myFriendsy = ['Dipesh', 'Tarun', 'Mandar', 'Vedant', 'Krishna']
console.log(`Friends List Before slice Method - ${myFriendsy}`);

const res9 = myFriendsy.slice(1,3);
console.log(`Friends List After slice Method - ${res9}`);

console.log(myFriendsy);


// 5] Imp methods - forEach(), map(), filter(), reduce().
/*
Difference - 
4 parameters -> ( (currVal, index, aray, thisArg[Optional]) => {})
forEach() -> it will not have return keyword in function, if we used whether the condition is true it will return undefined.
map() -> Can have return keyword, it makes new arrays, but if we passed any condition it will give boolean values.
filter() -> It can have return keyword & conditions also & creates a new array.

reduce( (accumulator, currVal, index, aray, thisArg[Optional]) => {}) 
*/


let myFriends = ['Dipesh', 'Tarun', 'Mandar', 'Vedant', 'Krishna']

myFriends.forEach((element, index, array) => {
    console.log(`Fat Arrow Function => ${element} index no is - ${index}`)
    console.log(`Fat Arrow Function => ${array}`)
})


/*
const prices = [0, 50, 100, 150, 200, 250, 300, 350, 400, 500, 600, 700, 1000]

const findMethod1 = prices.map((currVal, index, arr) => {
  //     console.log(prices);
    return prices;
});
console.log(prices);

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
*/


/*
const numbers = [45, 9, 4, 16, 25];

let sum = numbers.reduce(myFunction1);

function myFunction1(total, value, index, array) {
  console.log(value);
  console.log(total);
  let tot = value + total;
  console.log(tot)
  console.log(`Value is - ${value} & index is -  ${index} & Total is - ${total + value}`);
  console.log(tot)
  return total + value;
}


const numbers = [45, 9, 4, 16, 25];

let sum = numbers.reduceRight(myFunction1);


function myFunction1(total, value, index, array) {
  console.log(value);
//   console.log(total);
//   let tot = value + total;
//   console.log(tot)
//   console.log(`Value is - ${value} & index is -  ${index} & Total is - ${total + value}`);
//   console.log(tot)
//   return total + value;
}

*/





// Other methods - some() & every(), keys(), values(), entries(), from(), delete(), concat(), join(), toString() =>

// every() - like and(&) operator , if all elements condition satisfied returns true, does'nt satisfies it will return false..

const numbers1 = [45, 4, 9, 16, 25];

let everyGreaterThan18 = numbers1.every(myFunction);

function myFunction(value, index, array) {
  return value > 0;
}

console.log(everyGreaterThan18);


// some() - like or(|) operator , if any one condition is true returns true, if all are false returns false..

const number2 = [45, 4, 9, 16, 25];

let someGreaterThan18 = number2.some(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}

console.log(someGreaterThan18);


// toString() - converts an array to a string of (comma separated) array values.
const MERN1 = ["MongoDB", "ExpressJS", "ReactJS", "NodeJS"];
console.log(MERN1);
console.log(MERN1.toString())
// console.log(`Before In - String - ${MERN1}`)
// console.log(`After In - String - ${MERN1.toString()}`)


// join() -  it also joins all array elements into a string. It behaves just like toString(), but in addition we can specify the separator

const MERN = ["MongoDB", "ExpressJS", "ReactJS", "NodeJS"];
console.log(`Before Join - ${MERN}`)

console.log(`After Join - ${MERN.join(" + ")}`)


// delete() - Array elements can be deleted using the JavaScript operator delete. Using delete leaves undefined holes in the array.Use pop() or shift() instead.

const fruit5 = ["Banana", "Orange", "Apple", "Mango"];
console.log(`Before Delete method - ${fruit5}`)

const res7 = delete fruit5[0]
console.log(`Deleted - ${res7}`);
console.log(`After Delete method - ${fruit5}`)



// concat() - It creates a new array by merging (concatenating) existing arrays. The concat() method does not change the existing arrays. It always returns a new array.

const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

console.log(`Girls - ${myGirls}`);
console.log(`Boys - ${myBoys}`);

const myChildren = myGirls.concat(myBoys);
console.log(`After concat - ${myChildren}`);


const arrx = ["Cecilie", "Lone"];
const arry = ["Emil", "Tobias", "Linus"];
const arrz = ["Robin", "Morgan"];
const myChildren2 = arrx.concat(arry, arrz);

console.log(myChildren2)


const arrp = ["Emil", "Tobias", "Linus"];
const myChildren3 = arrp.concat("Peter"); 
console.log(myChildren3)


// key() - method returns an Array Iterator object with the keys of an array, values() - method returns an Array Iterator object with the values of an array, entries() - method returns an Array Iterator object with key/value pairs.

const fruits3Method = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruits3Method.keys();
const values = fruits3Method.values();
const entries = fruits3Method.entries();
console.log(`
Keys => ${keys}, 
Values => ${values}, 
Entries => ${entries}
`)

for (let x in keys) {
  console.log(x)    // doesn't work
}

for (let x of keys) {
  console.log(x)
}

for (let x in values){
    console.log(x)  // doesn't work
}

for (let x of values){
    console.log(x)
}


for (let x in entries){
    console.log(x)  // doesn't work
}

for (let x of entries){
    console.log(x)
}



// from() - 
const cricketTeamsArr = ["India", "Pakisthan", "Srilanka", "Austrilia", "West-Indies", "South-Africa", "NewZland", "England"]
// console.log(cricketTeamsArr);

const from1 = Array.from(cricketTeamsArr);
// console.log(from1);


let ind = cricketTeamsArr[0];
console.log(ind);

const from2 = Array.from(ind);
// console.log(from2);


cricketTeamsArr.map( (cv) => {
  console.log(Array.from(cv));
})


const arrToString = cricketTeamsArr.toString();
console.log(arrToString);

console.log(Array.from(arrToString))




// Functions 
function add (n1, n2){
  return (n1 + n2);
}
let r1 = add(10,5)
let r2 = add(20,10)
let r3 = add(30,15)
console.log(r1)
console.log(r3)
console.log(r2)


// let n1 = 6, n2 =10;
// let n3, n4, n5, n6 



/*
A JavaScript function is a block of code designed to perform a particular task.
A JavaScript function is executed when "something" invokes it (calls it).

The typeof operator in JavaScript returns "function" for functions 
*/

// Syntax =>
function f1(add1, add2){    // function defination () - parameters
  // block of code {} function body..
  
}
f1(5, 10);    // function call () - arguments [real values for parameters]...


// Function Types ->

/*
1] Normal Function [Traditional/old method].
2] Anonymous Function [Function with no name or Expression Function]
3] Fat Arrow Function
4] IIFE(Immediately Invoked/Call Function Expressions) - (function (){})()
5] Constructor Method...
6] Higher Order Functions or Callback function
*/

// arguments.length property - returns the number of arguments received when the function was invoked
function myFunction(a, b) {
//   console.log(a*b);
  return arguments.length;
}
// console.log(myFunction(5,10,15,25,35));


// toString - returns the function as a string
function mineFunction(a, b) {
  return a * b;
}
let text = mineFunction(2,5).toString();
// console.log(text)


// 1] Normal Function =>
function first (name1) {
//   console.log(name1)
}
// console.log(name1)
// console.log(first("Raj"));


function second (name1) {
//   console.log(name1)
  return name1;    // stop the program of function/end of function;
//   console.log()
}
// console.log(name1)
// console.log(second("Tarun"));


// 2] Anonymous Function - A JavaScript function can also be defined using an expression; Functions stored in variables do not need function names. They are always invoked (called) using the variable name. =>
const third = function (name2){
  return name2 + name3
}
// console.log(third("Vedant", "Mandar"));


const forth = function (name2, name3){
  return `Best Friends -> ${name2} & ${name3}`;
}
// console.log(forth('Vedant', 'Mandar'));


const fifth = function (t1, t2, t3){
  return `Best Team -> ${t1} & ${t3}`;
}
// console.log(fifth('India', 'Newzland'));

const sixth = function (t1, t2, t3){
  return `Best Team -> ${t1} & ${t2}`;
}
// console.log(sixth('India', 'Newzland'));

const seven = function (t1, t2, t3){
  return `Best Team -> ${t1} & ${t3} & ${t2}`;
}
// console.log(seven('India', , 'Newzland'));   -- Error
// console.log(seven('India', 0 , 'Newzland'));
// console.log(seven('India', true , 'Newzland'));
// console.log(seven('India', '' , 'Newzland'));
// console.log(seven('India', ['vhvh'] , 'Newzland'));
// console.log(seven('India', {} , 'Newzland'));
// console.log(seven('India', null , 'Newzland'));
// console.log(seven('India', undefined , 'Newzland'));



// 3] Arrow Function - 
function nf(x) {
  return `${x} - I am normal function`;
}
let resForNF = nf("Hello")
console.log(resForNF);

const af = (x) => {
    return `${x} - I am arrow function with return keyword`;
}
console.log(af("Hello!!"));

const af2 = (x) => `${x} - I am arrow function without return keyword`;
console.log(af2("Hello!!"));

const af3 = x => `${x} - I am arrow function without return keyword & parameters parenthesis`;
console.log(af3("Hello!!"));

// const af4 = x,y => `${x} & ${y} - I am arrow function without return keyword `;
const af4 = (x,y) => `${x} & ${y} - I am arrow function without return keyword `;
console.log(af4("Hello", 5));



// 4] IIFE -
(function nf(x) {
  return `${x} - I am normal function`;
})()

// 5] Constructor Method - Functions can also be defined with a built-in JavaScript function constructor called Function().

const myFunction1 = new Function("a", "b", "return a * b");
let x = myFunction1(4, 3);

const myFunction2 = function (a, b) {return a * b};
let y = myFunction2(4, 3);


function myFunction(a, b) {
  const x= a+b;
  const y = a * b;
  return[x,y]
}
let x = myFunction(4, 3);
console.log(x)


// Callback Function -

const addCall = (a, b) => {
  return a + b;
}
// console.log(addCall(5,2));

const subCall = (a, b) => {
  return Math.abs(a - b);
}

const multCall = (a, b) => {
  return a * b;
}

const divCall = (a, b) => {
  return a / b;
}

const modCall = (a, b) => {
  return a % b;
}

const calculator = (num1, num2, operator) => {
  return operator(num1, num2);
  //   return add(5,2);
}

// calculator(5,2,addCall)    // Calculater [HOF], addCall, subCall,... [CF].
console.log(calculator(5, 2, addCall));
console.log(calculator(5, 2, subCall));
console.log(calculator(5, 2, multCall));
console.log(calculator(5, 2, divCall));
console.log(calculator(5, 2, modCall));


// calculator - HOF[High order function...], num1,num2 = inputs, operator = CF

// eg - .map( (item) => {}), .filter(), .reduce()


const students = (n1, n2, n3, n4) => {
  return `Students are - ${n1}, ${n2}, ${n3}, ${n4}`
};

// console.log(students("Mandar", "Tarun", "Raj", "vedant"));

let studentsPrint = students("Mandar", "Tarun", "Raj", "vedant");
// console.log(studentsPrint);



const ytGod = (yt1, yt2, studentsPrint) => {
 return `YtGod is ${yt1} & ${yt2}.... - ${studentsPrint}`
}

console.log(ytGod("CWH", "TT", studentsPrint))



// Call(), Apply(), Bind() -


// problem

let userDetail = {
  name: "Dipesh",
  age: 22,
  Designation: "Web Developer",
  print: function(State){
//     console.log(name, this);
    console.log(this.name + " " + State);
  }
}

userDetail.print("Kolkata");


//  print: function(){
// //     console.log(name, this);
//     console.log(this.name);
//   }
// print.call(userDetail)



let userDetail1 = {
  name: "Mandar",
  age: 23,
  Designation: "Web Developer",
 
}
// function borrow
// userDetail.print.call(userDetail1);
userDetail.print.call(userDetail1, "Delhi");
userDetail.print.apply(userDetail1, ["Delhi"]);
let z = userDetail.print.bind(userDetail1);



const person = {
  firstName:"John",
  lastName: "Doe",
  fullName: function () {
    return person.firstName + " " + this.lastName;
  }
}

// console.log(person.fullName());  



const person1 = {
  firstName:"Mandar",
  lastName: "Pawar",
  age: 23
}
const person2 = {
  firstName:"Vedant",
  lastName: "Thakur",
  designation: "web developer"
}
const person3 = {
  firstName:"Tarun",
  lastName: "Upadhyay",
  designation: "civil engineering"
}


const mainPerson = {
  fullDetails: function() {
    return this.firstName + " " + this.lastName;
  }
}

const mainPerson3 = {
  fullDetails3: function(state, country) {
    return `Call Method with strings for more data store explicitly in object using function =>
My Firstname is - ${this.firstName},
My Lastname is - ${this.lastName}, 
My state & country is - ${state} & ${country}`
  }
}

const mainPerson4 = {
  fullDetails4: function(state, country) {
    return `Apply Method with array for more data store explicitly in object using function =>
My Firstname is - ${this.firstName},
My Lastname is - ${this.lastName}, 
My state & country is - ${state} & ${country}`
  }
}

// console.log(mainPerson.fullDetails());

let person1Detail = mainPerson.fullDetails.call(person1);
let person2Detail = mainPerson.fullDetails.call(person2);
let person3Detail = mainPerson3.fullDetails3.call(person3, "UP", "India");
// let personErrDetail = mainPerson3.fullDetails3.call(person3, ["UP", "India"]); -- undefined bcoz array will be used in apply
let person4Detail = mainPerson4.fullDetails4.apply(person3, ["UP", "India"]);



console.log(person1Detail);
console.log(person2Detail);
console.log(person3Detail);
// console.log(personErrDetail);
console.log(person4Detail);


// Math =>

/*
Math - Mathematical terms.

Properties - 
1. PI (3.14)
2. sqrt()
3. log - LN2, Log2E

Methods - 
round() - after decimal 5 or > 5, it takes next no or same no.
ceil() - Always next no doesn't care about decimal, 
floor() - Same no but if in negative it increase,
trunc() - return integer value.

sign() - 0, +ve, -ve
pow(x,y) - Exponention (5,3) => 5 * 5 * 5    [ ** - Exponention]

random(inc, exc) => (0, 1)
log(), log2(), log10(), sin(), cos() -- Not important, skip

abs() - always return positive value
min() - minimum, max() - maximum
*/

let PI;
// console.log(PI, Math.PI);

let x = 64;
// console.log(Math.sqrt(64), Math.sqrt(x))

// console.log(Math.round(4.6), Math.round(4.5), Math.round(4.2), Math.round(-5.2));
// console.log(Math.ceil(4.6), Math.ceil(4.5), Math.ceil(4.2), Math.ceil(-5.2));
// console.log(Math.floor(4.6), Math.floor(4.5), Math.floor(4.2), Math.floor(-5.2));
// console.log(Math.trunc(4.6), Math.trunc(4.5), Math.trunc(4.2), Math.trunc(-5.2));

// console.log(Math.sign(-10),Math.sign(0),Math.sign(10))
// console.log(Math.pow(5,2))

// console.log(Math.abs(-4.7), Math.abs(0), Math.abs(4.7))

let min_max = ["0", "150", "30", "20", "-8", "-200"]
let min = Math.min(min_max), max = Math.max(min_max);
// console.log(min, max);

let min1 = Math.min(0, 150, 30, 20, -8, -200)
let max1 = Math.max(0, 150, 30, 20, -8, -200)
console.log(min1, max1);



// Date  

// console.log(new Date());

// new Date()
// new Date(date string)
// new Date(year,month)
// new Date(year,month,day)
// new Date(year,month,day,hours)
// new Date(year,month,day,hours,minutes)
// new Date(year,month,day,hours,minutes,seconds)
// new Date(year,month,day,hours,minutes,seconds,ms[1000ms = 1s])
// new Date(milliseconds)


// date format - (yy,mm,dd,h,m,s,ms)
// eg. const d = new Date(2018, 11, 24, 10, 33, 30, 0);


let date = new Date();

const d = new Date("October 13, 2014 11:13:00");
// console.log(d)


// Month [Jan-0, Dec-11; after 11 it will recycle again]
// eg. const d = new Date(2018, 15, 24, 10, 33, 30) <==> const d = new Date(2019, 3, 24, 10, 33, 30);


// Specifying a day higher than max, will not result in an error but add the overflow to the next month:
// eg. const d = new Date(2018, 5, 35, 10, 33, 30); <==> const d = new Date(2018, 6, 5, 10, 33, 30);

// Using 6, 5, 4, 3, or 2 Numbers
// eg. const d = new Date(2018, 11, 24, 10, 33, 30);  new Date(2018, 11, 24, 10, 33);  new Date(2018, 11, 24, 10)..., etc 

// You cannot omit month. If you supply only one parameter it will be treated as milliseconds. const d = new Date(2018);


// One and two digit years will be interpreted as 19xx:
// eg. const d = new Date(99, 11, 24) => 1999; new Date(9, 11, 24) => 1909


// By Default JS Date & Time - JavaScript stores dates as number of milliseconds since January 01, 1970. Zero time is January 01, 1970 00:00:00 UTC.


// new Date(milliseconds)
// eg. const d = new Date(100000000000); (-100000000000); (24 * 60 * 60 * 1000); [day(24), hr(60min - 1hr), min(60sec - 1min), sec]



// Methods - GMT[Greenwich Mean Time]
let date1 = new Date();

let str = date1.toString();    // string both date & time with global
let ls = date1.toLocaleString();   // local date & time
let ds = date1.toDateString();     // date
let ts = date1.toTimeString();     // time
let utc = date1.toUTCString();     // converts a date to a string using the UTC standard
let iso = date1.toISOString();   // timestamp basically we used in databases 
console.log(str, ls, ds, ts, utc, iso);



// Date Inputs ->
// ISO Date	"2015-03-25" (The International Standard); Short Date	"03/25/2015"; Long Date	"Mar 25 2015" or "25 Mar 2015"



// console.log(d1.getYear(), d2.getYear(), d3.getYear());  - Removed

// Get methods should be in proper forma

// Get Methods - getFullYear()[4 digits - yyyy], getMonth()[0-11], getDate()[1-31], getDay()[0-6], getHours()[0-23], getMinutes()[0-59],
// getSeconds()[0-59], getMilliseconds()[1000ms - 1s (0-999)], getTime()[(milliseconds since January 1, 1970)].

// We can use getUTCDate with above sections - getUTCDate(), getUTCFullYear(), ..	

const d1 = new Date();
const d2 = new Date("2021-03-25");
const d3 = new Date("18-03-25");  
// console.log(d3.getFullYear());

// console.log(d1.getFullYear(), d2.getFullYear());
// console.log(d1.getMonth(), d2.getMonth());


const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const d4 = new Date("2021-03-25");
// let month = months[d4.getMonth()];

// console.log(d1.getDate(), d2.getDate());
// console.log(d1.getDay(), d2.getDay());
// console.log(d1.getHours(), d2.getHours());
// console.log(d1.getMinutes(), d2.getMinutes());
// console.log(d1.getSeconds(), d2.getSeconds());
// console.log(d1.getMilliseconds(), d2.getMilliseconds());

const d5 = new Date("1970-01-01");
const d6 = new Date("2021-03-25");
const d7 = new Date();

console.log(d5.getTime(), d6.getTime(), d7.getTime());


let ms = Date.now();
const minute = 1000 * 60;
const hour = minute * 60;
const day = hour * 24;
const year = day * 365;

let years = Math.round(Date.now() / year);

let diff = d.getTimezoneOffset();




// Objects ->


// In JavaScript, arrays use numbered indexes; objects use named(key) indexes; In array we can't provide key to distinguish.
// https://www.geeksforgeeks.org/difference-between-array-and-array-of-objects-in-javascript/

let arr1 = ["Raj"];
let arr2 = ["Raj", "Dipesh"];
let arr3 = ["Raj", "Dipesh", true, 45, undefined, function f1(){}, {}];
let arr4 = ["Raj", 23, 'Web Developer'];


console.log(arr1, arr2, arr3);

let obj1 = {
  name: "Raj"
}
let obj2 = {
  name: "Raj",
  name1: "Dipesh"
}

let obj3 = {
  name: "Raj",
  name1: "Dipesh",
  age: 23,
  bool: false,
  und: undefined,
  fullName: function() {
    return obj2.name + " " + this.name1;
  },
  arr: ["Raj", "Dipesh", true, 45, undefined, function f1(){}, {}]
}

console.log(obj1.name);
console.log(obj2.name, obj2.name1);
console.log(obj3.name, obj3.name1, obj3.age, obj3.bool, obj3.und, obj3.fullName(), obj3.arr);



// Create a single object, using an object literal. Create a single object, with the keyword new. Define an object constructor, and then create objects of the constructed type. Create an object using Object.create().

const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};


// Adding
const person2 = {};
person2.firstName = "John";
person2.lastName = "Doe";
person2.age = 50;
person2.eyeColor = "blue";
// console.log(person2)

const a = new String("");
// console.log(a, typeof(a));

const arr = ["John", "Raj", {
  name: "Goku",
  age: 23
}, {}];
console.log(arr[2], arr[2].name, arr[3])

const person3 = new Object();
person3.firstName = "John";
person3.lastName = "Doe";
person3.age = 50;
person3.eyeColor = "blue";

// Deleting - delete person.age;

const person4 = {
  firstName:"John",
  lastName:"Doe",
  age:50, eyeColor:"blue"
}

const x = person4;
x.age = 10;      // Will change both x.age and person.age


// A JavaScript object is a collection of unordered properties. Properties can usually be changed, added, and deleted, but some are read only.

// Access value using Dot(.) -  person.age or Bracket[] - person["age"], or Expression() - x = "age"; person[x]


// Nested Obj -
myObj = {
  name:"John",
  age:30,
  cars: {
    car1:"Ford",
    car2:"BMW",
    car3:"Fiat"
  }
}
myObj.cars.car2; myObj.cars["car2"]; myObj["cars"]["car2"];

const myObj = {
  name: "John",
  age: 30,
  cars: [
    {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
    {name:"BMW", models:["320", "X3", "X5"]},
    {name:"Fiat", models:["500", "Panda"]}
  ]
}



const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  age: 25,
  fullName: function() {
    return this.firstName + " " + this.lastName;
  },
  fullName1: function() {
    return person.firstName + " " + person.age;
  },
  name : function () {
  return (this.firstName + " " + this.lastName).toUpperCase().padStart(20);
}
};

// console.log(person.fullName);
// console.log(person.fullName(), person.fullName1(), person.name());

// Displaying a JavaScript object will output [object Object].
// Displaying the Object Properties by name, Displaying the Object Properties in a Loop, Displaying the Object using Object.values(), Displaying the Object using JSON.stringify()

// console.log(Object.keys(person), Object.values(person), Object.entries(person))
// console.log(`Person Keys - ${person.keys}, Values - ${person.values}, Entries - ${person.entries}`)


const person6 = {
  name: "John",
  age: 30,
  city: "New York",
};
// console.log(Object.keys(person6),Object.values(person6), Object.entries(person6))




const person5 = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function() {
    return (this.firstName + " " + this.lastName).toUpperCase();
  },
   fullName1: function() {
    return (this.firstName + " " + this.lastName).toLowerCase();
  }
}
let res = person5.fullName()
// console.log(Object.keys(person5),Object.values(person5))




const person7 = {
  name: "John",
  age: 30,
  city: "New York"
};

let myString = JSON.stringify(person7);
// console.log(myString);

const person8 = {
  name: "John",
  today: new Date()
};

const person9 = {
  name: "John",
  age: function () {return 30;}
};

const arr = ["John", "Peter", "Sally", "Jane"];



const person10 = {
  firstName: "John",
  lastName: "Doe",
  language: "en",
  message: "Normal Function",
  get lang() {
    return this.language;
  },
  val: function ok(){
    return this.message
  },
  set mssg1(cn){
    return this.cn
  }
};
console.log(person10.mssg1 = "Virat Kohli + Rohit Sharma")
console.log(person10.lang, person10.val())



function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}





/*
let players = ["Gill","Rohit","Virat","Yadav","Rahul","Ishan","Hardik","Jadeja","Ashwin","Yadav","Bumrah","Siraj"];

let p1 = players[0];
let p2 = players[1];
let p3 = players[2];
let p4 = players[3];
let p5 = players[4];
let p6 = players[5];
let p7 = players[6];
let p8 = players[7];
let p9 = players[8];
let p10 = players[9];
let p11 = players[10];
let p12 = players[11];
let p13 = players[12];
console.log(p1);
console.log(p2);
console.log(p3);
console.log(p4);
console.log(p5);
console.log(p6);
console.log(p7);
console.log(p8);
console.log(p9);
console.log(p10);
console.log(p11);
console.log(p12);
*/