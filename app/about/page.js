import React from 'react'
import Navbar from "../navbar";
import "./page.css";


export default function about() {
  return (
    <>
    <Navbar/>
        <div className="about txt">
            <h1 className="about-me txt">About Me</h1>
            <div className="bio">
                <img className="icon left" src="../../images/analysis.png"></img>
                <div className="one txt">
                    Hello! My name is Nathaniel Gonzalez and I am currently an analytical chemist for LGM Pharmaceuticals with experience in complex scientific examinations of sensitive materials, which require a meticulous and interpretive mind. One aspect that I love about my job is the opportunity to constantly learn new techniques and concepts to add to my skillset. 
                    I am an eternal seeker of knowledge and it drives me to be the most successful version of myself that I can be. My passion for learning and acquiring new skills has made me a valuable asset in the lab. 
                    {/* I am able to test a wide variety of materials using a broad range of complex instruments under strict deadlines to ensure patients are given access to their medication as soon as possible, such as chemotherapy products which are incredibly time sensitive due to their involvement in treating cancer.  */}
                </div>
                <img className="icon right" src="../../images/app-development.png"></img>
                <div className="two txt">
                    While I enjoy my work in chemistry, I have discovered a strong passion in web development and I wish to pursue it as a career. I have plunged deep into the world of computer science and have been practicing my craft every day. One aspect of programming that intrigues me is the seemingly limitless versatility of code and the fact that it can be done nearly anywhere. While I started coding with Python, I moved on to a focus on web development using the following technologies: JavaScript, HTML5, CSS, and React. 
                </div>
                <img className="icon left" src="../../images/web-development.png"></img>
                <div className="third txt">
                    Web Development appeals to me because it is incredibly diverse and allows for a bit of self expression and creativity. Furthermore, it gives me a wide option of career choices and the potential to create my own projects and materialize my own dreams.
                </div>
            </div>
        </div>
    </>
  )
}

