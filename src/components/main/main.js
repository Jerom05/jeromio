import React from 'react'
import Home from '../banner/home'
import About from '../about/about'
import Skills from '../skills/skills'
import Footer from '../footer/footer'
import './main.css'
const Main = ()=>{
    return(
        <div className='main-content'>
            <Home />
            <About />
            <Skills />
            <Footer />
        </div>
    )
}

export default Main