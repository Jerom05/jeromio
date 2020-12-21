import React from 'react'
import './heading.css'

const Heading =()=>{
    return(
        <header>
        <div className="content">
          <nav className="desktop">
            <ul>
                <li><a href="ex.com">Home</a></li>
                <li><a href="ex.com">About</a></li>
                <li><a href="ex.com">Projects</a></li>
            </ul>
          </nav>
          <nav className="mobile">
            <ul>
                <li><a href="ex.com">Home</a></li>
                <li><a href="ex.com">About</a></li>
                <li><a href="ex.com">Projects</a></li>
            </ul>
          </nav>
        </div>
      </header>
    )
}

export default Heading
