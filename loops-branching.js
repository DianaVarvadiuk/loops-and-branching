let firstNumber = +( prompt("Vvedit firstNumber  ", 10) );
let secondNumber = +( prompt("Vvedit secondNumber ", 100) );

while(isNaN(firstNumber) ){

    firstNumber = +( prompt("Enter an integer") );
}
console.log("firstNumber : ",firstNumber);
console.log("Integer firstNumber ", !Number.isInteger(firstNumber) );

while( isNaN(secondNumber) ) {
    secondNumber = +( prompt("Enter an integer") );
}
console.log("secondNumber",secondNumber);
console.log( "Integer secondNumber",!Number.isInteger(secondNumber) );

const skipEven = confirm("Skip even numbers?");
let result = 0;

for(let i = firstNumber; i <= secondNumber; i++) {


    if (!skipEven && i % 2 === 0) {
        continue;
        console.log("even number")
    }
     else {
        console.log("not an even number")
    }
result += i;
}

console.log("Result : " + result)
