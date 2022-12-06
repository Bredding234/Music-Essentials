import React, { useState } from 'react';
import { SliderData } from '/src/SliderData.js';
import { useNavigate, Link } from 'react-router-dom';

import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
	
const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const history = useNavigate();

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className='slider'>
      <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} style={{left: '10%', top:'40%'}} />
      <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide}style={{right: '10%', top:'40%'}} />
      {SliderData.map((slide, index, imgUrl) => {
        return (
          <div
          onClick={() => history.push(slide.WebsiteLink)} 
          className={index === current ? 'slide active' : 'slide'}
            key={index}
            style={{height: '100%'}}
          >
            {index === current && (
                  <>
              <div >

              <img src={slide.image}  alt='travel image' className='image' style={{ width: '60%', height: '20%', position: 'relative' , left: '20%' }} />
            <Link to={slide.WebsiteLink}>  <h2 style={{position: 'absolute', top: '40%', right: '45%', color: 'white', fontSize: '40px'}}> {slide.title} </h2>    </Link>
                        </div>

              </>
            )}
            
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
