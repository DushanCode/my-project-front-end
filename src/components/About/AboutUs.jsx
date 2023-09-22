import React from 'react';
import { chatIcon, ideaBulb, loudSpeaker, pencil } from '../../assets';

const AboutUs = () => {
  return (
    <div className='lg:flex flex-wrap'>
      <div className='flex-[0_0_25%] lg:max-w-[25%] bg-[#3d8c87] h-[650px]'>
        <div className='pt-20 text-center px-16'>
          <img src={ideaBulb} alt='' className='w-[50px] mx-auto' />
          <h3 className='text-xl uppercase text-[#feb2b2] font-bold tracking-widest mt-10'>
            Vision
          </h3>
          <p className='mt-5 text-[#feb2b2]'>
            Our vision is an educated,
            <br />
            connected community of readers, learners, doers, and dreamers.
          </p>
        </div>
      </div>
      <div className='flex-[0_0_25%] lg:max-w-[25%] bg-[#8b847a] h-[650px]'>
        <div className='pt-20 text-center px-16'>
          <img src={loudSpeaker} alt='' className='w-[100px] mx-auto' />
          <h3 className='text-xl uppercase text-[#41c890] font-bold tracking-widest mt-10'>
            Mission
          </h3>
          <p className='mt-5 text-[#feb2b2]'>
            We transform lives by educating, inspiring and connecting people and
            build the largest and most accessible library connecting with their
            audience.
          </p>
        </div>
      </div>
      <div className='flex-[0_0_25%] lg:max-w-[25%] bg-[#cecdc9] h-[650px]'>
        <div className='pt-20 text-center'>
          <img src={pencil} alt='' className='w-[80px] mx-auto' />
          <h3 className='text-xl uppercase text-[#41c890] font-bold tracking-widest mt-10'>
            values
          </h3>
          <p className='mt-5'>
            <span className='mb-3'>
              Education - We Learn and teach every day
            </span>
            <br />
            <span className='mb-3'>Excellence - We exceed expectations</span>
            <br />
            <span className='mb-3'>
              Freedom - We defend the right to read and to know. We are free and
              open to all.
            </span>
            <br />
            <span className='mb-3'>
              Diversity - We serve everyone. We find strength in celebrating our
              differences.
            </span>
            <br />
            <span className='mb-3'>
              Innovation - We dream big. Anything is possible.
            </span>
            <br />
            <span className='mb-3'>Passion - We love what we do.</span>
          </p>
        </div>
      </div>
      <div className='flex-[0_0_25%] lg:max-w-[25%] bg-[#58dfd9] h-[650px]'>
        <div className='pt-20 text-center px-16'>
          <img src={chatIcon} alt='' className='w-[50px] mx-auto' />
          <h3 className='text-xl uppercase text-[#feb2b2] font-bold tracking-widest mt-10'>
            community
          </h3>
          <p className='mt-5'>
            We work with our community to improve our lives
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
