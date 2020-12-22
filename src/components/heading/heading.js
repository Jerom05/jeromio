import React from 'react'
import {Link } from 'react-router-dom'
import './heading.css'

const Heading =()=>{
    return(
        <header>
        <div className="content">
          <nav className="desktop">
            <ul>
                <Link className='li' to='/Home'>Home</Link>
                <Link className='li' to='/About'>About</Link>
                <Link className='li' to='/Project'>Projects</Link>
            </ul>
          </nav>
          <nav className="mobile">
            <ul>
            <Link className='li' to='/Home'>Home</Link>
                <Link className='li' to='/About'>About</Link>
                <Link className='li' to='/Project'>Projects</Link>
            </ul>
          </nav>
        </div>
      </header>
    )
}

export default Heading
