import React from 'react';
import { IoMdGrid } from 'react-icons/io';

function Side_TableName() {
  return (
    <div className='flex flex-col gap-2'>
      <div className='flex items-center gap-x-2  ml-4 hover:cursor-pointer  transition-all '>
        <IoMdGrid color='#4ADE80' />
        <span className='text-white text-sm bg-gray-500 rounded-lg p-0.5'>Users</span>
      </div>
      <div className='flex items-center gap-x-2  ml-4 hover:cursor-pointer  transition-all'>
        <IoMdGrid color='#4ADE80' />
        <span className='text-white text-sm hover:bg-gray-500 hover:rounded-lg p-0.5'>Admin</span>
      </div>
      <div className='flex items-center gap-x-2  ml-4 hover:cursor-pointer  transition-all'>
        <IoMdGrid color='#4ADE80' />
        <span className='text-white text-sm hover:bg-gray-500 hover:rounded-lg p-0.5'>Role</span>
      </div>
      <div className='flex items-center gap-x-2  ml-4 hover:cursor-pointer  transition-all'>
        <IoMdGrid color='#4ADE80' />
        <span className='text-white text-sm hover:bg-gray-500 hover:rounded-lg p-0.5'>Clients</span>
      </div>
      <div className='flex items-center gap-x-2  ml-4 hover:cursor-pointer  transition-all'>
        <IoMdGrid color='#4ADE80' />
        <span className='text-white text-sm hover:bg-gray-500 hover:rounded-lg p-0.5'>Contacts</span>
      </div>
      <div className='flex items-center gap-x-2  ml-4 hover:cursor-pointer  transition-all'>
        <IoMdGrid color='#4ADE80' />
        <span className='text-white text-sm hover:bg-gray-500 hover:rounded-lg p-0.5'>Demandes</span>
      </div>
      <div className='flex items-center gap-x-2  ml-4 hover:cursor-pointer  transition-all'>
        <IoMdGrid color='#4ADE80' />
        <span className='text-white text-sm hover:bg-gray-500 hover:rounded-lg p-0.5'>Cinema</span>
      </div>
      <div className='flex items-center gap-x-2  ml-4 hover:cursor-pointer  transition-all'>
        <IoMdGrid color='#4ADE80' />
        <span className='text-white text-sm hover:bg-gray-500 hover:rounded-lg p-0.5'>Reservations</span>
      </div>

    </div>
  );
}

export default Side_TableName;
