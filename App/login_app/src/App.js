import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Blog from './components/Blog';
import Addblog from './components/Addblog';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Blog/>}/>
        <Route path='/add' element={<Addblog/>}/>
      </Routes>

    </div>
  );
}

export default App;
