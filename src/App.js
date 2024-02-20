import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import ConectUs from './pages/ConectUs';
import QA from './pages/QA'; 
import Gallery from './pages/Gallery';
import About from './pages/About';
import TankU from './pages/TankU';
import Shop from './pages/Shop';

function App() {
  return (
    <div className='text-center'>
      
      <BrowserRouter>
        <Routes>
          
          <Route path='/' element={<Home/>}/>
          <Route path='/conectUs' element={<ConectUs/>}/>
          <Route path='/QA' element={<QA/>}/>
          <Route path='/gallery' element={<Gallery/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/tankU' element={<TankU/>}/>
          <Route path='/shop' element={<Shop/>}/>
          <Route path='*' element={<h1>404 not found</h1>}/>
          
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
