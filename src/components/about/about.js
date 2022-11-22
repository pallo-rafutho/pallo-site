
import React from 'react'
import git from './git.png'
import linked from './linked.png'
import './about.css'



function About() {
  return (
    <div className="About">
    
    <conta className="Con">
      <h1>Pallo Rafutho</h1>
      <h5 className='text-light'>University Graduate</h5>
      <links>
        <a
          
          href="https://github.com/pallo-rafutho"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={git} className="git" alt="gitlogo"/> 
        </a>
        <a 
          href="https://www.linkedin.com/in/pallo-rafutho-68626a250/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linked} className="linked" alt="linklogo"/>
          
        </a>
      </links>
    </conta>

      <mystory className="aboutme">
          
        <story>
          I am Pallo Tshepang Rafutho, 21 years old, and a final year BSc Computing student at the University of South Africa.
          I was born and raised in Kew, a Johannesburg northern suburb.
          My interests are chess, golf, computer games, and travelling.
          My short term goal is to become a software developer.
          I have learned C++ and Python programing languages at the university. 
          I am looking forward to learning other programming languages. 
            
          I am also willing to work in any type of work environment, in South Africa and abroad. 
          I am available for work from December 2022. 
          My long term goal is to become a senior software engineer.
        </story>

      </mystory>
      
      <exper className="Exp"> 
      <titl>
        MY EXPERIENCE
      </titl>
      
      <expr>
        
        <article>c++: 3 years study</article>
        <article>python: 2 years study</article>
        <article>oracle sql: 1 year study</article>
        <article>javascript: 1 year study</article>
      </expr>
      </exper> 

    </div>
  );
}

export default About;
