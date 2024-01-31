"use client";

import React from 'react'
import Navbar from "../navbar";
import "./page.css";
import Footer from "../footer";
import Fade from "react-reveal/Fade";
import DarkMode from "../dark";

export default function about() {
  return (
    <>
    <Navbar/>
    <Fade>
    <DarkMode />

        <div className="about txt">
            <h1 className="about-me head">About Me</h1>
            <div className="bio">
                {/* <img className="icon left" src="../../images/analysis.png"></img> */}
                <div className="one txt">
                    Hello! My name is Nathaniel Gonzalez and I am currently an analytical chemist for LGM Pharmaceuticals with experience in  scientific examinations of sensitive materials, which require a meticulous and interpretive mindset. One aspect that I love about my job is the opportunity to constantly learn new techniques and concepts; a passion that is also reflected in my personal life. I am curious by nature and I love to explore many different activities in hopes of finding a new hobby.
                    {/* I am able to test a wide variety of materials using a broad range of complex instruments under strict deadlines to ensure patients are given access to their medication as soon as possible, such as chemotherapy products which are incredibly time sensitive due to their involvement in treating cancer.  */}
                </div>
                {/* <img className="icon right" src="../../images/app-development.png"></img> */}
                <div className="two txt">
                    In fact, that is how I discovered my strong passion to program. On a whim, I took a "100 Days of Python" course on Udemy and became obssessed. I fell in love with the unusual combination of creativity and logic required to build projects and have been passionate about programming ever since. While I started coding with Python, I moved on to a focus on web development using the following technologies: JavaScript, HTML5, CSS, and React. 
                </div>
                {/* <img className="icon left" src="../../images/web-development.png"></img> */}
                <div className="third txt">
                    What I lack in experience, I make up with enthusiasm, determination, and persistence. Given the chance, I know I can help you achieve the website of your dreams. Not only that, but as a thanks for your trust I will build your website at no cost to you! Right now, building a positive reputation with potential clients is much more important to me than any monetary gain. Still not convinced? Feel free to shoot me message through my <a href="/contact">Contact Page</a> or feel free to send me an Email at dev@thenathanielgonzalez.com! I would love the chance to speak with you.
                </div>
                <h2>Thank you!</h2>
            </div>
        </div>
    </Fade>
        <Footer />
    </>
  )
}

