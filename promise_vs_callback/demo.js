let x=0;
if(x==0){
   setTimeout(()=>{myDispalyer('ok')},3000) ;
}
else{
    myDispalyer('error');
}
let myDispalyer=(result)=>{
    console.log(result);
}
