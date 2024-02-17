import { Outlet, Link } from "react-router-dom";
import Accordion from './Accordion';
import './HeroPage.css'
import Logo from '../Assets/Netflix_Logo.png'
import Feature1 from '../Assets/feature-1.png'
import Feature2 from '../Assets/feature-2.png'
import Feature3 from '../Assets/feature-3.png'
import Feature4 from '../Assets/feature-4.png'
import ForWard from '../Assets/forwad.png'
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { VscGithub } from "react-icons/vsc";
import { FaRegCopyright } from "react-icons/fa6";


function HeroPage() {
  return (
    <>
      <div className='hero'>
        <nav>
          <img src={Logo} alt="" />
          <div className='nav-btn'>
            <select >

              <option value="english">  English</option>
              <option value="hindi"> हिन्दी</option>
            </select>
            <Link to='/login'>  <button type="button">Sign in</button> </Link>
          </div>
        </nav>
        <div className='hero-contant'>
          <div className='body-contant'>
            <h1>Unlimited movies, TV shows and more</h1>
            <h3> Watch anywhere. Cancel anytime.</h3>
            <p>Ready to watch? Enter your email to create or restart your membership.</p>
            <form className='add-email'>
              <input type="email" placeholder="Email address" required />
              <button type="submit">Get Started <img src={ForWard} /></button>
            </form>
          </div>
        </div>
      </div>
      <div className='line'></div>

      {/* ------------- Features 1 --------------- */}

      <div className='features'>
        <div className="row">
          <div className="text-col">
            <h1>Enjoy on your TV</h1>
            <p>
              Watch on smart TVs, PlayStation, Xbox, Chromecast,
              <br /> Apple TV, Blu-ray players and more.
            </p>
          </div>
          <div className="img-col">
            <img src={Feature1} alt="TV" />
          </div>
        </div>
      </div>
      <div className='line'></div>

      {/* ------------- Features 2 --------------- */}
      
      <div className='features'>
        <div className="row">
          <div className="img-col">
            <img src={Feature2} alt="TV" />
          </div>
          <div className="text-col">
            <h1>Download your shows <br /> to watch offline</h1>
            <p>
              Save your favourites easily and always have something to watch.
            </p>
          </div>
        </div>
      </div>
      <div className='line'></div>


      {/* ------------- Features 3 --------------- */}

      <div className='features'>
        <div className="row">
          <div className="text-col">
            <h1>Watch everywhere</h1>
            <p>
              Stream unlimited movies and TV shows on your <br /> phone, tablet, laptop, and TV.
            </p>
          </div>
          <div className="img-col">
            <img src={Feature3} alt="TV" />
          </div>
        </div>
      </div>
      <div className='line'></div>

      {/* ------------- Features 4 --------------- */}

      <div className='features'>
        <div className="row">
          <div className="img-col">
            <img src={Feature4} alt="TV" />
          </div>
          <div className="text-col">
            <h1>Create profiles for <br /> kids</h1>
            <p>
              Send children on adventures with their favourite characters in a space made just for them—free with your membership.
            </p>
          </div>
        </div>
      </div>

      <div className='line'></div>

      {/* ------------- Frequently Asked Questions --------------- */}

      <Accordion />

      <div className='line'></div>

      <footer className='hero-footer'>
        <div className='hero-footer-content'>

          <div className="row1">
            <p>Questions? Call <span>000-800-919-1694</span></p>
          </div>

          <div className="row2">

            <div>
              <p><a href="#">FAQ</a></p>
              <p><a href="">Cookie Preferences</a></p>
              <p><a href="">Privacy </a></p>
              <p><a href="">Speed Test </a></p>
            </div>

            <div>
              <p> <a href="#">Help Centre</a></p>
              <p><a href="#">Jobs</a></p>
              <p><a href="#">Cookie Preferences</a></p>
              <p><a href="#">Legal Notices</a></p>
            </div>

            <div>
              <p><a href="#">Account</a></p>
              <p><a href="#">Ways to Watch</a></p>
              <p><a href="#">Corporate Information</a></p>
              <p><a href="#">Only on Netflix</a></p>

            </div>

            <div>
              <p><a href="#">Media Centre</a></p>
              <p><a href="#">Terms of Use</a></p>
              <p><a href="#">Contact Us</a></p>
            </div>

          </div>

          <div className="row3">
            <select className='lan' >
              <option value="english">English</option>
              <option value="hindi">हिन्दी</option>
            </select>
          </div>

        </div>

        {/* ------------- MY Socail Media --------------- */}


        <ul className="social">
          <li> <a target="_blank" href="https://www.instagram.com/vikashverma04/"> <FaInstagram /></a></li>
          <li><a target="_blank" href="https://www.facebook.com/Vikashvermaa2/"><CiFacebook /></a> </li>
          <li><a target="_blank" href="https://www.linkedin.com/in/vikashverma2/"><CiLinkedin /></a></li>
          <li><a target="_blank" href="https://github.com/Vikashverma2"><VscGithub /></a></li>
        </ul>
        <div className='copyright'>
          <p><FaRegCopyright /> 2024 Vikash Verma. All Right Reserved.</p>
        </div>


      </footer>


    </>
  );
}

export default HeroPage;