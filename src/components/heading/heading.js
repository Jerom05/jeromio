import React from 'react'
import './heading.css'

const Heading =()=>{
    return(
        <header>
        <div className="content">
          <nav class="desktop">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li><a href="#">Home</a></li>
          
            </ul>
          </nav>
          <nav className="mobile">
            <ul>
                
            </ul>
          </nav>
        </div>
      </header>
    )
}

export default Heading
/*
<li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Projects</a></li>
                      <li><a href="#">Projects</a></li>
*/
