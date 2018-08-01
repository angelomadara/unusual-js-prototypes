# unusual-prototypes
some usefull java-script prototypes maybe common maybe not

format a number to hundreds with any kind of separator and decimal you'd like

.toMoney("decimal","separator") // by default separtor is comma (,)

Example use:
var number_1 = 123456; // number varialble
var number_2 = "123456"; // string variable

console.log(number_1.toString().toMoney());
console.log(number_2.toMoney());
