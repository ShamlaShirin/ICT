import logo from './logo.svg';
import './App.css';
import SignUp from './components/SignUp';
import Navbar from './components/Navbar';
import Register from './components/Register';
import { Route, Routes } from 'react-router-dom';
import StateBasics from './components/StateBasics';
import Count from './components/Count';
import Listmap from './components/Listmap';
import Api from './components/Api';
import SampleUse from './components/SampleUse';
import GetCard from './components/GetCard';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Register/>}/>
        <Route path='/sign' element={<SignUp/>}/>
        <Route path='/sb' element={<StateBasics/>}/>
        <Route path='/cnt' element={<Count/>}/>
        <Route path='/list' element={<Listmap/>}/>
        <Route path='/api' element={<Api/>}/>
        <Route path='/use' element={<SampleUse/>}/>
        <Route path='/crd' element={<GetCard/>}/>
      </Routes>
    
    </div>
  );
}

export default App;
