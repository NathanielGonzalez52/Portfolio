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
      <Fade delay={7000}>
        <a href="../my-app/SenorTaco-2-main/index.js" className="test">test</a>
        <button className="projects-btn">Projects</button>
      </Fade>
      {/* <img alt="Missing" src="../images/ng.png"></img> */}
      <img alt="Missing" src="../SenorTaco-2-main/images_st/1.png"></img>

    </div>
    
    </>
  )
}
