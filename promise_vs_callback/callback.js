    let x = 0;
    if(x==0){
        setTimeout(()=>{myDispalyer('ok')},3000);
    }
    else{
        myReject('error')
    }

let myDispalyer=(result)=>{
console.log('callback',result)
}
