"use client";

import React from 'react'
import "./page.css";
import Navbar from "../navbar";
import Fade from "react-reveal/Fade";


export default function contact() {
  return (
    <>
    <Navbar />
    <Fade duration={1500}>
    <div className="envelope">
            <img className="mail" src="../../images/mail.png"></img>
    </div>
    <div className="contact">
        <div className="contact-details">
            <h1>Have An Idea?</h1>
            <h3 className="detail">I would love to hear about it.</h3>

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
                    <textarea 
                    id="freeform" 
                    name="freeform" 
                    rows="8" 
                    cols="30"
                    placeholder="Please tell me a bit about yourself or the organization you represent"></textarea>
                    <input 
                    className="send" 
                    type="submit" 
                    value="Submit"></input>
                {/* </div> */}
            </form>
        </div>
    </div>
    </Fade>
      </>
  )
}

{/* <a href="https://www.flaticon.com/free-icons/contact" title="contact icons">Contact icons created by Freepik - Flaticon</a> */}