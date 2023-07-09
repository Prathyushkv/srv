import React, { useEffect } from 'react'
import { useState } from 'react'
import image from '../assets/spotify.png'
import './Home.css'
const Home = () => {
    const [value,setValue]=useState(0)
  return (
    <div>
        <div class="bg">
        <div class="top">
          <img src={image} className="img" width="190px" height="40px" />
          <div class="premium">
            <input type="checkbox" id='check' />
            <label htmlFor="check" className='checkbtn'>Menu</label>
            <ul>
              <li><a href="">Premium</a></li>
              <li><a href="">Help</a></li>
              <li><a href="">Download</a></li>
              <li><a href="" class="no">|</a></li>
              <li><a href="./Register">Sign up</a></li>
              <li><a href="./Login">Log in</a></li>
            </ul>
          </div>
        </div>
        <div class="center">
          <h1 class="music">Music for everyone.</h1>
          <h6 class="million">Millions of songs. No credit card required.</h6>
          <button class="click" onClick={() =>setValue(value+1)}>GET SPOTIFY FREE</button>
          count:{value}
        </div>
      </div>
    </div>
  )
}

export default Home