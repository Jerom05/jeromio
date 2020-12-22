import React from 'react'
import './home.css'
import pic from './jerom.jpg'
const Home = ()=>{
    return(
        <div className='banner'>
            <div className='home desktop'>
                <div className='content-home'>
                    <h2>Hello</h2>
                    <h3><span>I am </span>Jeromio Ghagra</h3>
                    <h5>I am a full stack web developer , I am working with nodejs and react js framework</h5>
                </div>
                <div className="image-container">
                    <div className='profile-pic'>
                        <img src ={pic} alt='jerom' />
                    </div>

                </div>
            </div>

            <div className='home mobile'>
                <div className="image-container">
                    <div className='profile-pic'>
                        <img src ={pic} alt='jerom' />
                    </div>
                </div>
                <div className='content-home'>
                    <h2>Hello</h2>
                    <h3><span>I am </span>Jeromio Ghagra</h3>
                    <h5>I am a full stack web developer , I am working with nodejs and react js framework</h5>
                </div>
            </div>
        </div>
        

    )
}
export default Home


