import './App.css';
import Comp1 from './Comp1';
import JsxComp from './Components/JsxComp';
import Counter from './Components/Counter';
import Namelist from './Components/Namelist';
import Productlist from './Components/Productlist';
import Classcomp from './Components/Classcomp';
import Lifecycledemo from './Components/Lifecycledemo';
import UseEffectDemo from './Components/useEffectDemo';
import UseMemo from './Components/UseMemo';
import UserComp from './Components/UserComp';
import Postlist from './Components/Postlist';
import Citylist from './Components/Citylist';
import { msg as m} from './Components/UserComp';
import { Routes,Route } from 'react-router-dom';
import Errorcomp from './Components/Errorcomp';
import Topnavbar from './Components/Topnavbar';
import Productdetails from './Components/Productdetails';
import Uncontrolledforms from './Components/Uncontrolledforms';
import Controlledform from './Components/Controlledform';
import Axiosdemo from './Components/Axiosdemo';
import Login from './Components/Login';

function App() {
  let isrender=true
  return (
   <div>
    <Topnavbar/>
     <Routes>
       <Route exact path='/' element={<Comp1 msg="hello" country="india"/>}></Route>
       <Route exact path='/products' element={<Productlist/>}></Route>
       <Route exact path='/Counter' element={<Counter min={0} max={10}/>}></Route>
       <Route exact path='/productdetail/:pid/:pname' element={<Productdetails/>}></Route>
       <Route exact path='/uncontrolledform' element={<Uncontrolledforms/>}></Route>
       <Route exact path='/controlledform' element={<Controlledform/>}></Route>
       <Route exact path='/axios' element={<Axiosdemo/>}></Route>
       <Route exact path='/redux' element={<Login/>}></Route>
       <Route exact path='*' element={<Errorcomp/>}></Route>
   

     </Routes>
       
   </div>
  );
}

export default App;
