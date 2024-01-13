import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import "./EmblaCarousel.css";
import Card from './Card.js';
import People from "./People.js";
import LightSpeed from 'react-reveal/LightSpeed';

const EmblaCarousel = () => {

  const [emblaRef, emblaApi] = useEmblaCarousel({infinite:true, loop:true, dragFree:false })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <>
    <LightSpeed right>
    <div className="embla">
    <h1>Some Words from Our Satisfied Customers!</h1>
    <div className="embla__viewport" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide"> 
          <Card 
            name={People[0].name}
            img={People[0].imgURL}
            review={People[0].review}
          />
          {/* <h4 className = "review">Food is delicious and service is amazing! 
          Super attentive and friendly!! The wet burrito is amazing!!!!! 
          Super delicious</h4>
          <img className = "slide-img profile-pic" src="../images/melissa.jpg"></img>
          <p>Melissa E.</p> */}
        </div>
        <div className="embla__slide">
        <Card 
            name={People[1].name}
            img={People[1].imgURL}
            review={People[1].review}
          />
        </div>
        <div className="embla__slide">
          <Card 
              name={People[2].name}
              img={People[2].imgURL}
              review={People[2].review}
            />
        </div>
      </div>
    </div>
  </div>
  <div className = "btn-box">
    {/* <button className="btn embla__prev" onClick={scrollPrev}> */}
      <i class="fa-solid fa-angles-left fa-3x btn embla__prev" onClick={scrollPrev}></i>
    {/* </button> */}
    {/* <button className="btn embla__next" onClick={scrollNext}> */}
      <i class="fa-solid fa-angles-right fa-3x btn embla__next" onClick={scrollNext}></i>
    {/* </button> */}
    </div>
</LightSpeed>
    </>
  )
}

export default EmblaCarousel;
