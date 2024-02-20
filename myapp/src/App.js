import './App.css';
import Comp1 from './Comp1';
import JSxComp from './Components/JsxComp';
import Counter from './Components/Counter';
import Namelist from './Components/Namelist';
import Productlist from './Components/Productlist';
import Classcomp from './Components/Classcomp';

function App() {
  return (
   <div>
    <h1>Welcome to React Session</h1>
    {/* <Comp1 msg="Hello world" country="india"/> 
    <Comp1 msg="Hi everyone!!" country="usa"/>
    <JSxComp/>
    <p>rating:<Counter max="5" min="0"/></p>
    <p>quantity:<Counter max="10" min="0"/></p> */}
   {/* <Namelist/>
  <Productlist/> */}
  <Classcomp msg="Hello"/>
   </div>
  );
}

export default App;