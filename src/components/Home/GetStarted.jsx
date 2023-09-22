import React from 'react';

import { phone3 } from '../../assets';

const GetStarted = () => {
  return (
    <div className='text-center py-10 bg-pinkBg'>
      <div className='container mx-auto'>
        <h2 className='text-3xl font-bold text-[#529d96]'>
          How to get started with MyLibrary
        </h2>
        <div className='mt-10 py-10 yellow-gradient'>
          <div className='flex'>
            <div className='flex-[0_0_50%] max-w-[50%]'>
              <img src={phone3} alt='' className='mx-auto' />
            </div>
            <div className='flex-[0_0_50%] max-w-[50%]'>
              <div className='float-left pt-10'>
                <div className='text-left mb-10'>
                  <h4 className='font-bold text-xl'>
                    <span className='text-lg mr-3'>1 / </span>Download the
                    mobile application
                  </h4>
                  <p className='mt-5'>
                    Go to Playstore or App store and search for mylibrary
                    application
                  </p>
                </div>
                <div className='text-left mb-10'>
                  <h4 className='font-bold text-xl'>
                    <span className='text-lg mr-3'>2 / </span>Login
                  </h4>
                  <p className='mt-5'>
                    Provide the required information and get registered. You
                    need to authenticate your mobile number and email id.
                  </p>
                </div>
                <div className='text-left mb-10'>
                  <h4 className='font-bold text-xl'>
                    <span className='text-lg mr-3'>3 / </span>Get Membership
                  </h4>
                  <p className='mt-5'>
                    You have 3 month trail period and after that need to get
                    paid member ship.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
