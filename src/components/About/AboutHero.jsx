import React from 'react';
import { aboutHero } from '../../assets';

const AboutHero = () => {
  return (
    <div className='bg-pinkBg'>
      <div className='container mx-auto'>
        <div className='py-10'>
          <h2 className='text-3xl font-bold pb-10'>
            Where the story begins...
          </h2>
          <hr className='w-[80%] mx-auto border-[#f58e45]' />

          <img src={aboutHero} alt='' className='my-10' />
          <p className='text-center'>
            My Library is a startup powered by Shengen pvt Ltd. My Library
            digital platform gives you access to millions of ebooks, audiobooks,
            magazines and e newspapers all in one place.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
