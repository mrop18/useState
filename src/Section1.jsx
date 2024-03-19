import React, { useState } from 'react'
import './Section1.css'
import Data from './Data';
const Section1 = () => {

  // const Carousel = () => {
    const [active, setactive] = useState(0);
    const [trailerLink , setTrailerLink] = useState('');
    const [popup, setpopup] = useState(false)
  
    const nextSlide = () => {
      setactive((active + 1) % Data.length);
    };
  
    const preSlide = () => {
      setactive((active - 1 + Data.length) % Data.length);
    };

    const playTrailer = (event) => {
      event.preventDefault();
      setTrailerLink(Data[active].trailer);
      setpopup(true);
    }

    const closeVideo = () => {
      setpopup(false);
      setTrailerLink('');
    }

  return (
    <div className='mn-container'>
        <div className='muv-bg-con'>
            <div className="muv-img">
              <img src={Data[active].banner_img} />
            </div>
            <div className='t-tile'>
            </div>
            <div className='info-content'>
              <img className='movie-logo' src={Data[active].movielogo} />
              <div className="moviename">{Data[active].moviename}</div>
              <div className='row'>
                <div className='col'>{Data[active].year}</div>
                <div className='col'>{Data[active].duration}</div>
                <div className='col'>{Data[active].genere}</div>
              </div>
                <div className='trailer-btn'>
                  <div onClick={playTrailer} class="bt8"><a href="">WATCH TRAILER</a></div>
                </div>
            </div>
            <div className='muv-slider'>
              <div className="crsl-con">
                <div className="crsl">
                  <button onClick={preSlide} className="prev-btn">&#10094;</button>
                  <div className="slider" style={{ transform: `translateX(-${active * 100}%)` }}>
                    {Data.map((e) => (
                    <div key={e.id} className="slide">
                      <img src={e.image} />
                    </div>
                    ))}
                  </div>
                  <button onClick={nextSlide} className="next-btn">&#10095;</button>
                </div>
              </div>
            </div>
            {popup && (
              <div className='vid-popup'>
                <div className='popup-con'>
                  <button className='close-btn' onClick={closeVideo}>&times;</button>
                  <iframe src={`https://www.youtube.com/embed/${trailerLink}`} width="560" height="315" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen ></iframe>
                </div>

              </div>
            )}
        </div>
    </div>
  )
}

export default Section1