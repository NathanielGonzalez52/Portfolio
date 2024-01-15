import React from 'react'
import "./page.css";
import Navbar from "../navbar";


export default function contact() {
  return (
    <>
    <Navbar />
    <div className="contact">
        <div className="envelope">
            <img className="mail" src="../../images/mail.png"></img>
        </div>
        <div className="contact-details">
            <h1>Contact Me</h1>
            <h3 className="detail">I would love to hear about your dream website.</h3>
            <h3>Let's build something together.</h3>
            <br></br>
            <form className="contact-me block">
                <label htmlFor="frm-email"> 
                    <input
                    id="frm-email"
                    placeholder="Your Email Address"
                    type="email"
                    name="email"
                    autoComplete="email"
                    required
                    />
                </label>
                {/* <div className="connect"> */}
                    <label className="connect"></label>
                    <textarea 
                    id="freeform" 
                    name="freeform" 
                    rows="14" 
                    cols="60"
                    placeholder="Please tell me a bit about yourself or the organization you represent"></textarea>
                    <input 
                    className="send" 
                    type="submit" 
                    value="Submit"></input>
                {/* </div> */}
            </form>
        </div>
    </div>
      </>
  )
}

{/* <a href="https://www.flaticon.com/free-icons/contact" title="contact icons">Contact icons created by Freepik - Flaticon</a> */}