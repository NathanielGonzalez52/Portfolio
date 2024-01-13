import React from 'react'
import "./Landing.css"
import {Link} from "react-router-dom";
import {Link as ScrollLink} from 'react-scroll';
import Fade from "react-reveal/Fade";


export default function Landing() {
  return (
    <>
    <div className = "box">
      <Fade duration="1800">
        <div className = "logo-box">
          <img className = "logo" src="../images/senor_taco.png" alt="I no work"></img>
        </div>
        <div className = "hook">
          <h1>¡HECHO CON SABOR!</h1>
          <hr></hr>
          <h3>9213 Valley View St, Cypress CA 90630</h3>
          <div className = "info">
            <h4><i class="fa-solid fa-phone"></i> (714) 828-8650</h4>
            <div className = "hours">
            <h3><i class="fa-solid fa-clock"></i> Hours</h3>
            <h4>Sunday-Thursday: 8:00AM - 10:00PM</h4>
            <h4>Friday-Saturday: 8:00AM - 12:00AM</h4>
            </div>
            <div className = "socials">
              <a className="fb-site" href="https://www.facebook.com/pages/category/Fast-Food-Restaurant/Senor-Taco-165819833562758/"><i class="fa-brands fa-facebook fa-2x"></i></a>
              <a className="yelp-site" href="https://www.yelp.com/biz/se%C3%B1or-taco-cypress-2"><i class="fa-brands fa-yelp fa-2x"></i></a>
            </div>
          </div>
        </div>
        <ScrollLink
        activeClass="active"
        to="menu"
        spy={true}
        smooth={true}
        duration={550}
        className='nav-links'
        // onClick={closeMobileMenu}
        offset={0}
                  >
            <button className = "menu-button">
            <p className = "btn-text">Check Out Our Menu!</p>
          </button>
        </ScrollLink>
          {/* <a className = "menu-link" href="#menu"><button className = "menu-button">
            <p className = "btn-text">Check Out Our Menu!</p>
          </button></a> */}
        </Fade>

    </div>
    </>
  )
}
