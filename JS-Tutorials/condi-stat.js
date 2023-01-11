/* if , esle if
age = prompt("Enter age of person")
age = parseInt(age);
if (age >= 60){
    document.write("eligible for pension");
}
else if (age <=30 && age >= 22){
    document.write("eligible  for student  fund");
}
else {
    document.write("Not eligible");
}
*/
// if else if else or switch
age = prompt("Enter age of person")
age = parseFloat(age);
switch(age )
{
    case 10.5:
    document.write("i am 10.5 kg");
    break;
    case 60:
    document.write("i am 60 yrs old");
    break;
    default:
        document.write("your age " +age +" doesnt match");   
}

