import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';

import { logo } from '../assets';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className='nav-gradient h-auto'>
      <div className='container mx-auto'>
        <div className='bg-navBg h-full flex justify-between items-center'>
          <Link to='/'>
            <div className='flex items-center'>
              <img src={logo} alt='' className='h-[100px]' />
              <span className='capitalize text-3xl font-black text-[#3d8f83]'>
                my libarary
              </span>
            </div>
          </Link>
          <ul className='lg:flex hidden mr-20 gap-20'>
            <li className='hover:bg-[#03fcf8]'>
              <Link to='/' className='uppercase font-bold text-sm '>
                Home
              </Link>
            </li>
            <li>
              <Link to='/blog' className='uppercase font-bold text-sm'>
                Blog
              </Link>
            </li>
            <li>
              <Link to='/about' className='uppercase font-bold text-sm'>
                About
              </Link>
            </li>
            <li>
              <Link to='/contact' className='uppercase font-bold text-sm'>
                Contact
              </Link>
            </li>
          </ul>
          <button
            className='lg:hidden block'
            onClick={() => setShowMenu(!showMenu)}
          >
            <AiOutlineMenu />
          </button>
          <div
            className={`${
              showMenu ? 'block' : 'hidden'
            } absolute top-[100px] h-full bg-navBg w-full z-10 text-center`}
          >
            <ul>
              <li className='mb-5'>
                <Link to='/' className='uppercase font-bold text-sm'>
                  Home
                </Link>
              </li>
              <li className='mb-5'>
                <Link to='/blog' className='uppercase font-bold text-sm'>
                  Blog
                </Link>
              </li>
              <li className='mb-5'>
                <Link to='/about' className='uppercase font-bold text-sm'>
                  About
                </Link>
              </li>
              <li className='mb-5'>
                <Link to='/contact' className='uppercase font-bold text-sm'>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
