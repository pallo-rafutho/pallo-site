
import React from 'react';
import './Highschool.css'
import matric from './matric.png'
import logo from './marylogo.png'
import build from './maryvale.png'
// import linked from './linked.png'


function Con() {
  return (
    <div className="Con">
      
      
        <a
          className='hlink'
          href="https://www.maryvalecollege.co.za/home/home.php"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>highschool page</h2>
        </a>
        <pics>
          <img src={logo} className="HSlogo" alt="HSL"/>
          <img src={build} className="Highs" alt="HSbuild"/>
        </pics>
        <results>
          <img src={matric} className="matric" alt="matric-cert"/>
        </results>
        
      
    </div>
  );
}

export default Con;
