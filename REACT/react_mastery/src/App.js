import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Navbar from './components/Navbar';
import Counter from './components/Counter';
  

function App() {
  return (
    <div className="App">
      
      <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/Home' element={<Home/>}></Route>
          <Route path='/About' element={<About/>}></Route>
          <Route path='/Contact' element={<Contact/>}></Route>
          <Route path='/Counter' element={<Counter/>}></Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
