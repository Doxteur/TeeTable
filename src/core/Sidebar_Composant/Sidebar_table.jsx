import React from 'react';
import Side_TableName from './Side_TableName.jsx';

function Sidebar_table() {
  return (
    <div className='w-72 bg-white border-x border-gray-200 dark:bg-primary dark:border-neutral-700'>
      <div className='flex flex-col h-full max-h-full'>
        {/* Quick Actions */}
        <div className='py-3 px-2 border-b border-gray-200 dark:border-neutral-700'>
          <button
            type='button'
            className='py-1.5 ps-3 pe-1.5 w-full inline-flex items-center gap-x-2 text-sm rounded-lg border border-gray-200 bg-white text-gray-500 hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-primary dark:border-neutral-700 dark:text-neutral-500 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700/50'
          >
            Quick actions
            <span className='ms-auto flex items-center gap-x-1 py-px px-1.5 border border-gray-200 rounded-md dark:border-neutral-700'>
              <svg
                className='shrink-0 size-2.5'
                xmlns='http://www.w3.org/2000/svg'
                width={24}
                height={24}
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth={2}
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path d='M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3' />
              </svg>
              <span className='text-[11px] uppercase'>k</span>
            </span>
          </button>
        </div>
        {/* End Quick Actions */}
        {/* Content */}
        <div className='h-full overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500'>
          {/* Nav */}
          <nav
            className='hs-accordion-group w-full flex flex-col flex-wrap'
            data-hs-accordion-always-open=''
          >
            <div className='p-4'>
              <h2 className='text-white '>Entities</h2>
              <div className='my-2'>
                <Side_TableName />
              </div>
            </div>
          </nav>
          {/* End Nav */}
        </div>
        {/* End Content */}
      </div>
    </div>
  );
}

export default Sidebar_table;
