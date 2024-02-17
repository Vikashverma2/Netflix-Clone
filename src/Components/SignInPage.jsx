import { Outlet, Link } from "react-router-dom";
import React from 'react'
import './SigninPage.css'
import Logo from '../Assets/Netflix_Logo.png'
import { FaRegCopyright } from "react-icons/fa6";

const SignInPage = () => {
  return (
    <div className='login-header'>
      <nav>
        <Link to='/'> <img src={Logo} alt="" /></Link>
      </nav>
      <div className="login-hero">
        <div className="login-card">
          <h1>Sign In</h1>
          <form>
            <input type="email" placeholder="Email or phone number" required />
            <input type="password" placeholder="Password" title="Your password must contain between 4 and 60 characters." required />
            <button type="submit">Sign In</button>
          </form>
<h2>OR</h2>
          <button className='sign-code' type="submit">Use a sign-in-code</button>
          <h6>Forgot password?</h6>
          <div className='remember-check'>
            <input type="checkbox" />
            <label> Remember me </label>
          </div>
          <div className='new-user'>
            <h3>New to Nerflix? <Link to='/'><p>Sign up now.</p></Link></h3>
          </div>
          <div className='learn-more'>
            <p>This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="">Learn More.</a></p>
          </div>
        </div>
      </div>

      <footer className='footer-card'>
        <div className='footer-content'>

          <div className="row1">
            <p>Questions? Call <span>000-800-919-1694</span></p>
          </div>

          <div className="row2">

            <div>
              <p><a href="#">FAQ</a></p>
              <p><a href="">Cookie Preferences</a></p>
            </div>

            <div>
              <p> <a href="#">Help Centre</a></p>
              <p><a href="#">Corporate Information</a></p>
            </div>

            <div>
              <p><a href="#">Terms of Use</a></p>
            </div>

            <div>
              <p><a href="#">Privacy</a></p>
            </div>

          </div>

          <div className="row3">
            <select className='lan' >
               
              <option value="english">English</option>
              <option value="hindi">हिन्दी</option>
            </select>
          </div>

</div>
        <div className='copyright'>
          <p><FaRegCopyright /> 2024 Vikash Verma. All Right Reserved.</p>
        </div>
      </footer>


    </div>
  )
}

export default SignInPage
