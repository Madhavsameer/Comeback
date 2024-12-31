import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Navbar from './components/Navbar';
import Counter from './components/Counter';
import DataFetch from './components/DataFetch';
import ApiFetch from './components/ApiFetch';
import FormHandling from './components/FormHandling';
import Ip from './components/Ip';
  

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
          <Route path='/DataFetch' element={<DataFetch/>}></Route>
          <Route path='/ApiFetch' element={<ApiFetch/>}></Route>
          <Route path='/FormHandling' element={<FormHandling/>}></Route>

        </Routes>
        <Ip/>
      </Router>
    </div>
  );
}

export default App;
