import './App.css';
import ReactMemo from './components/ReactMemo';
import UseMemoExample from './components/useMemo';
import UseCallbackExample from './components/useCallback';
function App() {
  return (
    <>
   ------ react memo --------
    <ReactMemo/>
  ------ react useMemo --------
    <UseMemoExample/>
  ------react useCallback------------
  <UseCallbackExample/>
    </>
  );
}

export default App;
