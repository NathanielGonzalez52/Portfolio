"use client";
import "./welcome.css"
import React, { useState, useEffect } from 'react';
import Type from "./typing";
import Fade from "react-reveal/Fade"


export default function welcome() {

  const [timer, setTimer] = useState(false);
  
  useEffect(() => {
    setTimeout(() => {
      setTimer(true);
    }, 1050)
  }, [])

  return (
    <>
    <div className="landing">
      <Type/>
      <Fade delay={7000} duration={2000}>
        <button className="projects-btn">Projects</button>
      </Fade>
         </div>
    
    </>
  )
}
