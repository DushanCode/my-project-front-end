import React from 'react';

import { phone, android, apple, emoji1, emoji2 } from '../../assets';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='container mx-auto'>
      <div className='grid grid-cols-2 lg:grid-rows-3 grid-rows-6 py-10 h-[60%]'>
        <div className='lg:row-span-3 row-span-2 lg:row-start-1 row-start-2  row-end-3 mr-10'>
          <div className='relative before:bg-ashBg before:w-full before:h-[90%] before:absolute lg:before:top-[50%] before:top-[-30px] lg:before:left-0 before:left-[-40px] lg:before:translate-y-[-50%] before:z-[1] before:rounded-[100%]'>
            <img
              src={phone}
              alt=''
              className='relative lg:h-[50%] h-[80%] lg:w-[50%] w-[80%] z-[2] mx-auto mt-10'
            />
          </div>
        </div>
        <div className='lg:col-start-2 col-start-1 col-end-3 row-start-1 lg:mb-0 mb-10'>
          <h2 className='text-3xl font-bold text-[#908573]'>
            Welcome to MyLibrary !
          </h2>
          <p className='text-sm text-[#908573]'>
            Entire world is{' '}
            <a href='dsad' className='text-[#c39267]'>
              In your pocket now!
            </a>
          </p>
        </div>
        <div className='col-start-2 col-end-3 row-start-2 col-span-2'>
          <p className='text-sm text-[#908573]'>Borrow Sinhala and English</p>
          <div className='relative lg:flex flex-row  mt-5'>
            <div className='relative'>
              <div className='border-4 rounded-full w-[100px] h-[100px] border-[#c39267] flex justify-center items-center'>
                <span className='text-[#c39267]'>Ebooks</span>
              </div>
            </div>
            <div className='relative w-[100px] h-[100px]'>
              <div className='absolute border-4 rounded-full w-[100px] h-[100px] border-[#c39267] flex justify-center items-center lg:left-[-20px] lg:top-0 top-[-20px]'>
                <span className='text-[#c39267] w-[30px]'>Audio Books</span>
              </div>
            </div>
            <div className='relative w-[100px] h-[100px]'>
              <div className='absolute border-4 rounded-full  border-[#c39267] w-[100px] h-[100px] flex items-center lg:left-[-40px] lg:top-0 top-[-40px]'>
                <span className='text-[#c39267] pl-[18px] text-sm'>
                  Magazines
                </span>
              </div>
            </div>
            <div className='relative w-[100px] h-[100px]'>
              <div className='absolute border-4 rounded-full  border-[#c39267] w-[100px] h-[100px] flex items-center lg:left-[-60px] lg:top-0 top-[-60px]'>
                <span className='text-[#c39267] pl-[18px] text-sm text-center'>
                  E<br />
                  newspapers
                </span>
              </div>
            </div>
            <img
              src={emoji1}
              alt=''
              className='absolute lg:block hidden w-[40px] h-[40px] -rotate-90 top-0 left-[-10px]'
            />
            <img
              src={emoji2}
              alt=''
              className='absolute lg:block hidden w-[40px] h-[40px] -rotate-90 bottom-[-10px] left-[25%]'
            />
          </div>
        </div>
        <div className='lg:pt-10 row-start-3'>
          <h4 className='text-lg text-[#908573]'>
            Download MyLibrary app today
          </h4>

          <div className='flex mt-3 gap-5'>
            <Link to='/'>
              <img src={android} alt='' className='h-[40px] w-[120px]' />
            </Link>
            <Link to='/'>
              <img src={apple} alt='' className='h-[40px] w-[100px]' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
