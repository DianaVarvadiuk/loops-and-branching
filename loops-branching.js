let firstNumber = Number( prompt("Vvedit firstNumber  ", 10) );
let secondNumber = Number( prompt("Vvedit secondNumber ", 100) );

while( isNaN(firstNumber) ){

    firstNumber = Number( prompt("Enter an integer") );
}
console.log("firstNumber : ",firstNumber);
console.log("Integer firstNumber ", !Number.isInteger(firstNumber) );

while( isNaN(secondNumber) ) {
    secondNumber = Number( prompt("Enter an integer") );
}
console.log("secondNumber",secondNumber);
console.log( "Integer secondNumber",!Number.isInteger(secondNumber) );

const check = confirm("Skip even numbers?");
let result = 0;

for( let i = firstNumber; i <= secondNumber; i++ ) {

 if (check) {
    if ( i % 2 === 0) {
    continue;
    console.log("even number")
    }
    } else {
    console.log("not an even number")
    }
result += i;
}

console.log("Result : " + result)
