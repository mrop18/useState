import React, { useState } from 'react';
import Data from './Data'; 
import './Carousel.css'; 

const Carousel = () => {
  const [active, setactive] = useState(0);

  const nextSlide = () => {
    setactive((active + 1) % Data.length);
  };

  const preSlide = () => {
    setactive((active - 1 + Data.length) % Data.length);
  };

  return (
    <div className="crsl-con">
      <div className="crsl">
        <button onClick={preSlide} className="prev-btn">&#10094;</button>
        <div className="slider" style={{ transform: `translateX(-${active * 100}%)` }}>
          {Data.map((e) => (
            <div key={e.id} className="slide">
              <img src={e.image} />
              <div className="caption">{e.caption}</div>
            </div>
          ))}
        </div>
        <button onClick={nextSlide} className="next-btn">&#10095;</button>
      </div>
    </div>
  );
}

export default Carousel;
