import React, {useState} from 'react';
import Fade from "react-reveal/Fade";
import "./FoodDisplay.css";

export default function FoodDisplay(props) {

  const [isHovered, setIsHovered] = useState(false);

    return (


      
        <div className = "image-container" onMouseEnter={() => setIsHovered(true)}
           onMouseLeave={() => setIsHovered(false)}>
          <Fade cascade left>           
           <img className = "display" src={props.img} alt="food"></img>
          </Fade>
             {isHovered ? (
                 <div className="descriptor">
                   <h2>{props.name}</h2>
                   <p>{props.description}</p>
                 </div>
                 ): (<div className="descriptor-gone"></div>)}
        </div>
        // </Fade>
        )

}

