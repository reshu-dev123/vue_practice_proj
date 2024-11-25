import React from 'react'
import Child from './child'
import Parent from './Parent'
const App = () => {
  let product={
    order_id:1,
    name:"glass",
    quantity:5
  }
  let isShowCh = false;
  let isShowPar = true;
 if(isShowCh && isShowPar){
  return (
    <div> 
    {isShowCh && <><p>i'm child</p><Child name="harry" age={5}/></>}
    --------------------------------
    <p>i'm parent</p>
    {isShowPar?<Parent {...product}/>:"par not found"} {/*Pid={product.id} Pname={product.name}*/}
    </div>
  )
}
return <p>empty items not found</p>
}

export default App