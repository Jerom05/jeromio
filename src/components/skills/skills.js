import React from 'react'
import './skills.css'
import javascript from './java-script.jpg'
import reactjs from './reactjs.png'
import express from './express.jpg'
import mongodb from './mongodb.png'
import nodejs from './nodejs.png'
import html from './html.png'
import css from './css.png'

const Skills = ()=>{
    return(
        <div className='skills-container'>
            <div className="skills">
                <div className='content'>
                  <h1>My skills</h1>
                </div>

                <div className='skills-list'>

                  <div className='item'>
                      <div className='item-content'>
                          <h3 className='item-name'>JavaScript</h3>
                          <img src ={javascript} alt='item'/>
                      </div>
                  </div>

                  <div className='item'>
                      <div className='item-content'>
                          <h3 className='item-name'>Node Js</h3>
                          <img src ={nodejs} alt='item'/>
                      </div>
                  </div>

                  <div className='item'>
                      <div className='item-content'>
                          <h3 className='item-name'>Express Js</h3>
                          <img src ={express} alt='item'/>
                      </div>
                  </div>

                  <div className='item'>
                      <div className='item-content'>
                          <h3 className='item-name'>React Js</h3>
                          <img  src ={reactjs} alt='item'/>
                      </div>
                  </div>

                  <div className='item'>
                      <div className='item-content'>
                          <h3 className='item-name'>Mongodb</h3>
                          <img src ={mongodb} alt='item'/> 
                      </div>

                  </div>

                  <div className='item'>
                      <div className='item-content'>
                          <h3 className='item-name'>CSS</h3>
                          <img src ={css} alt='item'/> 
                      </div>

                  </div>

                  <div className='item'>
                      <div className='item-content'>
                          <h3 className='item-name'>HTML</h3>
                          <img src ={html} alt='item'/>
                      </div>
                  </div>

                </div> 
            </div>
        </div>
        
    )
}


export default Skills



