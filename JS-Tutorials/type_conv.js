/* implicit  int --- str */
var num1 = 5;
var num2 = num1 + 5;
var num3 = num1 + "5";
console.log(num2);//10
console.log(num3);//55
console.log(typeof num2);//num
console.log(typeof num3);//str

/* Explicit str -- int */
var num1 = prompt("enter some value");//prompt takes val as str bydef
console.log(num1 + " " + typeof num1);// hence num1 str
console.log(parseInt(num1) + 9 );// num1 str ----> num1 int
/*alert("hi this is alert");

/* Explicit str -- float */
var num1 = prompt("enter real/float value of a");
var num2 = prompt("enter real/float value of b");
alert("the sum real number is:" + (parseFloat(num1) + parseFloat(num2)));






