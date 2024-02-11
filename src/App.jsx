import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from'./Components/Navbar'
import Home from './Sections/Home'
import About from './Sections/About'
import Portfolio from './Sections/Portfolio'
import Contact from './Sections/Contact'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
