import React from 'react';
import "./Footer.css";
import Flip from "react-reveal/Flip";

export default function Footer() {

  const date = new Date();

  return (
    <>
    <Flip duration="1900" cascade left>
    <div className="footer">
      <img className="logo-footer" src="../images/senor_taco.png" alt="logo"></img>
      <p className="address-footer foot-txt">9213 Valley View St, Cypress CA 90630</p>
      <p className="tele-footer foot-txt">(714) 828-8650</p>
      <p className="copyright foot-txt">© {date.getFullYear()} Senor Taco</p>
    </div>
    </Flip>

    </>
  )

}
