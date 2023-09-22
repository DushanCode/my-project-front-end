import React from 'react';
import Slider from 'react-slick';
import { MdOutlineNavigateNext } from 'react-icons/md';

import { testimonials } from '../../data';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        color: 'white',
        fontSize: '40px',
        fontWeight: '400',
      }}
      onClick={onClick}
    >
      <MdOutlineNavigateNext />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        color: 'white',
        fontSize: '40px',
        fontWeight: '400',
        rotate: '180deg',
      }}
      onClick={onClick}
    >
      <MdOutlineNavigateNext />
    </div>
  );
}

const Testimonials = () => {
  const settings = {
    dots: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className='bg-blackBg text-white py-10'>
      <div className='container mx-auto px-10'>
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div className='text-center'>
              <h3 className='text-xl font-bold py-10'>{testimonial.name}</h3>
              <hr className='w-[100px] mx-auto mb-10' />
              <p>"{testimonial.comment}"</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
