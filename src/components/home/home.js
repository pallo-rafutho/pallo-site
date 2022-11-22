import React from 'react'
import './home.css'
import pallo from './pallo.jpg'


function Home() {
  return (

    <div className="Home">
      <imag>
            
        <img src={pallo} className="images" alt="pal"/>

      </imag>
      <note  className="notes">
        Note :I am a keen software developer. The content, and look of this website will change without notice
        if you are a developer and have any advice for my site let me know.
      </note>
      

    </div>
    );
}
    
export default Home;