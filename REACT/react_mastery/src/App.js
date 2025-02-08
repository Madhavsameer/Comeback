
import './App.css';
import  Hero from './pages/Hero.jsx'
import  Counter from './pages/Counter.jsx'
import User from './pages/User.jsx';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './pages/Navbar.jsx';
  

function App() {
  return (
    <div className="App">

      <Router>
        <Navbar/>
        
        <Routes>
        
          <Route path='/user' Component={User}></Route>
          <Route path='/counter' Component={Counter}></Route>
          <Route path='/hero' Component={Hero}></Route>
        </Routes>
      </Router>
    
     {/* <Hero name="Madhav" age={23}/>
     <Hero name="Priyanshu" age={21}/> */}
     {/* <Counter/> */}
     {/* <User/> */}
    </div>
  );
}

export default App;
