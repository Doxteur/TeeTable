import React from 'react';
import { IoCloseCircleOutline } from 'react-icons/io5';

function Header() {
  return (
    <div className='bg-primary h-16 w-screen'>
      <ul className='flex'>
        <li className='bg-tertiary text-white px-2 m-1 py-4  header-selected flex rounded-t-md'>
          Planets <IoCloseCircleOutline className='mt-1 ml-1 hover:cursor-pointer hover:color-white"' />
        </li>
        <li className='bg-primary text-white px-2 m-1 py-4 flex rounded-t-md hover:bg-secondary hover:cursor-pointer'>
          Planets <IoCloseCircleOutline className='mt-1 ml-1 hover:cursor-pointer hover:color-white"' />
        </li>
      </ul>
    </div>
  );
}

export default Header;
