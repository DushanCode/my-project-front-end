import React from 'react';

import { wa_logo, email_logo } from '../assets';

const Footer = () => {
  return (
      <div className='bg-footerBg h-[240px] relative'>
        <div className='container  mx-auto flex-row'>
          <div className='bg-footerBg mx-auto'>
            <div className='bg-footerBg justify-evenly  items-center flex  pb-20  pt-28 lg:gap-30 md:gap-10 flex-wrap'>

              <div className='flex items-center'>
                <img src={wa_logo} alt='' className='w-[16px] h-[16px]' />
                <span className='font-underline text-sm'>(+94) 00000000</span>
              </div>
              <div className='flex items-center '>
                <img src={email_logo} alt='' className='w-[16px] h-[16px]' />
                <span className='font-underline  text-sm'>mylibrary@library.com</span>
              </div>
              <div className='flex items-center '>
                <img src={email_logo} alt='' className='w-[16px] h-[16px]' />
                <span className='font-underline text-sm'>Facebook/234</span>
              </div>
              <div className='flex items-center '>
                <img src={email_logo} alt='' className='w-[16px] h-[16px]' />
                <span className='font-underline  text-sm'>Reserved by Ceylon Tech</span>
              </div>


            </div>

          </div>


          <div className='absolute bottom-[50px] right-[50px] pd-10'>

            <button className='px-10 py-3 bg-[#bea13b] rounded-md '>
              Let's Chat
            </button>
          </div>


        </div>
      </div>
  );
};

export default Footer;
