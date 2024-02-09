import React, { useContext, useRef, useState } from 'react';
import { ThemeContext } from '../dark';
import "./contact.css";
import Toggle from '../toggle';
import emailjs from '@emailjs/browser';

export default function contact() {

    // const [blank, setBlank] = useState("");

    const form = useRef();


    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_2krsb5a', 'template_ab4xx14', form.current, {
          publicKey: 'OwaJQTeVw75i4srJp',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            console.log("message sent");
            // setBlank("");
            e.target.reset();
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };

    const {selectedTheme, toggleTheme} = useContext(ThemeContext);

    const light = "../../images/mail.png";

    const night = "../../images/mail_white.png";


  return (
    <>
    <div className = "total-contact">
        <Toggle />
        <div className = "contact">
            <div className="envelope">
                <img className="mail" src={selectedTheme==="dark" ? night : light}></img>
            </div>
            <div className="contact-details">
                    <h1 className="head">Have An Idea?</h1>
                    <h3 className="detail">I would love to hear about it.</h3>
                <form className="contact-me block" ref={form} onSubmit={sendEmail}>
                    <label>Name</label>
                    <input className="name" type="text" name="user_name" />
                    <label>Email</label>
                    <input id="frm-email" type="email" name="user_email" />
                    <label>Message</label>
                    <textarea id="freeform" className="freeform" name="message" />
                    <div className="send-button">
                        <input className="send" type="submit" value= "Send" />
                    </div>
                </form>
            </div>
        </div>
    </div>

    {/* <div className="total-contact">
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
                    </form>
                </div>
            </div>
        </div> */}
        </>
  )
}
