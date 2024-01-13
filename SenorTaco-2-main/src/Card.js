import React from "react";
import "./Card.css";
import Bounce from 'react-reveal/Bounce';

function Card(props) {
  return (
    <div className="card">
      <div className="top">
      <h3 className="review">{props.review}</h3>
      </div>
      <div className="bottom">
      <h2 className="heading name">{props.name}</h2>
        <img className="circle-img" src={props.img} alt="alt-image" />
      </div>
    </div>
  );
}

export default Card;
