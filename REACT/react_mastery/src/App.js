
import './App.css';
import  Hero from './pages/Hero.jsx'
import  Counter from './pages/Counter.jsx'
import User from './pages/User.jsx';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './pages/Navbar.jsx';
import ToDo from './pages/ToDo.jsx';
import API from './pages/API.jsx';
import Greet from './pages/Greet.jsx';
import ToggleTheme from './pages/ToggleTheme.jsx';
import Dice from './pages/Dice.jsx';
import FormHandeling from './pages/FormHandeling.jsx';


  

function App() {
  return (
    <div className="App">

      {/* <Router>
        <Navbar/>
        
        <Routes>
        
          <Route path='/user' Component={User}></Route>
          <Route path='/counter' Component={Counter}></Route>
          <Route path='/hero' Component={Hero}></Route>
          <Route path='/todo' Component={ToDo}></Route>
        </Routes>
      </Router> */}
    
     {/* <Hero name="Madhav" age={23}/>
     <Hero name="Priyanshu" age={21}/> */}
     {/* <Counter/> */}
     {/* <User/> */}

     {/* <API/> */}

     {/* <Greet /> */}
     {/* <ToggleTheme/> */}
     {/* <Dice/> */}
     <FormHandeling/>
 
    </div>
  );
}

export default App;
