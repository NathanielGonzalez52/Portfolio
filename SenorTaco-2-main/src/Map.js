import React from 'react';
import "./Map.css";
import Fade from 'react-reveal/Fade';


export default function Map() {
  return (
<>
<Fade delay="100" duration="1200" left cascade>
  <h2 className="head-footer">Hungry Yet?</h2>
  <h2>What Are You Waiting For?</h2>
  <div className="map-holder"></div>
</Fade>
</>
  )
}
