/*-----------------------For loop---------------------------------------
EG:1 cars = new Array ("volvo ","swift ","maruthi ","BMW ","benz ","nano ","duster ");
let text = '';
// text += cars[0] + "<br>";
// text += cars[1] + "<br>";
// text += cars[2] + "<br>";
// text += cars[3] + "<br>";
// text += cars[4] + "<br>";
// text += cars[5] + "<br>";
for (let i =0;i < cars.length;i++){ 
    text += cars[i]   ;// concatenation ''+ volvo = volvo 
}
console.log(text);
------------------
//You can initiate many values in expression 1 (separated by comma):

cars = new Array ("volvo ","swift ","maruthi ","BMW ","benz ","nano ","duster ");
let i,len,text;
for(i=0,len = cars.length , text='';i < len;i++){
    text += cars[i];
}
-----------------
subjects = new Array("Maths","Physics","Chemistry" );
marks = new Array();
for (var i=0;i < subjects.length;i++){
    num = prompt("Enter your marks: " +subjects[i] + " subjects")
    marks[i]=parseInt(num);
}

msg = " ";
for (var i=0;i < subjects.length;i++)
msg += subjects[i] + "Marks :==" + marks[i] +"\n";
alert(msg);

// ---------------For in-----------------------
const numbers = [45 , 4, 9, 16, 25];
for (let x in numbers)
console.log( numbers[x]);

const person = {fname:"John", lname:"Doe", age:25};
for (let x in person)
console.log(person[x]);

---------------------FOR EACH-------------------

var names =["tom","bob","ria","chutki","bheem"];
names.forEach(
    function(value,index,arr){
   console.log(value + "\n");
}
);

------------------WHILE LOOP--------------------

let sum=0;
let number=0;
do{
sum += number;
number= parseInt(prompt("Enter number:" ));
}
while (number >= 0) 
    console.log(`The sum is ${sum}.`);
  
 ---------------------   
    subjects = new Array("Maths","Physics","Chemistry" );
    marks = new Array();i=0;
    while (i < subjects.length){
        num = prompt("Enter your marks: " +subjects[i] + " subjects")
        marks[i]=parseInt(num);
        i++;
    }
    
    msg = " "; i=0;
    while (i < subjects.length) {
    msg += subjects[i] + "Marks :==" + marks[i] +"\n";
    i++;}
    alert(msg);
*/
  
