
import './App.css';
import React from 'react';
import About from './components/about/about'
// import Exp from './components/experience/experience'
import Cont from './components/highschool/Highschool'
import Home from './components/home/home'
import{ Routes, Route} from "react-router-dom";
import Navbar from './Navbar'



function App() {
  return (
    <div className="App">

      <mybar className="App-header">        
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route exact path="/about me" element={<About/>}/>
          <Route exact path="/academics" element={<Cont/>}/>
          <Route exact path="/projects" element={<Cont/>}/>
          <Route exact path="/social" element={<Cont/>}/>

        </Routes>
 
      </mybar>
      

            
    </div>
  );
}

export default App;
