import './App.css';
import Child from './child';
import Parent from './Parent';

function App() {
  const styleObj = {
    color:"red",
    backgroundColor:"white",
    fontStyle:"Italic"
  }
  let isChild = true;
  let isParent = false;
  if(isParent){
  return (
    <> <p style={styleObj}> APP COMP.</p> 
        {isParent && <Parent/>}
        {isParent ? <Parent/>:"Parent not found"}
        </>
          
  );
}
return (
  <> <p style={styleObj}> APP COMP.</p> 
      {/* {isChild && <Child/>} */}
      {isChild ? <Child/>:"child not found"}
      </>
        
);
}
export default App;
