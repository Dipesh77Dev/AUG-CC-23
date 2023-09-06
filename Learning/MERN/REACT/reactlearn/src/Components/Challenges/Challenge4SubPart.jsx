const add1 = (num1, num2) => { num1 + num2 };

const add = (num1, num2) => {
    let sum = num1 + num2
    return sum
};

const sub = (num1, num2) => {
    let sum = num1 - num2
    return sum
};

const mult = (num1, num2) => {
    let sum = num1 * num2
    return sum
};

const div = (num1, num2) => {
    let sum = num1 / num2
    return sum
};

const div1 = (num1, num2) => {
    let sum = num1 / num2
    // return sum
    return sum.toFixed(2)
};

export { add, sub, mult, div, add1, div1 }