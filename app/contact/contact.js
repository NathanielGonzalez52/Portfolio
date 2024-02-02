import React, { useContext } from 'react';
import { ThemeContext } from '../dark';
import "./contact.css";
import Toggle from '../toggle';


export default function contact() {

    const {selectedTheme, toggleTheme} = useContext(ThemeContext);

    const light = "../../images/mail.png";

    const night = "../../images/mail_white.png";


  return (
    <>
    <Toggle />
    <div className="contact">
        <div className="envelope">
                <img className="mail" src={selectedTheme==="dark" ? night : light}></img>
        </div>
            <div className="contact-details">
                <h1 className="head">Have An Idea?</h1>
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
                    {/* <div className="connect"> *delete */}
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
                    {/* </div> *delete */}
                </form>
            </div>
        </div>
        </>
  )
}
