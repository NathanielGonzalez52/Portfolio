"use client";

import React, { useContext, Component } from 'react';
import "./projects.css";
import { ThemeContext } from '../dark';
import Toggle from "../toggle";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function projects() {

    var settings = {
        dots: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        infinite: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1 
            }
          }
        ]
      };


    // const settings = {
    //     arrows: false,
    //     dots: false,
    //     infinite: false,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     speed: 3000,
    //     autoplaySpeed: 6000,
    //     fade: true,
    //     adaptiveHeight: false
    //   };

  return (
    <>
        <div className="slider-cont">
          <Toggle />
          <h1 className="project-header"> Projects </h1>
          <div className = "center">
            <div className="react-slider">
              <div className = "slider-shape">
                <Slider {...settings}>
                  <div>
                    <img className="pic" alt="art" src="../../images/SenorTaco_1.png"></img>
                  </div>
                  <div>
                    <img className="pic" alt="art" src="../../images/SenorTaco_2.png"></img>
                  </div>
                  <div>
                    <img className="pic" alt="art" src="../../images/Luna.png"></img>
                  </div>
                </Slider>
              </div>
            </div>
        </div>
        </div>
    </>
    );
}
   

{/* <h1 className="head">Projects</h1>
<div className="slider-cont">
<div className ="slider">
<Slider {...settings}>
    <div className="pic-container">
        <img className="pic" alt="art" src="../../images/SenorTaco_1.png"></img>
    </div>
    <div className="pic-container">
        <img className="pic" alt="art" src="../../images/SenorTaco_2.png"></img>
    </div>
    <div className="pic-container">
        <img className="pic" alt="art" src="../../images/Luna.png"></img>
    </div>
</Slider>
</div>
</div> */}