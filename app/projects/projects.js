import React, { useContext } from 'react';
import { ThemeContext } from '../dark';
import Toggle from "../toggle";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function projects() {

    const settings = {
        arrows: true,
        dots: true,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        speed: 3000,
        autoplaySpeed: 6000,
        fade: true,
        adaptiveHeight: false
      };

  return (
    <>
        <div className="projects-home">
            <h1 className="head">Projects</h1>
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
                {/* <div className="pic-container">
                    <img className="pic" alt="art" src="../luna_images/anubis.jpg"></img>
                </div>
                <div className="pic-container">
                    <img className="pic" alt="art" src="../luna_images/techno_girl.jpeg"></img>
                </div>
                <div className="pic-container">
                    <img className="pic" alt="art" src="../luna_images/white_dragon.jpg"></img>
                </div> */}
                
            </Slider>
        </div>
    </>
  )
}
