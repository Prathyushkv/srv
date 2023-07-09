import React from 'react'
import './Register.css'
const Register = () => {
  return (
    <div>
        <div>
            <div class="left">
                <h3>Join Us</h3>
                <pre>
                    Subscribe Easy Tutorials Youtube Channel to
                                watch more video
                </pre>
                <button class="join">
                    About Us
                </button>
            </div>
    <div class="one"> 
        <div class="two">
          <h2>Register Here</h2>
          <input type="text" placeholder="Name" class="tx1" /><br />
          <input type="text" placeholder="Username" class="tx2" /><br />
          <input type="email" placeholder="Email" class="tx3" /><br />
          <input type="password" placeholder="Password" class="tx4" /><br />
          <div class="three">
            <button class="bt1">Register</button>
          </div>
        </div>
    </div>
  </div> 
    </div>
  )
}

export default Register