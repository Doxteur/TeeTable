import React from 'react';

import { FaDatabase } from 'react-icons/fa';
//GrCatalog
import { AiFillDiff } from 'react-icons/ai';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/images/logo.png';

import Sidebar_table from './Sidebar_Composant/Sidebar_table';
import Sidebar_connexions from './Sidebar_Composant/Sidebar_connexions';
import { FiGrid } from 'react-icons/fi';
import { GrTest } from "react-icons/gr";

function Sidebar() {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate('/login');
  };

  const location = useLocation();
  const page = location.pathname;

  return (
    <>
      {/* ========== MAIN SIDEBAR ========== */}
      <aside
        id='hs-pro-sidebar'
        className='hs-overlay [--auto-close:lg]
    hs-overlay-open:translate-x-0
    -translate-x-full transition-all duration-300 transform
    w-[20.5rem] h-full
    hidden
    fixed inset-y-0 start-0 z-[60]
    bg-white
    lg:block lg:translate-x-0 lg:end-auto lg:bottom-0
    dark:bg-primary'
        tabIndex={-1}
        aria-label='Sidebar'
      >
        <div className='h-full flex'>
          {/* Nav Sidebar */}
          <div className='w-16 flex flex-col h-full max-h-full'>
            <div className='p-4 flex flex-col items-center'>
              {/* Logo */}
              <a
                className='flex-none rounded-md text-xl inline-block font-semibold focus:outline-none focus:opacity-80'
                href='../../pro/analytics/index.html'
                aria-label='Preline'
              >
                <svg
                  className='w-7 h-auto'
                  width={36}
                  height={36}
                  viewBox='0 0 36 36'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M18.0835 3.23358C9.88316 3.23358 3.23548 9.8771 3.23548 18.0723V35.5832H0.583496V18.0723C0.583496 8.41337 8.41851 0.583252 18.0835 0.583252C27.7485 0.583252 35.5835 8.41337 35.5835 18.0723C35.5835 27.7312 27.7485 35.5614 18.0835 35.5614H16.7357V32.911H18.0835C26.2838 32.911 32.9315 26.2675 32.9315 18.0723C32.9315 9.8771 26.2838 3.23358 18.0835 3.23358Z'
                    className='fill-green-600 dark:fill-green-500'
                    fill='currentColor'
                  />
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M18.0833 8.62162C12.8852 8.62162 8.62666 12.9245 8.62666 18.2879V35.5833H5.97468V18.2879C5.97468 11.5105 11.3713 5.97129 18.0833 5.97129C24.7954 5.97129 30.192 11.5105 30.192 18.2879C30.192 25.0653 24.7954 30.6045 18.0833 30.6045H16.7355V27.9542H18.0833C23.2815 27.9542 27.54 23.6513 27.54 18.2879C27.54 12.9245 23.2815 8.62162 18.0833 8.62162Z'
                    className='fill-green-600 dark:fill-green-500'
                    fill='currentColor'
                  />
                  <path
                    d='M24.8225 18.1012C24.8225 21.8208 21.8053 24.8361 18.0833 24.8361C14.3614 24.8361 11.3442 21.8208 11.3442 18.1012C11.3442 14.3815 14.3614 11.3662 18.0833 11.3662C21.8053 11.3662 24.8225 14.3815 24.8225 18.1012Z'
                    className='fill-green-600 dark:fill-green-500'
                    fill='currentColor'
                  />
                </svg>
              </a>
              {/* End Logo */}
            </div>
            {/* Content */}
            <div className='h-full px-4 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500'>
              {/* Nav */}
              <ul className='flex flex-col items-center space-y-1'>
                {/* Item */}
                <li className='hs-tooltip [--placement:right] inline-block'>
                  <Link
                    className='hs-tooltip-toggle flex justify-center items-center gap-x-3 size-10 text-sm text-gray-800 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-300 dark:focus:bg-neutral-700'
                    to='/connexions'
                  >
                    <FaDatabase size={20} color={page === '/connexions' ? '#4ADE80' : 'white'} />
                  </Link>
                </li>

                {/* End Item */}
                {/* Item */}
                <li className='hs-tooltip [--placement:right] inline-block'>
                  <Link
                    className='hs-tooltip-toggle flex justify-center items-center gap-x-3 size-10 text-sm text-gray-800 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-300 dark:focus:bg-neutral-700'
                    to='/'
                  >
                    <FiGrid size={20} color={page === '/' ? '#4ADE80' : 'white'}/>
                  </Link>
                </li>
                <li className='hs-tooltip [--placement:right] inline-block'>
                  <Link
                    className='hs-tooltip-toggle flex justify-center items-center gap-x-3 size-10 text-sm text-gray-800 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-300 dark:focus:bg-neutral-700'
                    to='/test'
                  >
                    <GrTest size={20} color={page === '/test' ? '#4ADE80' : 'white'}/>
                  </Link>
                </li>
                {/* End Item */}
              </ul>
              {/* End Nav */}
            </div>
          </div>
          {/* End Nav Sidebar */}
          {/* Secondary Sidebar */}
          {page === '/' ? <Sidebar_table /> : <Sidebar_connexions/>}
          {/* End Secondary Sidebar */}
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
