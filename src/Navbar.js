import React from "react";
import logo from './logo.png'
import './Navbar.css'
import {Link} from "react-router-dom";



function Navbar() {
    return (
        <ul>
            <h1><img src={logo} className="App-logo" alt="logo"/> Pallo Rafutho</h1>
            
            <bpm className="linkss">
            
            <Link to="/" className="linkme">Home</Link>
            <Link to="/about me" className="linkme">About</Link>
            <Link to="/academics" className="linkme">Academic journey</Link>
            <Link to="/projects" className="linkme">Projects</Link>
            <Link to="/social" className="linkme">Social</Link>
            </bpm>
            
        </ul>
    );
}

export default Navbar;