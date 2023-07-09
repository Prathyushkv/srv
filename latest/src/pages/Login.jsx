import React from 'react'
import { useState } from 'react'
import './Login.css'
const Login = () => {
const [passwordShown,setPasswordShown]=useState(false);
const pswd=()=>{
    setPasswordShown(!passwordShown);
}
  return (
    <div>
        <form>
            <div class="form">
                <h2 class="login">Login</h2>
                <label for="email" class="em">Email</label><br />
                <input type="text" placeholder="Enter email" class="ema" /><br />
                <label for="pwd" class="pd">Password</label><br />
                <input type={passwordShown ? "text" : "password"} placeholder="Enter password" class="pda" />
                <div class="show">
                    <input type="checkbox" onClick={pswd} id="showPassword" />
                    <label for="showPassword">Show password</label>
                </div>
                <button class="sgn">SIGN IN</button>
                <div class="forgot">
                    Forgot <span class="user"><a href="" class="user1">Username </a></span>/ <span class="psd"><a href="" class="psd1">Password? </a></span>
                </div>
                <div class="dont">
                    Don't have an account? <span class="sign"><a href="./Register" class="sign1">Sign up</a></span>
                </div>    
            </div>
        </form>
    </div>
  )
}

export default Login