
import React from 'react';
import './Highschool.css'

import lynd from './lynd.png'
import build from './maryvale.png'
// import linked from './linked.png'


function Con() {
  return (
    <div className="Con">
      
      <hp>Primary school</hp>
      <h3>Lyndhurst Primary School, Johannesburg North</h3>
      <lyn className="lynd">
        <store>Best years of my life. Started my Grade R in 2006.
           My responsibilities in life then was to eat, play, eat, play, and do it again.
            However, somebody convinced me to grow up'. This resulted in me leaving the 'good life' behind.
            If somebody yells at you and say 'grow up';
           ignore that person because he/she wants to cheat you out of your good life.
           .I completed my Grade 7 in 2014.

          <a
          className='hlink'
          href="https://web.facebook.com/profile.php?id=100064627668054"
          target="_blank"
          rel="noopener noreferrer"
          >
          <h2>Lyndhurst Primary</h2>
          </a>
        </store>
        <img src={lynd} className="prim" alt="HSbuild"/>
      </lyn>
      
      <hp>Highschool</hp>
      <h3>Maryvale college</h3>
      <mary className="vale">
        <mstore> I started my secondary education in 2014 and completed my Matric in 2019.
          My major subjects were Maths (6), Physics (5), and English (4). 
          I also did Accounting, Life Science, Afrikaans and Life Orientation. My average APS is 33.

          <a
          className='hlink'
          href="https://www.maryvalecollege.co.za/home/home.php"
          target="_blank"
          rel="noopener noreferrer"
          >
            <h2>highschool page</h2>
          </a>
        </mstore>
        <img src={build} className="Highs" alt="HSbuild"/>
      </mary>
        
        
        
        
      
    </div>
  );
}

export default Con;
