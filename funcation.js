// function declaration

let num1 = 0;
function calculate(firstNumber, secondNumber ) {
    num1 = firstNumber * secondNumber;
    num1 += 4;
    num1 /= 2;
}
calculate(5,4)


// value returning funtion

function getNumber(number) {
    return number
}
const myNumber = getNumber(5);

// ES6 arrow function 

const myArrowFunction = (param1, param2) => {
    param1 * param2
}

