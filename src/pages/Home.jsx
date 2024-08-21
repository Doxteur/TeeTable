import React, { useEffect } from 'react';
import TableList from '../components/TableList';

function Home() {
  return (
    <main id='content' className='lg:ps-[20.5rem] pt-[59px] lg:pt-0'>
      <div className='p-2 sm:p-5 sm:py-0 sm:py-5 space-y-5'>
        {/* Card */}
        <div className='p-4 flex flex-col justify-center h-72 md:h-96 min-h-[calc(100vh-115px)] sm:min-h-[calc(100vh-40px)]  bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-primary dark:border-neutral-700'>
          <TableList />
        </div>
        {/* End Card */}
      </div>
    </main>
  );
}

export default Home;
