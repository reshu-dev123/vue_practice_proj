/*---------------- Named functions-------------
function addNum(a,b){ //declare
    console.log("Named function addNum is called");
    return a+b;
}
console.log(addNum(5,6));//call function and printing result
var call=addNum(1,2);//store fn in var
console.log(call);//calling stored var fn
addNum(6,7);//call function by fn name

---------------Anonymous Function----------
var anon=function (a,b){
    console.log("Anonymous function is called");
    return a+b;
}
anon(5,6);// call fn by variable (in which fn is stored)
console.log(anon(5,6));

setTimeout(
    function()
{
    alert("Anonymous set time out fn dispaly after 5sec");
}
,5000  
) 

----------Constructor----------------
 var cons = new Function("a","b","console.log('hi i am constructor');return a+b;");
 console.log(cons(9,5));

 -----------self-invoke-fn-------------
 (
    function(a,b)
 {
    console.log("hi i am self-invoke function");
    return a+b;
} 
)(10,11);
*/
