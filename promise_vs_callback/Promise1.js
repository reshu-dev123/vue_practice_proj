let myPromise = new Promise ((myResolve,myReject)=>{
    let x = 0;
    if(x==0){
        setTimeout(()=>{myResolve('ok')},3000);
    }
    else{
        myReject('error')
    }
}
);
myPromise.then(
    (success)=>{
        myDispalyer(success);
    },
    (error)=>{
        myDispalyer(error);
    }
    
)

let myDispalyer=(result)=>{
console.log(result)
}
