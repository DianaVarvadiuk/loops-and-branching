let n = Number(prompt("Vvedit number N ", 10));
let m = Number(prompt("Vvedit number M ", 100));

while(isNaN(n)){
    alert("Було введене не число попробуйте ше раз!");
    n = prompt("Введіть ціле число");
}
console.log(n);
console.log(!Number.isInteger(n));

while(isNaN(m)){
    alert("Буо введене не число попробуйте ше раз!");
    n = prompt("Введіть ціле число");
}
console.log(m);
console.log(!Number.isInteger(m));
const check = confirm("Пропускати парні цифри?")
let result = 0;
if(check){

    alert ("Потрібно пропускати")
}
 else {
alert("Не потрібно пропускати")
 }
for( let i = n; i <= m; i++){

 if(check){
 if ( i % 2 === 0){
  continue;

  console.log("Парне число")
 }
}


else{
console.log("не парне число")
}
result += i
}

console.log("Result :" + result)
console.log(result)