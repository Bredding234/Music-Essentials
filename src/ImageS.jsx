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

  // if (!Array.isArray(slides) || slides.length <= 0) {
  //   return null;
  // }

  return (
    <section className='slider relative w-full'>
      <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} style={{left: '5%', top:'40%'}} />
      <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide}style={{right: '5%', top:'40%'}} />
      {SliderData.map((slide, index, imgUrl) => {
        return (
          <div 
          className={`${index === current ? 'slide active' : 'slide'} px-52`}
            key={index}
            style={{height: '100%',}}
          >
            {index === current && (
                  <>
              <div >

              <img src={slide.image}  alt='slider image' className='w-full max-h-96 rounded-lg'  />
            <Link to={slide.WebsiteLink}>  <h2 className='text-4xl text-center font-semibold uppercase pt-2'> {slide.title} </h2>    </Link>
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
