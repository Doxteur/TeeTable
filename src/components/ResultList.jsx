import React from 'react';

function ResultList() {
  return (
    <div className='p-5 space-y-4 flex flex-col bg-white border border-stone-200 shadow-sm rounded-xl dark:bg-primary dark:border-neutral-700 h-full'>
      {/* Nav Tab */}

      {/* End Nav Tab */}
      {/* Filter Group */}
      <div className='grid md:grid-cols-2 gap-y-2 md:gap-y-0 md:gap-x-5'>
          <div>
            {/* Search Input */}
            <div className='relative'>
              <div className='absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-3.5'>
                <svg
                  className='shrink-0 size-4 text-stone-500 dark:text-neutral-400'
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
                  <circle cx={11} cy={11} r={8} />
                  <path d='m21 21-4.3-4.3' />
                </svg>
              </div>
              <input
                type='text'
                className='py-[7px] ps-10 pe-8 block w-full bg-stone-100 border-transparent rounded-lg text-sm placeholder:text-stone-500 focus:border-green-500 focus:ring-green-600 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:border-transparent dark:text-neutral-400 dark:placeholder:text-neutral-400 dark:focus:ring-neutral-600'
                placeholder='Search orders'
              />
              <div className='hidden absolute inset-y-0 end-0 flex items-center pointer-events-none z-20 pe-1'>
                <button
                  type='button'
                  className='inline-flex shrink-0 justify-center items-center size-6 rounded-full text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:text-neutral-500 dark:hover:text-blue-500 dark:focus:text-blue-500'
                  aria-label='Close'
                >
                  <span className='sr-only'>Close</span>
                  <svg
                    className='shrink-0 size-4'
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
                    <circle cx={12} cy={12} r={10} />
                    <path d='m15 9-6 6' />
                    <path d='m9 9 6 6' />
                  </svg>
                </button>
              </div>
            </div>
            {/* End Search Input */}
          </div>
          {/* End Col */}
          <div className='flex md:justify-end items-center gap-x-2'>
            {/* Calendar Dropdown */}
            <div className='hs-dropdown [--auto-close:inside] inline-flex'>
              <button
                id='hs-pro-dnic'
                type='button'
                className='py-2 px-2.5 inline-flex items-center gap-x-1.5 text-xs font-medium rounded-lg border border-stone-200 bg-white text-stone-800 shadow-sm hover:bg-stone-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-50 dark:bg-primary dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700'
                aria-haspopup='menu'
                aria-expanded='false'
                aria-label='Dropdown'
              >
                25 Jul - 25 Aug
                <svg
                  className='shrink-0 size-3.5'
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
                  <path d='m6 9 6 6 6-6' />
                </svg>
              </button>
              <div
                className='hs-dropdown-menu hs-dropdown-open:opacity-100 w-[318px] sm:w-[636px] transition-[opacity,margin] duration opacity-0 hidden z-50 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_10px_rgba(0,0,0,0.2)] dark:bg-neutral-900'
                role='menu'
                aria-orientation='vertical'
                aria-labelledby='hs-pro-dnic'
              >
                {/* Calendar */}
                <div className='sm:flex'>
                  {/* Calendar */}
                  <div className='p-3 space-y-0.5'>
                    {/* Months */}
                    <div className='grid grid-cols-5 items-center gap-x-3 mx-1.5 pb-3'>
                      {/* Prev Button */}
                      <div className='col-span-1'>
                        <button
                          type='button'
                          className='size-8 flex justify-center items-center text-stone-800 hover:bg-stone-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-100 dark:text-neutral-400 dark:hover:bg-primary dark:focus:bg-primary'
                          aria-label='Previous'
                        >
                          <svg
                            className='shrink-0 size-4'
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
                            <path d='m15 18-6-6 6-6' />
                          </svg>
                        </button>
                      </div>
                      {/* End Prev Button */}
                      {/* Month / Year */}
                      <div className='col-span-3 flex justify-center items-center gap-x-1'>
                        <div className='relative'>
                          <select
                            data-hs-select='{
                  "placeholder": "Select month",
                  "toggleTag": "<button type=\"button\" aria-expanded=\"false\"></button>",
                  "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative flex text-nowrap w-full cursor-pointer text-start font-medium text-stone-800 hover:text-stone-600 focus:outline-none focus:text-stone-600 before:absolute before:inset-0 before:z-[1] dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300",
                  "dropdownClasses": "mt-2 z-50 w-32 max-h-72 p-1 space-y-0.5 bg-white border border-stone-200 rounded-lg shadow-lg overflow-hidden overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-stone-100 [&::-webkit-scrollbar-thumb]:bg-stone-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 dark:bg-neutral-900 dark:border-neutral-700",
                  "optionClasses": "p-2 w-full text-sm text-stone-800 cursor-pointer hover:bg-stone-100 rounded-lg focus:outline-none focus:bg-stone-100 dark:bg-neutral-900 dark:hover:bg-primary dark:text-neutral-200 dark:focus:bg-primary",
                  "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span><span class=\"hidden hs-selected:block\"><svg class=\"shrink-0 size-3.5 text-stone-800 dark:text-neutral-200\" xmlns=\"http:.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"20 6 9 17 4 12\"/></svg></span></div>"
                }'
                            className='hidden'
                          >
                            <option value={0}>January</option>
                            <option value={1}>February</option>
                            <option value={2}>March</option>
                            <option value={3}>April</option>
                            <option value={4}>May</option>
                            <option value={5}>June</option>
                            <option value={6} selected=''>
                              July
                            </option>
                            <option value={7}>August</option>
                            <option value={8}>September</option>
                            <option value={9}>October</option>
                            <option value={10}>November</option>
                            <option value={11}>December</option>
                          </select>
                        </div>
                        <span className='text-stone-800 dark:text-neutral-200'>/</span>
                        <div className='relative'>
                          <select
                            data-hs-select='{
                  "placeholder": "Select year",
                  "toggleTag": "<button type=\"button\" aria-expanded=\"false\"></button>",
                  "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative flex text-nowrap w-full cursor-pointer text-start font-medium text-stone-800 hover:text-stone-600 focus:outline-none focus:text-stone-600 before:absolute before:inset-0 before:z-[1] dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300",
                  "dropdownClasses": "mt-2 z-50 w-20 max-h-72 p-1 space-y-0.5 bg-white border border-stone-200 rounded-lg shadow-lg overflow-hidden overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-stone-100 [&::-webkit-scrollbar-thumb]:bg-stone-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 dark:bg-neutral-900 dark:border-neutral-700",
                  "optionClasses": "p-2 w-full text-sm text-stone-800 cursor-pointer hover:bg-stone-100 rounded-lg focus:outline-none focus:bg-stone-100 dark:bg-neutral-900 dark:hover:bg-primary dark:text-neutral-200 dark:focus:bg-primary",
                  "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span><span class=\"hidden hs-selected:block\"><svg class=\"shrink-0 size-3.5 text-stone-800 dark:text-neutral-200\" xmlns=\"http:.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"20 6 9 17 4 12\"/></svg></span></div>"
                }'
                            className='hidden'
                          >
                            <option selected=''>2023</option>
                            <option>2024</option>
                            <option>2025</option>
                            <option>2026</option>
                            <option>2027</option>
                          </select>
                        </div>
                      </div>
                      {/* End Month / Year */}
                      {/* Next Button */}
                      <div className='col-span-1 flex justify-end'>
                        <button
                          type='button'
                          className='opacity-0 pointer-events-none size-8 flex justify-center items-center text-stone-800 hover:bg-stone-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-100 dark:text-neutral-400 dark:hover:bg-primary dark:focus:bg-primary'
                          aria-label='Next'
                        >
                          <svg
                            className='shrink-0 size-4'
                            width={24}
                            height={24}
                            viewBox='0 0 24 24'
                            fill='none'
                            stroke='currentColor'
                            strokeWidth={2}
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          >
                            <path d='m9 18 6-6-6-6' />
                          </svg>
                        </button>
                      </div>
                      {/* End Next Button */}
                    </div>
                    {/* Months */}
                    {/* Weeks */}
                    <div className='flex pb-1.5'>
                      <span className='m-px w-10 block text-center text-sm text-stone-500 dark:text-neutral-500'>
                        Mo
                      </span>
                      <span className='m-px w-10 block text-center text-sm text-stone-500 dark:text-neutral-500'>
                        Tu
                      </span>
                      <span className='m-px w-10 block text-center text-sm text-stone-500 dark:text-neutral-500'>
                        We
                      </span>
                      <span className='m-px w-10 block text-center text-sm text-stone-500 dark:text-neutral-500'>
                        Th
                      </span>
                      <span className='m-px w-10 block text-center text-sm text-stone-500 dark:text-neutral-500'>
                        Fr
                      </span>
                      <span className='m-px w-10 block text-center text-sm text-stone-500 dark:text-neutral-500'>
                        Sa
                      </span>
                      <span className='m-px w-10 block text-center text-sm text-stone-500 dark:text-neutral-500'>
                        Su
                      </span>
                    </div>
                    {/* Weeks */}
                    {/* Days */}
                    <div className='flex'>
                      <div>
                        <button
                          type='button'
                          className='m-px size-10 flex justify-center items-center border border-transparent text-sm text-stone-800 rounded-full hover:border-green-600 hover:text-green-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-green-600 focus:text-green-600 dark:text-neutral-200'
                          disabled=''
                        >
                          26
                        </button>
                      </div>
                      <div>
                        <button
                          type='button'
                          className='m-px size-10 flex justify-center items-center border border-transparent text-sm text-stone-800 rounded-full hover:border-green-600 hover:text-green-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-green-600 focus:text-green-600 dark:text-neutral-200'
                          disabled=''
                        >
                          27
                        </button>
                      </div>
                      <div>
                        <button
                          type='button'
                          className='m-px size-10 flex justify-center items-center border border-transparent text-sm text-stone-800 rounded-full hover:border-green-600 hover:text-green-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-green-600 focus:text-green-600 dark:text-neutral-200'
                          disabled=''
                        >
                          28
                        </button>
                      </div>
                      <div>
                        <button
                          type='button'
                          className='m-px size-10 flex justify-center items-center border border-transparent text-sm text-stone-800 rounded-full hover:border-green-600 hover:text-green-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-green-600 focus:text-green-600 dark:text-neutral-200'
                          disabled=''
                        >
                          29
                        </button>
                      </div>
                      <div>
                        <button
                          type='button'
                          className='m-px size-10 flex justify-center items-center border border-transparent text-sm text-stone-800 rounded-full hover:border-green-600 hover:text-green-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-green-600 focus:text-green-600 dark:text-neutral-200'
                          disabled=''
                        >
                          30
                        </button>
                      </div>
                      <div>
                        <button
                          type='button'
                          className='m-px size-10 flex justify-center items-center border border-transparent text-sm text-stone-800 rounded-full hover:border-green-600 hover:text-green-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-green-600 focus:text-green-600 dark:text-neutral-200'
                        >
                          1
                        </button>
                      </div>
                      <div>
                        <button
                          type='button'
                          className='m-px size-10 flex justify-center items-center border border-transparent text-sm text-stone-800 rounded-full hover:border-green-600 hover:text-green-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-green-600 focus:text-green-600 dark:text-neutral-200'
                        >
                          2
                        </button>
                      </div>
                    </div>
                    {/* Days */}
                    {/* Days */}
                    <div className='flex'>
                      <div>
                        <button
                          type='button'
                          className='m-px size-10 flex justify-center items-center border border-transparent text-sm text-stone-800 rounded-full hover:border-green-600 hover:text-green-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-green-600 focus:text-green-600 dark:text-neutral-200'
                        >
                          3
                        </button>
                      </div>
                      <div>
                        <button
                          type='button'
                          className='m-px size-10 flex justify-center items-center border border-transparent text-sm text-stone-800 rounded-full hover:border-green-600 hover:text-green-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-green-600 focus:text-green-600 dark:text-neutral-200'
                        >
                          4
                        </button>
                      </div>
                      <div>
                        <button
                          type='button'
                          className='m-px size-10 flex justify-center items-center border border-transparent text-sm text-stone-800 rounded-full hover:border-green-600 hover:text-green-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-green-600 focus:text-green-600 dark:text-neutral-200'
                        >
                          5
                        </button>
                      </div>
                      <div>
                        <button
                          type='button'
                          className='m-px size-10 flex justify-center items-center border border-transparent text-sm text-stone-800 rounded-full hover:border-green-600 hover:text-green-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-green-600 focus:text-green-600 dark:text-neutral-200'
                        >
                          6
                        </button>
                      </div>
                      <div>
                        <button
                          type='button'
                          className='m-px size-10 flex justify-center items-center border border-transparent text-sm text-stone-800 rounded-full hover:border-green-600 hover:text-green-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-green-600 focus:text-green-600 dark:text-neutral-200'
                        >
                          7
                        </button>
                      </div>
                      <div>
                        <button
                          type='button'
                          className='m-px size-10 flex justify-center items-center border border-transparent text-sm text-stone-800 rounded-full hover:border-green-600 hover:text-green-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-green-600 focus:text-green-600 dark:text-neutral-200'
                        >
                          8
                        </button>
                      </div>
                      <div>
                        <button
                          type='button'
                          className='m-px size-10 flex justify-center items-center border border-transparent text-sm text-stone-800 rounded-full hover:border-green-600 hover:text-green-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-green-600 focus:text-green-600 dark:text-neutral-200'
                        >
                          9
                        </button>
                      </div>
                    </div>
                    {/* Days */}
                    {/* Days */}
                    <div className='flex'>
                      <div>
                        <button
                          type='button'
                          className='m-px size-10 flex justify-center items-center border border-transparent text-sm text-stone-800 rounded-full hover:border-green-600 hover:text-green-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-green-600 focus:text-green-600 dark:text-neutral-200'
                        >
                          10
                        </button>
                      </div>
                      <div>
                        <button
                          type='button'
                          className='m-px size-10 flex justify-center items-center border border-transparent text-sm text-stone-800 rounded-full hover:border-green-600 hover:text-green-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-green-600 focus:text-green-600 dark:text-neutral-200'
                        >
                          11
                        </button>
                      </div>
                      <div>
                        <button
                          type='button'
                          className='m-px size-10 flex justify-center items-center border border-transparent text-sm text-stone-800 rounded-full hover:border-green-600 hover:text-green-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-green-600 focus:text-green-600 dark:text-neutral-200'
                        >
                          12
                        </button>
                      </div>
                      <div>
                        <button
                          type='button'
                          className='m-px size-10 flex justify-center items-center border border-transparent text-sm text-stone-800 rounded-full hover:border-green-600 hover:text-green-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-green-600 focus:text-green-600 dark:text-neutral-200'
                        >
                          13
                        </button>
                      </div>
                      <div>
                        <button
                          type='button'
                          className='m-px size-10 flex justify-center items-center border border-transparent text-sm text-stone-800 rounded-full hover:border-green-600 hover:text-green-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-green-600 focus:text-green-600 dark:text-neutral-200'
                        >
                          14
                        </button>
                      </div>
                      <div>
                        <button
                          type='button'
                          className='m-px size-10 flex justify-center items-center border border-transparent text-sm text-stone-800 rounded-full hover:border-green-600 hover:text-green-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-green-600 focus:text-green-600 dark:text-neutral-200'
                        >
                          15
                        </button>
                      </div>
                      <div>
                        <button
                          type='button'
                          className='m-px size-10 flex justify-center items-center border border-transparent text-sm text-stone-800 rounded-full hover:border-green-600 hover:text-green-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-green-600 focus:text-green-600 dark:text-neutral-200'
                        >
                          16
                        </button>
                      </div>
                    </div>
                    {/* Days */}
                    {/* Days */}
                    <div className='flex'>
                      <div>
                        <button
                          type='button'
                          className='m-px size-10 flex justify-center items-center border border-transparent text-sm text-stone-800 rounded-full hover:border-green-600 hover:text-green-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-green-600 focus:text-green-600 dark:text-neutral-200'
                        >
                          17
                        </button>
                      </div>
                      <div>
                        <button
                          type='button'
                          className='m-px size-10 flex justify-center items-center border border-transparent text-sm text-stone-800 rounded-full hover:border-green-600 hover:text-green-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-green-600 focus:text-green-600 dark:text-neutral-200'
                        >
                          18
                        </button>
                      </div>
                      <div>
                        <button
                          type='button'
                          className='m-px size-10 flex justify-center items-center border border-transparent text-sm text-stone-800 rounded-full hover:border-green-600 hover:text-green-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-green-600 focus:text-green-600 dark:text-neutral-200'
                        >
                          19
                        </button>
                      </div>
                      <div>
                        <button
                          type='button'
                          className='m-px size-10 flex justify-center items-center border border-transparent text-sm text-stone-800 rounded-full hover:border-green-600 hover:text-green-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-green-600 focus:text-green-600 dark:text-neutral-200'
                        >
                          20
                        </button>
                      </div>
                      <div>
                        <button
                          type='button'
                          className='m-px size-10 flex justify-center items-center border border-transparent text-sm text-stone-800 rounded-full hover:border-green-600 hover:text-green-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-green-600 focus:text-green-600 dark:text-neutral-200'
                        >
                          21
                        </button>
                      </div>
                      <div>
                        <button
                          type='button'
                          className='m-px size-10 flex justify-center items-center border border-transparent text-sm text-stone-800 rounded-full hover:border-green-600 hover:text-green-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-green-600 focus:text-green-600 dark:text-neutral-200'
                        >
                          22
                        </button>
                      </div>
                      <div>
                        <button
                          type='button'
                          className='m-px size-10 flex justify-center items-center border border-transparent text-sm text-stone-800 rounded-full hover:border-green-600 hover:text-green-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-green-600 focus:text-green-600 dark:text-neutral-200'
                        >
                          23
                        </button>
                      </div>
                    </div>
                    {/* Days */}
                    {/* Days */}
                    <div className='flex'>
                      <div>
                        <button
                          type='button'
                          className='m-px size-10 flex justify-center items-center border border-transparent text-sm text-stone-800 rounded-full hover:border-green-600 hover:text-green-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-green-600 focus:text-green-600 dark:text-neutral-200'
                        >
                          24
                        </button>
                      </div>
                      <div className='bg-stone-100 rounded-s-full dark:bg-primary'>
                        <button
                          type='button'
                          className='m-px size-10 flex justify-center items-center bg-green-600 border border-transparent text-sm font-medium text-white hover:border-green-600 rounded-full dark:bg-green-500 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-100 dark:hover:border-neutral-700'
                        >
                          25
                        </button>
                      </div>
                      <div className='bg-stone-100 first:rounded-s-full last:rounded-e-full dark:bg-primary'>
                        <button
                          type='button'
                          className='m-px size-10 flex justify-center items-center border border-transparent text-sm text-stone-800 rounded-full hover:border-green-600 hover:text-green-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-green-600 focus:text-green-600 dark:text-neutral-200'
                        >
                          26
                        </button>
                      </div>
                      <div className='bg-stone-100 first:rounded-s-full last:rounded-e-full dark:bg-primary'>
                        <button
                          type='button'
                          className='m-px size-10 flex justify-center items-center border border-transparent text-sm text-stone-800 rounded-full hover:border-green-600 hover:text-green-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-green-600 focus:text-green-600 dark:text-neutral-200'
                        >
                          27
                        </button>
                      </div>
                      <div className='bg-stone-100 first:rounded-s-full last:rounded-e-full dark:bg-primary'>
                        <button
                          type='button'
                          className='m-px size-10 flex justify-center items-center border border-transparent text-sm text-stone-800 rounded-full hover:border-green-600 hover:text-green-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-green-600 focus:text-green-600 dark:text-neutral-200'
                        >
                          28
                        </button>
                      </div>
                      <div className='bg-stone-100 first:rounded-s-full last:rounded-e-full dark:bg-primary'>
                        <button
                          type='button'
                          className='m-px size-10 flex justify-center items-center border border-transparent text-sm text-stone-800 rounded-full hover:border-green-600 hover:text-green-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-green-600 focus:text-green-600 dark:text-neutral-200'
                        >
                          29
                        </button>
                      </div>
                      <div className='bg-stone-100 first:rounded-s-full last:rounded-e-full dark:bg-primary'>
                        <button
                          type='button'
                          className='m-px size-10 flex justify-center items-center border border-transparent text-sm text-stone-800 rounded-full hover:border-green-600 hover:text-green-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-green-600 focus:text-green-600 dark:text-neutral-200'
                        >
                          30
                        </button>
                      </div>
                    </div>
                    {/* Days */}
                    {/* Days */}
                    <div className='flex'>
                      <div className='bg-stone-100 first:rounded-s-full last:rounded-e-full dark:bg-primary'>
                        <button
                          type='button'
                          className='m-px size-10 flex justify-center items-center border border-transparent text-sm text-stone-800 rounded-full hover:border-green-600 hover:text-green-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-green-600 focus:text-green-600 dark:text-neutral-200'
                        >
                          31
                        </button>
                      </div>
                      <div className='bg-gradient-to-r from-stone-100 dark:from-stone-800'>
                        <button
                          type='button'
                          className='m-px size-10 flex justify-center items-center border border-transparent text-sm text-stone-800 hover:border-green-600 hover:text-green-600 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-100 dark:text-neutral-200 dark:hover:border-neutral-500 dark:focus:bg-neutral-700'
                          disabled=''
                        >
                          1
                        </button>
                      </div>
                      <div>
                        <button
                          type='button'
                          className='m-px size-10 flex justify-center items-center border border-transparent text-sm text-stone-800 hover:border-green-600 hover:text-green-600 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-100 dark:text-neutral-200 dark:hover:border-neutral-500 dark:focus:bg-neutral-700'
                          disabled=''
                        >
                          2
                        </button>
                      </div>
                      <div>
                        <button
                          type='button'
                          className='m-px size-10 flex justify-center items-center border border-transparent text-sm text-stone-800 hover:border-green-600 hover:text-green-600 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-100 dark:text-neutral-200 dark:hover:border-neutral-500 dark:focus:bg-neutral-700'
                          disabled=''
                        >
                          3
                        </button>
                      </div>
                      <div>
                        <button
                          type='button'
                          className='m-px size-10 flex justify-center items-center border border-transparent text-sm text-stone-800 hover:border-green-600 hover:text-green-600 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-100 dark:text-neutral-200 dark:hover:border-neutral-500 dark:focus:bg-neutral-700'
                          disabled=''
                        >
                          4
                        </button>
                      </div>
                      <div>
                        <button
                          type='button'
                          className='m-px size-10 flex justify-center items-center border border-transparent text-sm text-stone-800 hover:border-green-600 hover:text-green-600 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-100 dark:text-neutral-200 dark:hover:border-neutral-500 dark:focus:bg-neutral-700'
                          disabled=''
                        >
                          5
                        </button>
                      </div>
                      <div>
                        <button
                          type='button'
                          className='m-px size-10 flex justify-center items-center border border-transparent text-sm text-stone-800 hover:border-green-600 hover:text-green-600 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-100 dark:text-neutral-200 dark:hover:border-neutral-500 dark:focus:bg-neutral-700'
                          disabled=''
                        >
                          6
                        </button>
                      </div>
                    </div>
                    {/* Days */}
                  </div>
                  {/* End Calendar */}
                  {/* Calendar */}
                  <div className='p-3 space-y-0.5'>
                    {/* Months */}
                    <div className='grid grid-cols-5 items-center gap-x-3 mx-1.5 pb-3'>
                      {/* Prev Button */}
                      <div className='col-span-1'>
                        <button
                          type='button'
                          className='opacity-0 pointer-events-none size-8 flex justify-center items-center text-stone-800 hover:bg-stone-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-100 dark:text-neutral-400 dark:hover:bg-primary dark:focus:bg-primary'
                          aria-label='Previous'
                        >
                          <svg
                            className='shrink-0 size-4'
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
                            <path d='m15 18-6-6 6-6' />
                          </svg>
                        </button>
                      </div>
                      {/* End Prev Button */}
                      {/* Month / Year */}
                      <div className='col-span-3 flex justify-center items-center gap-x-1'>
                        <div className='relative'>
                          <select
                            data-hs-select='{
                  "placeholder": "Select month",
                  "toggleTag": "<button type=\"button\" aria-expanded=\"false\"></button>",
                  "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative flex text-nowrap w-full cursor-pointer text-start font-medium text-stone-800 hover:text-stone-600 focus:outline-none focus:text-stone-600 before:absolute before:inset-0 before:z-[1] dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300",
                  "dropdownClasses": "mt-2 z-50 w-32 max-h-72 p-1 space-y-0.5 bg-white border border-stone-200 rounded-lg shadow-lg overflow-hidden overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-stone-100 [&::-webkit-scrollbar-thumb]:bg-stone-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 dark:bg-neutral-900 dark:border-neutral-700",
                  "optionClasses": "p-2 w-full text-sm text-stone-800 cursor-pointer hover:bg-stone-100 rounded-lg focus:outline-none focus:bg-stone-100 dark:bg-neutral-900 dark:hover:bg-primary dark:text-neutral-200 dark:focus:bg-primary",
                  "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span><span class=\"hidden hs-selected:block\"><svg class=\"shrink-0 size-3.5 text-stone-800 dark:text-neutral-200\" xmlns=\"http:.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"20 6 9 17 4 12\"/></svg></span></div>"
                }'
                            className='hidden'
                          >
                            <option value={0}>January</option>
                            <option value={1}>February</option>
                            <option value={2}>March</option>
                            <option value={3}>April</option>
                            <option value={4}>May</option>
                            <option value={5}>June</option>
                            <option value={6} selected=''>
                              July
                            </option>
                            <option value={7}>August</option>
                            <option value={8}>September</option>
                            <option value={9}>October</option>
                            <option value={10}>November</option>
                            <option value={11}>December</option>
                          </select>
                        </div>
                        <span className='text-stone-800 dark:text-neutral-200'>/</span>
                        <div className='relative'>
                          <select
                            data-hs-select='{
                  "placeholder": "Select year",
                  "toggleTag": "<button type=\"button\" aria-expanded=\"false\"></button>",
                  "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative flex text-nowrap w-full cursor-pointer text-start font-medium text-stone-800 hover:text-stone-600 focus:outline-none focus:text-stone-600 before:absolute before:inset-0 before:z-[1] dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300",
                  "dropdownClasses": "mt-2 z-50 w-20 max-h-72 p-1 space-y-0.5 bg-white border border-stone-200 rounded-lg shadow-lg overflow-hidden overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-stone-100 [&::-webkit-scrollbar-thumb]:bg-stone-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 dark:bg-neutral-900 dark:border-neutral-700",
                  "optionClasses": "p-2 w-full text-sm text-stone-800 cursor-pointer hover:bg-stone-100 rounded-lg focus:outline-none focus:bg-stone-100 dark:bg-neutral-900 dark:hover:bg-primary dark:text-neutral-200 dark:focus:bg-primary",
                  "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span><span class=\"hidden hs-selected:block\"><svg class=\"shrink-0 size-3.5 text-stone-800 dark:text-neutral-200\" xmlns=\"http:.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"20 6 9 17 4 12\"/></svg></span></div>"
                }'
                            className='hidden'
                          >
                            <option selected=''>2023</option>
                            <option>2024</option>
                            <option>2025</option>
                            <option>2026</option>
                            <option>2027</option>
                          </select>
                        </div>
                      </div>
                      {/* End Month / Year */}
                      {/* Next Button */}
                      <div className='col-span-1 flex justify-end'>
                        <button
                          type='button'
                          className='size-8 flex justify-center items-center text-stone-800 hover:bg-stone-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-100 dark:text-neutral-400 dark:hover:bg-primary dark:focus:bg-primary'
                          aria-label='Next'
                        >
                          <svg
                            className='shrink-0 size-4'
                            width={24}
                            height={24}
                            viewBox='0 0 24 24'
                            fill='none'
                            stroke='currentColor'
                            strokeWidth={2}
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          >
                            <path d='m9 18 6-6-6-6' />
                          </svg>
                        </button>
                      </div>
                      {/* End Next Button */}
                    </div>
                    {/* Months */}
                    {/* Weeks */}
                    <div className='flex pb-1.5'>
                      <span className='m-px w-10 block text-center text-sm text-stone-500 dark:text-neutral-500'>
                        Mo
                      </span>
                      <span className='m-px w-10 block text-center text-sm text-stone-500 dark:text-neutral-500'>
                        Tu
                      </span>
                      <span className='m-px w-10 block text-center text-sm text-stone-500 dark:text-neutral-500'>
                        We
                      </span>
                      <span className='m-px w-10 block text-center text-sm text-stone-500 dark:text-neutral-500'>
                        Th
                      </span>
                      <span className='m-px w-10 block text-center text-sm text-stone-500 dark:text-neutral-500'>
                        Fr
                      </span>
                      <span className='m-px w-10 block text-center text-sm text-stone-500 dark:text-neutral-500'>
                        Sa
                      </span>
                      <span className='m-px w-10 block text-center text-sm text-stone-500 dark:text-neutral-500'>
                        Su
                      </span>
                    </div>
                    {/* Weeks */}
                    {/* Days */}
                    <div className='flex'>
                      <div className='bg-gradient-to-l from-stone-100 dark:from-stone-800'>
                        <button
                          type='button'
                          className='m-px size-10 flex justify-center items-center border border-transparent text-sm text-stone-800 hover:border-green-600 hover:text-green-600 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-100 dark:text-neutral-200 dark:hover:border-neutral-500 dark:focus:bg-neutral-700'
                          disabled=''
                        >
                          31
                        </button>
                      </div>
                      <div className='bg-stone-100 first:rounded-s-full last:rounded-e-full dark:bg-primary'>
                        <button
                          type='button'
                          className='m-px size-10 flex justify-center items-center border border-transparent text-sm text-stone-800 hover:border-green-600 hover:text-green-600 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-100 dark:text-neutral-200 dark:hover:border-neutral-500 dark:focus:bg-neutral-700'
                        >
                          1
                        </button>
                      </div>
                      <div className='bg-stone-100 first:rounded-s-full last:rounded-e-full dark:bg-primary'>
                        <button
                          type='button'
                          className='m-px size-10 flex justify-center items-center border border-transparent text-sm text-stone-800 hover:border-green-600 hover:text-green-600 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-100 dark:text-neutral-200 dark:hover:border-neutral-500 dark:focus:bg-neutral-700'
                        >
                          2
                        </button>
                      </div>
                      <div className='bg-stone-100 first:rounded-s-full last:rounded-e-full dark:bg-primary'>
                        <button
                          type='button'
                          className='m-px size-10 flex justify-center items-center border border-transparent text-sm text-stone-800 hover:border-green-600 hover:text-green-600 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-100 dark:text-neutral-200 dark:hover:border-neutral-500 dark:focus:bg-neutral-700'
                        >
                          3
                        </button>
                      </div>
                      <div className='bg-stone-100 first:rounded-s-full last:rounded-e-full dark:bg-primary'>
                        <button
                          type='button'
                          className='m-px size-10 flex justify-center items-center border border-transparent text-sm text-stone-800 hover:border-green-600 hover:text-green-600 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-100 dark:text-neutral-200 dark:hover:border-neutral-500 dark:focus:bg-neutral-700'
                        >
                          4
                        </button>
                      </div>
                      <div className='bg-stone-100 first:rounded-s-full last:rounded-e-full dark:bg-primary'>
                        <button
                          type='button'
                          className='m-px size-10 flex justify-center items-center border border-transparent text-sm text-stone-800 rounded-full hover:border-green-600 hover:text-green-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-green-600 focus:text-green-600 dark:text-neutral-200'
                        >
                          5
                        </button>
                      </div>
                      <div className='bg-stone-100 first:rounded-s-full last:rounded-e-full dark:bg-primary'>
                        <button
                          type='button'
                          className='m-px size-10 flex justify-center items-center border border-transparent text-sm text-stone-800 rounded-full hover:border-green-600 hover:text-green-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-green-600 focus:text-green-600 dark:text-neutral-200'
                        >
                          6
                        </button>
                      </div>
                    </div>
                    {/* Days */}
                    {/* Days */}
                    <div className='flex'>
                      <div className='bg-stone-100 first:rounded-s-full last:rounded-e-full dark:bg-primary'>
                        <button
                          type='button'
                          className='m-px size-10 flex justify-center items-center border border-transparent text-sm text-stone-800 rounded-full hover:border-green-600 hover:text-green-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-green-600 focus:text-green-600 dark:text-neutral-200'
                        >
                          7
                        </button>
                      </div>
                      <div className='bg-stone-100 first:rounded-s-full last:rounded-e-full dark:bg-primary'>
                        <button
                          type='button'
                          className='m-px size-10 flex justify-center items-center border border-transparent text-sm text-stone-800 rounded-full hover:border-green-600 hover:text-green-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-green-600 focus:text-green-600 dark:text-neutral-200'
                        >
                          8
                        </button>
                      </div>
                      <div className='bg-stone-100 first:rounded-s-full last:rounded-e-full dark:bg-primary'>
                        <button
                          type='button'
                          className='m-px size-10 flex justify-center items-center border border-transparent text-sm text-stone-800 rounded-full hover:border-green-600 hover:text-green-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-green-600 focus:text-green-600 dark:text-neutral-200'
                        >
                          9
                        </button>
                      </div>
                      <div className='bg-stone-100 first:rounded-s-full last:rounded-e-full dark:bg-primary'>
                        <button
                          type='button'
                          className='m-px size-10 flex justify-center items-center border border-transparent text-sm text-stone-800 rounded-full hover:border-green-600 hover:text-green-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-green-600 focus:text-green-600 dark:text-neutral-200'
                        >
                          10
                        </button>
                      </div>
                      <div className='bg-stone-100 first:rounded-s-full last:rounded-e-full dark:bg-primary'>
                        <button
                          type='button'
                          className='m-px size-10 flex justify-center items-center border border-transparent text-sm text-stone-800 rounded-full hover:border-green-600 hover:text-green-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-green-600 focus:text-green-600 dark:text-neutral-200'
                        >
                          11
                        </button>
                      </div>
                      <div className='bg-stone-100 first:rounded-s-full last:rounded-e-full dark:bg-primary'>
                        <button
                          type='button'
                          className='m-px size-10 flex justify-center items-center border border-transparent text-sm text-stone-800 rounded-full hover:border-green-600 hover:text-green-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-green-600 focus:text-green-600 dark:text-neutral-200'
                        >
                          12
                        </button>
                      </div>
                      <div className='bg-stone-100 first:rounded-s-full last:rounded-e-full dark:bg-primary'>
                        <button
                          type='button'
                          className='m-px size-10 flex justify-center items-center border border-transparent text-sm text-stone-800 rounded-full hover:border-green-600 hover:text-green-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-green-600 focus:text-green-600 dark:text-neutral-200'
                        >
                          13
                        </button>
                      </div>
                    </div>
                    {/* Days */}
                    {/* Days */}
                    <div className='flex'>
                      <div className='bg-stone-100 first:rounded-s-full last:rounded-e-full dark:bg-primary'>
                        <button
                          type='button'
                          className='m-px size-10 flex justify-center items-center border border-transparent text-sm text-stone-800 rounded-full hover:border-green-600 hover:text-green-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-green-600 focus:text-green-600 dark:text-neutral-200'
                        >
                          14
                        </button>
                      </div>
                      <div className='bg-stone-100 first:rounded-s-full last:rounded-e-full dark:bg-primary'>
                        <button
                          type='button'
                          className='m-px size-10 flex justify-center items-center border border-transparent text-sm text-stone-800 rounded-full hover:border-green-600 hover:text-green-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-green-600 focus:text-green-600 dark:text-neutral-200'
                        >
                          15
                        </button>
                      </div>
                      <div className='bg-stone-100 first:rounded-s-full last:rounded-e-full dark:bg-primary'>
                        <button
                          type='button'
                          className='m-px size-10 flex justify-center items-center border border-transparent text-sm text-stone-800 rounded-full hover:border-green-600 hover:text-green-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-green-600 focus:text-green-600 dark:text-neutral-200'
                        >
                          16
                        </button>
                      </div>
                      <div className='bg-stone-100 first:rounded-s-full last:rounded-e-full dark:bg-primary'>
                        <button
                          type='button'
                          className='m-px size-10 flex justify-center items-center border border-transparent text-sm text-stone-800 rounded-full hover:border-green-600 hover:text-green-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-green-600 focus:text-green-600 dark:text-neutral-200'
                        >
                          17
                        </button>
                      </div>
                      <div className='bg-stone-100 first:rounded-s-full last:rounded-e-full dark:bg-primary'>
                        <button
                          type='button'
                          className='m-px size-10 flex justify-center items-center border border-transparent text-sm text-stone-800 rounded-full hover:border-green-600 hover:text-green-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-green-600 focus:text-green-600 dark:text-neutral-200'
                        >
                          18
                        </button>
                      </div>
                      <div className='bg-stone-100 first:rounded-s-full last:rounded-e-full dark:bg-primary'>
                        <button
                          type='button'
                          className='m-px size-10 flex justify-center items-center border border-transparent text-sm text-stone-800 rounded-full hover:border-green-600 hover:text-green-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-green-600 focus:text-green-600 dark:text-neutral-200'
                        >
                          19
                        </button>
                      </div>
                      <div className='bg-stone-100 first:rounded-s-full last:rounded-e-full dark:bg-primary'>
                        <button
                          type='button'
                          className='m-px size-10 flex justify-center items-center border border-transparent text-sm text-stone-800 rounded-full hover:border-green-600 hover:text-green-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-green-600 focus:text-green-600 dark:text-neutral-200'
                        >
                          20
                        </button>
                      </div>
                    </div>
                    {/* Days */}
                    {/* Days */}
                    <div className='flex'>
                      <div className='bg-stone-100 first:rounded-s-full last:rounded-e-full dark:bg-primary'>
                        <button
                          type='button'
                          className='m-px size-10 flex justify-center items-center border border-transparent text-sm text-stone-800 rounded-full hover:border-green-600 hover:text-green-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-green-600 focus:text-green-600 dark:text-neutral-200'
                        >
                          21
                        </button>
                      </div>
                      <div className='bg-stone-100 first:rounded-s-full last:rounded-e-full dark:bg-primary'>
                        <button
                          type='button'
                          className='m-px size-10 flex justify-center items-center border border-transparent text-sm text-stone-800 rounded-full hover:border-green-600 hover:text-green-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-green-600 focus:text-green-600 dark:text-neutral-200'
                        >
                          22
                        </button>
                      </div>
                      <div className='bg-stone-100 first:rounded-s-full last:rounded-e-full dark:bg-primary'>
                        <button
                          type='button'
                          className='m-px size-10 flex justify-center items-center border border-transparent text-sm text-stone-800 rounded-full hover:border-green-600 hover:text-green-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-green-600 focus:text-green-600 dark:text-neutral-200'
                        >
                          23
                        </button>
                      </div>
                      <div className='bg-stone-100 first:rounded-s-full last:rounded-e-full dark:bg-primary'>
                        <button
                          type='button'
                          className='m-px size-10 flex justify-center items-center border border-transparent text-sm text-stone-800 rounded-full hover:border-green-600 hover:text-green-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-green-600 focus:text-green-600 dark:text-neutral-200'
                        >
                          24
                        </button>
                      </div>
                      <div className='bg-stone-100 rounded-e-full dark:bg-primary'>
                        <button
                          type='button'
                          className='m-px size-10 flex justify-center items-center bg-green-600 border border-transparent text-sm font-medium text-white hover:border-green-600 rounded-full dark:bg-green-500 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-100 dark:hover:border-neutral-700'
                        >
                          25
                        </button>
                      </div>
                      <div>
                        <button
                          type='button'
                          className='m-px size-10 flex justify-center items-center border border-transparent text-sm text-stone-800 rounded-full hover:border-green-600 hover:text-green-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-green-600 focus:text-green-600 dark:text-neutral-200'
                        >
                          26
                        </button>
                      </div>
                      <div>
                        <button
                          type='button'
                          className='m-px size-10 flex justify-center items-center border border-transparent text-sm text-stone-800 rounded-full hover:border-green-600 hover:text-green-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-green-600 focus:text-green-600 dark:text-neutral-200'
                        >
                          27
                        </button>
                      </div>
                    </div>
                    {/* Days */}
                    {/* Days */}
                    <div className='flex'>
                      <div>
                        <button
                          type='button'
                          className='m-px size-10 flex justify-center items-center border border-transparent text-sm text-stone-800 rounded-full hover:border-green-600 hover:text-green-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-green-600 focus:text-green-600 dark:text-neutral-200'
                        >
                          28
                        </button>
                      </div>
                      <div>
                        <button
                          type='button'
                          className='m-px size-10 flex justify-center items-center border border-transparent text-sm text-stone-800 rounded-full hover:border-green-600 hover:text-green-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-green-600 focus:text-green-600 dark:text-neutral-200'
                        >
                          29
                        </button>
                      </div>
                      <div>
                        <button
                          type='button'
                          className='m-px size-10 flex justify-center items-center border border-transparent text-sm text-stone-800 rounded-full hover:border-green-600 hover:text-green-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-green-600 focus:text-green-600 dark:text-neutral-200'
                        >
                          30
                        </button>
                      </div>
                      <div>
                        <button
                          type='button'
                          className='m-px size-10 flex justify-center items-center border border-transparent text-sm text-stone-800 rounded-full hover:border-green-600 hover:text-green-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-green-600 focus:text-green-600 dark:text-neutral-200'
                        >
                          31
                        </button>
                      </div>
                      <div>
                        <button
                          type='button'
                          className='m-px size-10 flex justify-center items-center border border-transparent text-sm text-stone-800 hover:border-green-600 hover:text-green-600 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-100 dark:text-neutral-200 dark:hover:border-neutral-500 dark:focus:bg-neutral-700'
                          disabled=''
                        >
                          1
                        </button>
                      </div>
                      <div>
                        <button
                          type='button'
                          className='m-px size-10 flex justify-center items-center border border-transparent text-sm text-stone-800 hover:border-green-600 hover:text-green-600 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-100 dark:text-neutral-200 dark:hover:border-neutral-500 dark:focus:bg-neutral-700'
                          disabled=''
                        >
                          2
                        </button>
                      </div>
                      <div>
                        <button
                          type='button'
                          className='m-px size-10 flex justify-center items-center border border-transparent text-sm text-stone-800 hover:border-green-600 hover:text-green-600 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-100 dark:text-neutral-200 dark:hover:border-neutral-500 dark:focus:bg-neutral-700'
                          disabled=''
                        >
                          3
                        </button>
                      </div>
                    </div>
                    {/* Days */}
                    {/* Days */}
                    <div className='flex'>
                      <div>
                        <button
                          type='button'
                          className='m-px size-10 flex justify-center items-center border border-transparent text-sm text-stone-800 hover:border-green-600 hover:text-green-600 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-100 dark:text-neutral-200 dark:hover:border-neutral-500 dark:focus:bg-neutral-700'
                          disabled=''
                        >
                          4
                        </button>
                      </div>
                      <div>
                        <button
                          type='button'
                          className='m-px size-10 flex justify-center items-center border border-transparent text-sm text-stone-800 hover:border-green-600 hover:text-green-600 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-100 dark:text-neutral-200 dark:hover:border-neutral-500 dark:focus:bg-neutral-700'
                          disabled=''
                        >
                          5
                        </button>
                      </div>
                      <div>
                        <button
                          type='button'
                          className='m-px size-10 flex justify-center items-center border border-transparent text-sm text-stone-800 hover:border-green-600 hover:text-green-600 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-100 dark:text-neutral-200 dark:hover:border-neutral-500 dark:focus:bg-neutral-700'
                          disabled=''
                        >
                          6
                        </button>
                      </div>
                      <div>
                        <button
                          type='button'
                          className='m-px size-10 flex justify-center items-center border border-transparent text-sm text-stone-800 hover:border-green-600 hover:text-green-600 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-100 dark:text-neutral-200 dark:hover:border-neutral-500 dark:focus:bg-neutral-700'
                          disabled=''
                        >
                          7
                        </button>
                      </div>
                      <div>
                        <button
                          type='button'
                          className='m-px size-10 flex justify-center items-center border border-transparent text-sm text-stone-800 hover:border-green-600 hover:text-green-600 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-100 dark:text-neutral-200 dark:hover:border-neutral-500 dark:focus:bg-neutral-700'
                          disabled=''
                        >
                          8
                        </button>
                      </div>
                      <div>
                        <button
                          type='button'
                          className='m-px size-10 flex justify-center items-center border border-transparent text-sm text-stone-800 hover:border-green-600 hover:text-green-600 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-100 dark:text-neutral-200 dark:hover:border-neutral-500 dark:focus:bg-neutral-700'
                          disabled=''
                        >
                          9
                        </button>
                      </div>
                      <div>
                        <button
                          type='button'
                          className='m-px size-10 flex justify-center items-center border border-transparent text-sm text-stone-800 hover:border-green-600 hover:text-green-600 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-100 dark:text-neutral-200 dark:hover:border-neutral-500 dark:focus:bg-neutral-700'
                          disabled=''
                        >
                          10
                        </button>
                      </div>
                    </div>
                    {/* Days */}
                    {/* Button Group */}
                    <div className='pt-4 flex justify-end gap-x-2'>
                      <button
                        type='button'
                        className='py-2 px-3 inline-flex items-center gap-x-2 text-xs font-medium rounded-lg border border-stone-200 bg-white text-stone-800 shadow-sm hover:bg-stone-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-50 dark:bg-primary dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700'
                        data-hs-overlay='#hs-pro-edmad'
                      >
                        Cancel
                      </button>
                      <button
                        type='button'
                        className='py-2 px-3  inline-flex justify-center items-center gap-x-2 text-xs font-medium rounded-lg border border-transparent bg-green-600 text-white hover:bg-green-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-green-500'
                        data-hs-overlay='#hs-pro-edmad'
                      >
                        Apply
                      </button>
                    </div>
                    {/* End Button Group */}
                  </div>
                  {/* End Calendar */}
                </div>
                {/* End Calendar */}
              </div>
            </div>
            {/* End Calendar Dropdown */}
            {/* Filter Dropdown */}
            <div className='hs-dropdown [--auto-close:inside] [--placement:bottom-right] relative inline-flex'>
              {/* Filter Button */}
              <button
                id='hs-pro-dupfind'
                type='button'
                className='py-2 px-2.5 inline-flex items-center gap-x-1.5 text-xs font-medium rounded-lg border border-stone-200 bg-white text-stone-800 shadow-sm hover:bg-stone-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-100 dark:bg-primary dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700'
                aria-haspopup='menu'
                aria-expanded='false'
                aria-label='Dropdown'
              >
                <svg
                  className='shrink-0 size-3.5'
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
                  <line x1={21} x2={14} y1={4} y2={4} />
                  <line x1={10} x2={3} y1={4} y2={4} />
                  <line x1={21} x2={12} y1={12} y2={12} />
                  <line x1={8} x2={3} y1={12} y2={12} />
                  <line x1={21} x2={16} y1={20} y2={20} />
                  <line x1={12} x2={3} y1={20} y2={20} />
                  <line x1={14} x2={14} y1={2} y2={6} />
                  <line x1={8} x2={8} y1={10} y2={14} />
                  <line x1={16} x2={16} y1={18} y2={22} />
                </svg>
                Filter
                <span className='font-medium text-[10px] py-0.5 px-[5px] bg-stone-800 text-white leading-3 rounded-full dark:bg-neutral-500'>
                  7
                </span>
              </button>
              {/* End Filter Button */}
              {/* Dropdown */}
              <div
                className='hs-dropdown-menu hs-dropdown-open:opacity-100 w-44 transition-[opacity,margin] duration opacity-0 hidden z-10 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_10px_rgba(0,0,0,0.2)] dark:bg-neutral-900'
                role='menu'
                aria-orientation='vertical'
                aria-labelledby='hs-pro-dupfind'
              >
                <div className='p-1'>
                  <div className='flex items-center gap-x-3 py-1.5 px-2 cursor-pointer rounded-lg hover:bg-stone-100 dark:hover:bg-primary dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-neutral-600'>
                    <input
                      type='checkbox'
                      className='shrink-0 border-stone-300 rounded text-green-600 focus:ring-green-600 disabled:opacity-50 disabled:pointer-events-none dark:bg-primary dark:border-neutral-600 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-neutral-800'
                      id='hs-pro-dupfindch2'
                      defaultChecked=''
                    />
                    <label
                      htmlFor='hs-pro-dupfindch2'
                      className='flex flex-1 items-center gap-x-3 cursor-pointer text-[13px] text-stone-800 dark:text-neutral-300'
                    >
                      Order
                    </label>
                  </div>
                  <div className='flex items-center gap-x-3 py-1.5 px-2 cursor-pointer rounded-lg hover:bg-stone-100 dark:hover:bg-primary dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-neutral-600'>
                    <input
                      type='checkbox'
                      className='shrink-0 border-stone-300 rounded text-green-600 focus:ring-green-600 disabled:opacity-50 disabled:pointer-events-none dark:bg-primary dark:border-neutral-600 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-neutral-800'
                      id='hs-pro-dupfindch3'
                      defaultChecked=''
                    />
                    <label
                      htmlFor='hs-pro-dupfindch3'
                      className='flex flex-1 items-center gap-x-3 cursor-pointer text-[13px] text-stone-800 dark:text-neutral-300'
                    >
                      Purchased
                    </label>
                  </div>
                  <div className='flex items-center gap-x-3 py-1.5 px-2 cursor-pointer rounded-lg hover:bg-stone-100 dark:hover:bg-primary dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-neutral-600'>
                    <input
                      type='checkbox'
                      className='shrink-0 border-stone-300 rounded text-green-600 focus:ring-green-600 disabled:opacity-50 disabled:pointer-events-none dark:bg-primary dark:border-neutral-600 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-neutral-800'
                      id='hs-pro-dupfindch4'
                      defaultChecked=''
                    />
                    <label
                      htmlFor='hs-pro-dupfindch4'
                      className='flex flex-1 items-center gap-x-3 cursor-pointer text-[13px] text-stone-800 dark:text-neutral-300'
                    >
                      Status
                    </label>
                  </div>
                  <div className='flex items-center gap-x-3 py-1.5 px-2 cursor-pointer rounded-lg hover:bg-stone-100 dark:hover:bg-primary dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-neutral-600'>
                    <input
                      type='checkbox'
                      className='shrink-0 border-stone-300 rounded text-green-600 focus:ring-green-600 disabled:opacity-50 disabled:pointer-events-none dark:bg-primary dark:border-neutral-600 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-neutral-800'
                      id='hs-pro-dupfindch5'
                      defaultChecked=''
                    />
                    <label
                      htmlFor='hs-pro-dupfindch5'
                      className='flex flex-1 items-center gap-x-3 cursor-pointer text-[13px] text-stone-800 dark:text-neutral-300'
                    >
                      Customer
                    </label>
                  </div>
                  <div className='flex items-center gap-x-3 py-1.5 px-2 cursor-pointer rounded-lg hover:bg-stone-100 dark:hover:bg-primary dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-neutral-600'>
                    <input
                      type='checkbox'
                      className='shrink-0 border-stone-300 rounded text-green-600 focus:ring-green-600 disabled:opacity-50 disabled:pointer-events-none dark:bg-primary dark:border-neutral-600 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-neutral-800'
                      id='hs-pro-dupfindch6'
                      defaultChecked=''
                    />
                    <label
                      htmlFor='hs-pro-dupfindch6'
                      className='flex flex-1 items-center gap-x-3 cursor-pointer text-[13px] text-stone-800 dark:text-neutral-300'
                    >
                      Payment Method
                    </label>
                  </div>
                  <div className='flex items-center gap-x-3 py-1.5 px-2 cursor-pointer rounded-lg hover:bg-stone-100 dark:hover:bg-primary dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-neutral-600'>
                    <input
                      type='checkbox'
                      className='shrink-0 border-stone-300 rounded text-green-600 focus:ring-green-600 disabled:opacity-50 disabled:pointer-events-none dark:bg-primary dark:border-neutral-600 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-neutral-800'
                      id='hs-pro-dupfindch7'
                      defaultChecked=''
                    />
                    <label
                      htmlFor='hs-pro-dupfindch7'
                      className='flex flex-1 items-center gap-x-3 cursor-pointer text-[13px] text-stone-800 dark:text-neutral-300'
                    >
                      Payment Status
                    </label>
                  </div>
                  <div className='flex items-center gap-x-3 py-1.5 px-2 cursor-pointer rounded-lg hover:bg-stone-100 dark:hover:bg-primary dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-neutral-600'>
                    <input
                      type='checkbox'
                      className='shrink-0 border-stone-300 rounded text-green-600 focus:ring-green-600 disabled:opacity-50 disabled:pointer-events-none dark:bg-primary dark:border-neutral-600 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-neutral-800'
                      id='hs-pro-dupfindch8'
                      defaultChecked=''
                    />
                    <label
                      htmlFor='hs-pro-dupfindch8'
                      className='flex flex-1 items-center gap-x-3 cursor-pointer text-[13px] text-stone-800 dark:text-neutral-300'
                    >
                      Items
                    </label>
                  </div>
                </div>
              </div>
              {/* End Dropdown */}
            </div>
            {/* End Filter Dropdown */}
          </div>
          {/* End Col */}
        </div>
      {/* End Filter Group */}
      <div>
        {/* Tab Content */}
        <div id='hs-pro-tabs-dut-all' role='tabpanel' aria-labelledby='hs-pro-tabs-dut-item-all'>
          {/* Table Section */}
          <div className='overflow-x-auto [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-stone-100 [&::-webkit-scrollbar-thumb]:bg-stone-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500'>
            <div className='min-w-full inline-block align-middle'>
              {/* Table */}
              <table className='min-w-full divide-y divide-stone-200 dark:divide-neutral-700'>
                <thead>
                  <tr className='border-t border-stone-200 dark:border-neutral-700'>
                    <th scope='col'>
                      {/* Sort Dropdown */}
                      <div className='hs-dropdown relative inline-flex w-full cursor-pointer'>
                        <button
                          id='hs-pro-eptors'
                          type='button'
                          className='px-5 py-2.5 text-start w-full flex items-center gap-x-1 text-sm font-normal text-stone-500 focus:outline-none focus:bg-stone-100 dark:text-neutral-500 dark:focus:bg-neutral-700'
                          aria-haspopup='menu'
                          aria-expanded='false'
                          aria-label='Dropdown'
                        >
                          Order
                          <svg
                            className='shrink-0 size-3.5'
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
                            <path d='m7 15 5 5 5-5' />
                            <path d='m7 9 5-5 5 5' />
                          </svg>
                        </button>
                        {/* Dropdown */}
                        <div
                          className='hs-dropdown-menu hs-dropdown-open:opacity-100 w-40 transition-[opacity,margin] duration opacity-0 hidden z-10 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_10px_rgba(0,0,0,0.2)] dark:bg-neutral-900'
                          role='menu'
                          aria-orientation='vertical'
                          aria-labelledby='hs-pro-eptors'
                        >
                          <div className='p-1'>
                            <button
                              type='button'
                              className='w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-none focus:bg-stone-100 dark:hover:bg-primary dark:focus:bg-primary'
                            >
                              <svg
                                className='shrink-0 size-3.5'
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
                                <path d='m5 12 7-7 7 7' />
                                <path d='M12 19V5' />
                              </svg>
                              Sort ascending
                            </button>
                            <button
                              type='button'
                              className='w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-none focus:bg-stone-100 dark:hover:bg-primary dark:focus:bg-primary'
                            >
                              <svg
                                className='shrink-0 size-3.5'
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
                                <path d='M12 5v14' />
                                <path d='m19 12-7 7-7-7' />
                              </svg>
                              Sort descending
                            </button>
                            <button
                              type='button'
                              className='w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-none focus:bg-stone-100 dark:hover:bg-primary dark:focus:bg-primary'
                            >
                              <svg
                                className='shrink-0 size-3.5'
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
                                <path d='m12 19-7-7 7-7' />
                                <path d='M19 12H5' />
                              </svg>
                              Move left
                            </button>
                            <button
                              type='button'
                              className='w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-none focus:bg-stone-100 dark:hover:bg-primary dark:focus:bg-primary'
                            >
                              <svg
                                className='shrink-0 size-3.5'
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
                                <path d='M5 12h14' />
                                <path d='m12 5 7 7-7 7' />
                              </svg>
                              Move right
                            </button>
                            <div className='my-1 border-t border-stone-200 dark:border-neutral-800' />
                            <button
                              type='button'
                              className='w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-none focus:bg-stone-100 dark:hover:bg-primary dark:focus:bg-primary'
                            >
                              <svg
                                className='shrink-0 size-3.5'
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
                                <path d='M9.88 9.88a3 3 0 1 0 4.24 4.24' />
                                <path d='M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68' />
                                <path d='M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61' />
                                <line x1={2} x2={22} y1={2} y2={22} />
                              </svg>
                              Hide in view
                            </button>
                          </div>
                        </div>
                        {/* End Dropdown */}
                      </div>
                      {/* End Sort Dropdown */}
                    </th>
                    <th scope='col' className='min-w-[230px] '>
                      {/* Sort Dropdown */}
                      <div className='hs-dropdown relative inline-flex w-full cursor-pointer'>
                        <button
                          id='hs-pro-eptprs'
                          type='button'
                          className='px-5 py-2.5 text-start w-full flex items-center gap-x-1 text-sm font-normal text-stone-500 focus:outline-none focus:bg-stone-100 dark:text-neutral-500 dark:focus:bg-neutral-700'
                          aria-haspopup='menu'
                          aria-expanded='false'
                          aria-label='Dropdown'
                        >
                          Purchased
                          <svg
                            className='shrink-0 size-3.5'
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
                            <path d='m7 15 5 5 5-5' />
                            <path d='m7 9 5-5 5 5' />
                          </svg>
                        </button>
                        {/* Dropdown */}
                        <div
                          className='hs-dropdown-menu hs-dropdown-open:opacity-100 w-40 transition-[opacity,margin] duration opacity-0 hidden z-10 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_10px_rgba(0,0,0,0.2)] dark:bg-neutral-900'
                          role='menu'
                          aria-orientation='vertical'
                          aria-labelledby='hs-pro-eptprs'
                        >
                          <div className='p-1'>
                            <button
                              type='button'
                              className='w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-none focus:bg-stone-100 dark:hover:bg-primary dark:focus:bg-primary'
                            >
                              <svg
                                className='shrink-0 size-3.5'
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
                                <path d='m5 12 7-7 7 7' />
                                <path d='M12 19V5' />
                              </svg>
                              Sort ascending
                            </button>
                            <button
                              type='button'
                              className='w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-none focus:bg-stone-100 dark:hover:bg-primary dark:focus:bg-primary'
                            >
                              <svg
                                className='shrink-0 size-3.5'
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
                                <path d='M12 5v14' />
                                <path d='m19 12-7 7-7-7' />
                              </svg>
                              Sort descending
                            </button>
                            <button
                              type='button'
                              className='w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-none focus:bg-stone-100 dark:hover:bg-primary dark:focus:bg-primary'
                            >
                              <svg
                                className='shrink-0 size-3.5'
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
                                <path d='m12 19-7-7 7-7' />
                                <path d='M19 12H5' />
                              </svg>
                              Move left
                            </button>
                            <button
                              type='button'
                              className='w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-none focus:bg-stone-100 dark:hover:bg-primary dark:focus:bg-primary'
                            >
                              <svg
                                className='shrink-0 size-3.5'
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
                                <path d='M5 12h14' />
                                <path d='m12 5 7 7-7 7' />
                              </svg>
                              Move right
                            </button>
                            <div className='my-1 border-t border-stone-200 dark:border-neutral-800' />
                            <button
                              type='button'
                              className='w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-none focus:bg-stone-100 dark:hover:bg-primary dark:focus:bg-primary'
                            >
                              <svg
                                className='shrink-0 size-3.5'
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
                                <path d='M9.88 9.88a3 3 0 1 0 4.24 4.24' />
                                <path d='M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68' />
                                <path d='M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61' />
                                <line x1={2} x2={22} y1={2} y2={22} />
                              </svg>
                              Hide in view
                            </button>
                          </div>
                        </div>
                        {/* End Dropdown */}
                      </div>
                      {/* End Sort Dropdown */}
                    </th>
                    <th scope='col' className='min-w-36'>
                      {/* Sort Dropdown */}
                      <div className='hs-dropdown relative inline-flex w-full cursor-pointer'>
                        <button
                          id='hs-pro-eptsts'
                          type='button'
                          className='px-5 py-2.5 text-start w-full flex items-center gap-x-1 text-sm font-normal text-stone-500 focus:outline-none focus:bg-stone-100 dark:text-neutral-500 dark:focus:bg-neutral-700'
                          aria-haspopup='menu'
                          aria-expanded='false'
                          aria-label='Dropdown'
                        >
                          Status
                          <svg
                            className='shrink-0 size-3.5'
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
                            <path d='m7 15 5 5 5-5' />
                            <path d='m7 9 5-5 5 5' />
                          </svg>
                        </button>
                        {/* Dropdown */}
                        <div
                          className='hs-dropdown-menu hs-dropdown-open:opacity-100 w-40 transition-[opacity,margin] duration opacity-0 hidden z-10 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_10px_rgba(0,0,0,0.2)] dark:bg-neutral-900'
                          role='menu'
                          aria-orientation='vertical'
                          aria-labelledby='hs-pro-eptsts'
                        >
                          <div className='p-1'>
                            <button
                              type='button'
                              className='w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-none focus:bg-stone-100 dark:hover:bg-primary dark:focus:bg-primary'
                            >
                              <svg
                                className='shrink-0 size-3.5'
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
                                <path d='m5 12 7-7 7 7' />
                                <path d='M12 19V5' />
                              </svg>
                              Sort ascending
                            </button>
                            <button
                              type='button'
                              className='w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-none focus:bg-stone-100 dark:hover:bg-primary dark:focus:bg-primary'
                            >
                              <svg
                                className='shrink-0 size-3.5'
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
                                <path d='M12 5v14' />
                                <path d='m19 12-7 7-7-7' />
                              </svg>
                              Sort descending
                            </button>
                            <button
                              type='button'
                              className='w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-none focus:bg-stone-100 dark:hover:bg-primary dark:focus:bg-primary'
                            >
                              <svg
                                className='shrink-0 size-3.5'
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
                                <path d='m12 19-7-7 7-7' />
                                <path d='M19 12H5' />
                              </svg>
                              Move left
                            </button>
                            <button
                              type='button'
                              className='w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-none focus:bg-stone-100 dark:hover:bg-primary dark:focus:bg-primary'
                            >
                              <svg
                                className='shrink-0 size-3.5'
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
                                <path d='M5 12h14' />
                                <path d='m12 5 7 7-7 7' />
                              </svg>
                              Move right
                            </button>
                            <div className='my-1 border-t border-stone-200 dark:border-neutral-800' />
                            <button
                              type='button'
                              className='w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-none focus:bg-stone-100 dark:hover:bg-primary dark:focus:bg-primary'
                            >
                              <svg
                                className='shrink-0 size-3.5'
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
                                <path d='M9.88 9.88a3 3 0 1 0 4.24 4.24' />
                                <path d='M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68' />
                                <path d='M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61' />
                                <line x1={2} x2={22} y1={2} y2={22} />
                              </svg>
                              Hide in view
                            </button>
                          </div>
                        </div>
                        {/* End Dropdown */}
                      </div>
                      {/* End Sort Dropdown */}
                    </th>
                    <th scope='col' className='min-w-36'>
                      {/* Sort Dropdown */}
                      <div className='hs-dropdown relative inline-flex w-full cursor-pointer'>
                        <button
                          id='hs-pro-eptcts'
                          type='button'
                          className='px-5 py-2.5 text-start w-full flex items-center gap-x-1 text-sm font-normal text-stone-500 focus:outline-none focus:bg-stone-100 dark:text-neutral-500 dark:focus:bg-neutral-700'
                          aria-haspopup='menu'
                          aria-expanded='false'
                          aria-label='Dropdown'
                        >
                          Customer
                          <svg
                            className='shrink-0 size-3.5'
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
                            <path d='m7 15 5 5 5-5' />
                            <path d='m7 9 5-5 5 5' />
                          </svg>
                        </button>
                        {/* Dropdown */}
                        <div
                          className='hs-dropdown-menu hs-dropdown-open:opacity-100 w-40 transition-[opacity,margin] duration opacity-0 hidden z-10 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_10px_rgba(0,0,0,0.2)] dark:bg-neutral-900'
                          role='menu'
                          aria-orientation='vertical'
                          aria-labelledby='hs-pro-eptcts'
                        >
                          <div className='p-1'>
                            <button
                              type='button'
                              className='w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-none focus:bg-stone-100 dark:hover:bg-primary dark:focus:bg-primary'
                            >
                              <svg
                                className='shrink-0 size-3.5'
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
                                <path d='m5 12 7-7 7 7' />
                                <path d='M12 19V5' />
                              </svg>
                              Sort ascending
                            </button>
                            <button
                              type='button'
                              className='w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-none focus:bg-stone-100 dark:hover:bg-primary dark:focus:bg-primary'
                            >
                              <svg
                                className='shrink-0 size-3.5'
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
                                <path d='M12 5v14' />
                                <path d='m19 12-7 7-7-7' />
                              </svg>
                              Sort descending
                            </button>
                            <button
                              type='button'
                              className='w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-none focus:bg-stone-100 dark:hover:bg-primary dark:focus:bg-primary'
                            >
                              <svg
                                className='shrink-0 size-3.5'
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
                                <path d='m12 19-7-7 7-7' />
                                <path d='M19 12H5' />
                              </svg>
                              Move left
                            </button>
                            <button
                              type='button'
                              className='w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-none focus:bg-stone-100 dark:hover:bg-primary dark:focus:bg-primary'
                            >
                              <svg
                                className='shrink-0 size-3.5'
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
                                <path d='M5 12h14' />
                                <path d='m12 5 7 7-7 7' />
                              </svg>
                              Move right
                            </button>
                            <div className='my-1 border-t border-stone-200 dark:border-neutral-800' />
                            <button
                              type='button'
                              className='w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-none focus:bg-stone-100 dark:hover:bg-primary dark:focus:bg-primary'
                            >
                              <svg
                                className='shrink-0 size-3.5'
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
                                <path d='M9.88 9.88a3 3 0 1 0 4.24 4.24' />
                                <path d='M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68' />
                                <path d='M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61' />
                                <line x1={2} x2={22} y1={2} y2={22} />
                              </svg>
                              Hide in view
                            </button>
                          </div>
                        </div>
                        {/* End Dropdown */}
                      </div>
                      {/* End Sort Dropdown */}
                    </th>
                    <th scope='col' className='min-w-[165px] '>
                      {/* Sort Dropdown */}
                      <div className='hs-dropdown relative inline-flex w-full cursor-pointer'>
                        <button
                          id='hs-pro-eptpms'
                          type='button'
                          className='px-5 py-2.5 text-start w-full flex items-center gap-x-1 text-sm font-normal text-stone-500 focus:outline-none focus:bg-stone-100 dark:text-neutral-500 dark:focus:bg-neutral-700'
                          aria-haspopup='menu'
                          aria-expanded='false'
                          aria-label='Dropdown'
                        >
                          Payment method
                          <svg
                            className='shrink-0 size-3.5'
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
                            <path d='m7 15 5 5 5-5' />
                            <path d='m7 9 5-5 5 5' />
                          </svg>
                        </button>
                        {/* Dropdown */}
                        <div
                          className='hs-dropdown-menu hs-dropdown-open:opacity-100 w-40 transition-[opacity,margin] duration opacity-0 hidden z-10 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_10px_rgba(0,0,0,0.2)] dark:bg-neutral-900'
                          role='menu'
                          aria-orientation='vertical'
                          aria-labelledby='hs-pro-eptpms'
                        >
                          <div className='p-1'>
                            <button
                              type='button'
                              className='w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-none focus:bg-stone-100 dark:hover:bg-primary dark:focus:bg-primary'
                            >
                              <svg
                                className='shrink-0 size-3.5'
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
                                <path d='m5 12 7-7 7 7' />
                                <path d='M12 19V5' />
                              </svg>
                              Sort ascending
                            </button>
                            <button
                              type='button'
                              className='w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-none focus:bg-stone-100 dark:hover:bg-primary dark:focus:bg-primary'
                            >
                              <svg
                                className='shrink-0 size-3.5'
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
                                <path d='M12 5v14' />
                                <path d='m19 12-7 7-7-7' />
                              </svg>
                              Sort descending
                            </button>
                            <button
                              type='button'
                              className='w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-none focus:bg-stone-100 dark:hover:bg-primary dark:focus:bg-primary'
                            >
                              <svg
                                className='shrink-0 size-3.5'
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
                                <path d='m12 19-7-7 7-7' />
                                <path d='M19 12H5' />
                              </svg>
                              Move left
                            </button>
                            <button
                              type='button'
                              className='w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-none focus:bg-stone-100 dark:hover:bg-primary dark:focus:bg-primary'
                            >
                              <svg
                                className='shrink-0 size-3.5'
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
                                <path d='M5 12h14' />
                                <path d='m12 5 7 7-7 7' />
                              </svg>
                              Move right
                            </button>
                            <div className='my-1 border-t border-stone-200 dark:border-neutral-800' />
                            <button
                              type='button'
                              className='w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-none focus:bg-stone-100 dark:hover:bg-primary dark:focus:bg-primary'
                            >
                              <svg
                                className='shrink-0 size-3.5'
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
                                <path d='M9.88 9.88a3 3 0 1 0 4.24 4.24' />
                                <path d='M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68' />
                                <path d='M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61' />
                                <line x1={2} x2={22} y1={2} y2={22} />
                              </svg>
                              Hide in view
                            </button>
                          </div>
                        </div>
                        {/* End Dropdown */}
                      </div>
                      {/* End Sort Dropdown */}
                    </th>
                    <th scope='col' className='min-w-[155px] '>
                      {/* Sort Dropdown */}
                      <div className='hs-dropdown relative inline-flex w-full cursor-pointer'>
                        <button
                          id='hs-pro-eptpss'
                          type='button'
                          className='px-5 py-2.5 text-start w-full flex items-center gap-x-1 text-sm font-normal text-stone-500 focus:outline-none focus:bg-stone-100 dark:text-neutral-500 dark:focus:bg-neutral-700'
                          aria-haspopup='menu'
                          aria-expanded='false'
                          aria-label='Dropdown'
                        >
                          Payment status
                          <svg
                            className='shrink-0 size-3.5'
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
                            <path d='m7 15 5 5 5-5' />
                            <path d='m7 9 5-5 5 5' />
                          </svg>
                        </button>
                        {/* Dropdown */}
                        <div
                          className='hs-dropdown-menu hs-dropdown-open:opacity-100 w-40 transition-[opacity,margin] duration opacity-0 hidden z-10 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_10px_rgba(0,0,0,0.2)] dark:bg-neutral-900'
                          role='menu'
                          aria-orientation='vertical'
                          aria-labelledby='hs-pro-eptpss'
                        >
                          <div className='p-1'>
                            <button
                              type='button'
                              className='w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-none focus:bg-stone-100 dark:hover:bg-primary dark:focus:bg-primary'
                            >
                              <svg
                                className='shrink-0 size-3.5'
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
                                <path d='m5 12 7-7 7 7' />
                                <path d='M12 19V5' />
                              </svg>
                              Sort ascending
                            </button>
                            <button
                              type='button'
                              className='w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-none focus:bg-stone-100 dark:hover:bg-primary dark:focus:bg-primary'
                            >
                              <svg
                                className='shrink-0 size-3.5'
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
                                <path d='M12 5v14' />
                                <path d='m19 12-7 7-7-7' />
                              </svg>
                              Sort descending
                            </button>
                            <button
                              type='button'
                              className='w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-none focus:bg-stone-100 dark:hover:bg-primary dark:focus:bg-primary'
                            >
                              <svg
                                className='shrink-0 size-3.5'
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
                                <path d='m12 19-7-7 7-7' />
                                <path d='M19 12H5' />
                              </svg>
                              Move left
                            </button>
                            <button
                              type='button'
                              className='w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-none focus:bg-stone-100 dark:hover:bg-primary dark:focus:bg-primary'
                            >
                              <svg
                                className='shrink-0 size-3.5'
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
                                <path d='M5 12h14' />
                                <path d='m12 5 7 7-7 7' />
                              </svg>
                              Move right
                            </button>
                            <div className='my-1 border-t border-stone-200 dark:border-neutral-800' />
                            <button
                              type='button'
                              className='w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-none focus:bg-stone-100 dark:hover:bg-primary dark:focus:bg-primary'
                            >
                              <svg
                                className='shrink-0 size-3.5'
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
                                <path d='M9.88 9.88a3 3 0 1 0 4.24 4.24' />
                                <path d='M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68' />
                                <path d='M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61' />
                                <line x1={2} x2={22} y1={2} y2={22} />
                              </svg>
                              Hide in view
                            </button>
                          </div>
                        </div>
                        {/* End Dropdown */}
                      </div>
                      {/* End Sort Dropdown */}
                    </th>
                    <th scope='col'>
                      {/* Sort Dropdown */}
                      <div className='hs-dropdown relative inline-flex w-full cursor-pointer'>
                        <button
                          id='hs-pro-eptits'
                          type='button'
                          className='px-5 py-2.5 text-start w-full flex items-center gap-x-1 text-sm font-normal text-stone-500 focus:outline-none focus:bg-stone-100 dark:text-neutral-500 dark:focus:bg-neutral-700'
                          aria-haspopup='menu'
                          aria-expanded='false'
                          aria-label='Dropdown'
                        >
                          Items
                          <svg
                            className='shrink-0 size-3.5'
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
                            <path d='m7 15 5 5 5-5' />
                            <path d='m7 9 5-5 5 5' />
                          </svg>
                        </button>
                        {/* Dropdown */}
                        <div
                          className='hs-dropdown-menu hs-dropdown-open:opacity-100 w-40 transition-[opacity,margin] duration opacity-0 hidden z-10 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_10px_rgba(0,0,0,0.2)] dark:bg-neutral-900'
                          role='menu'
                          aria-orientation='vertical'
                          aria-labelledby='hs-pro-eptits'
                        >
                          <div className='p-1'>
                            <button
                              type='button'
                              className='w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-none focus:bg-stone-100 dark:hover:bg-primary dark:focus:bg-primary'
                            >
                              <svg
                                className='shrink-0 size-3.5'
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
                                <path d='m5 12 7-7 7 7' />
                                <path d='M12 19V5' />
                              </svg>
                              Sort ascending
                            </button>
                            <button
                              type='button'
                              className='w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-none focus:bg-stone-100 dark:hover:bg-primary dark:focus:bg-primary'
                            >
                              <svg
                                className='shrink-0 size-3.5'
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
                                <path d='M12 5v14' />
                                <path d='m19 12-7 7-7-7' />
                              </svg>
                              Sort descending
                            </button>
                            <button
                              type='button'
                              className='w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-none focus:bg-stone-100 dark:hover:bg-primary dark:focus:bg-primary'
                            >
                              <svg
                                className='shrink-0 size-3.5'
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
                                <path d='m12 19-7-7 7-7' />
                                <path d='M19 12H5' />
                              </svg>
                              Move left
                            </button>
                            <button
                              type='button'
                              className='w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-none focus:bg-stone-100 dark:hover:bg-primary dark:focus:bg-primary'
                            >
                              <svg
                                className='shrink-0 size-3.5'
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
                                <path d='M5 12h14' />
                                <path d='m12 5 7 7-7 7' />
                              </svg>
                              Move right
                            </button>
                            <div className='my-1 border-t border-stone-200 dark:border-neutral-800' />
                            <button
                              type='button'
                              className='w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-none focus:bg-stone-100 dark:hover:bg-primary dark:focus:bg-primary'
                            >
                              <svg
                                className='shrink-0 size-3.5'
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
                                <path d='M9.88 9.88a3 3 0 1 0 4.24 4.24' />
                                <path d='M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68' />
                                <path d='M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61' />
                                <line x1={2} x2={22} y1={2} y2={22} />
                              </svg>
                              Hide in view
                            </button>
                          </div>
                        </div>
                        {/* End Dropdown */}
                      </div>
                      {/* End Sort Dropdown */}
                    </th>
                    <th scope='col' />
                  </tr>
                </thead>
                <tbody className='divide-y divide-stone-200 dark:divide-neutral-700'>
                  <tr>
                    <td className='size-px whitespace-nowrap px-4 py-1'>
                      <a
                        className='text-sm text-green-600 decoration-2 hover:underline font-medium focus:outline-none focus:underline dark:text-green-400 dark:hover:text-green-500'
                        href='../../pro/ecommerce/order-details.html'
                      >
                        #235325
                      </a>
                    </td>
                    <td className='size-px whitespace-nowrap px-4 py-1'>
                      <span className='text-sm text-stone-600 dark:text-neutral-400'>
                        Calvin Klein T-shirts
                      </span>
                    </td>
                    <td className='size-px whitespace-nowrap px-4 py-1'>
                      <span className='text-sm text-stone-600 dark:text-neutral-400'>
                        Calvin Klein T-shirts
                      </span>
                    </td>

                    <td className='size-px whitespace-nowrap px-4 py-1'>
                      <span className='text-sm text-stone-600 dark:text-neutral-400'>
                        Calvin Klein T-shirts
                      </span>
                    </td>
                    <td className='size-px whitespace-nowrap px-4 py-1'>
                      <span className='text-sm text-stone-600 dark:text-neutral-400'>
                        Calvin Klein T-shirts
                      </span>
                    </td>
                    <td className='size-px whitespace-nowrap px-4 py-1'>
                      <span className='text-sm text-stone-600 dark:text-neutral-400'>
                        Calvin Klein T-shirts
                      </span>
                    </td>
                    <td className='size-px whitespace-nowrap px-4 py-1'>
                      <span className='text-sm text-stone-600 dark:text-neutral-400'>
                        Calvin Klein T-shirts
                      </span>
                    </td>
                    <td className='size-px whitespace-nowrap px-4 py-1 text-end'>
                      <div className='hs-dropdown [--auto-close:inside] [--placement:bottom-right] relative inline-flex'>
                        <button
                          id='hs-pro-errtmd1'
                          type='button'
                          className='size-7 inline-flex justify-center items-center gap-x-2 rounded-lg border border-stone-200 bg-white text-stone-800 shadow-sm hover:bg-stone-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-50 dark:bg-primary dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700'
                          aria-haspopup='menu'
                          aria-expanded='false'
                          aria-label='Dropdown'
                        >
                          <svg
                            className='shrink-0 size-3.5'
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
                            <circle cx={12} cy={12} r={1} />
                            <circle cx={12} cy={5} r={1} />
                            <circle cx={12} cy={19} r={1} />
                          </svg>
                        </button>
                        <div
                          className='hs-dropdown-menu hs-dropdown-open:opacity-100 w-24 transition-[opacity,margin] duration opacity-0 hidden z-10 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_10px_rgba(0,0,0,0.2)] dark:bg-neutral-900'
                          role='menu'
                          aria-orientation='vertical'
                          aria-labelledby='hs-pro-errtmd1'
                        >
                          <div className='p-1'>
                            <button
                              type='button'
                              className='w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-100 dark:text-neutral-300 dark:hover:bg-primary dark:focus:bg-primary'
                            >
                              Edit
                            </button>
                            <button
                              type='button'
                              className='w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-100 dark:text-neutral-300 dark:hover:bg-primary dark:focus:bg-primary'
                            >
                              Duplicate
                            </button>
                            <div className='my-1 border-t border-stone-200 dark:border-neutral-800' />
                            <button
                              type='button'
                              className='w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-100 dark:text-neutral-300 dark:hover:bg-primary dark:focus:bg-primary'
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              {/* End Table */}
            </div>
          </div>
          {/* End Table Section */}
          {/* Footer */}
          <div className='mt-5 flex flex-wrap justify-between items-center gap-2'>
            <p className='text-sm text-stone-800 dark:text-neutral-200'>
              <span className='font-medium'>27</span>
              <span className='text-stone-500 dark:text-neutral-500'>results</span>
            </p>
            {/* Pagination */}
            <nav className='flex justify-end items-center gap-x-1' aria-label='Pagination'>
              <button
                type='button'
                className='min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-100 dark:text-white dark:hover:bg-white/10 dark:focus:bg-neutral-700'
                aria-label='Previous'
              >
                <svg
                  className='shrink-0 size-3.5'
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
                  <path d='m15 18-6-6 6-6' />
                </svg>
                <span className='sr-only'>Previous</span>
              </button>
              <div className='flex items-center gap-x-1'>
                <span
                  className='min-h-[38px] min-w-[38px] flex justify-center items-center bg-stone-100 text-stone-800 py-2 px-3 text-sm rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:text-white'
                  aria-current='page'
                >
                  1
                </span>
                <span className='min-h-[38px] flex justify-center items-center text-stone-500 py-2 px-1.5 text-sm dark:text-neutral-500'>
                  of
                </span>
                <span className='min-h-[38px] flex justify-center items-center text-stone-500 py-2 px-1.5 text-sm dark:text-neutral-500'>
                  3
                </span>
              </div>
              <button
                type='button'
                className='min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-100 dark:text-white dark:hover:bg-white/10 dark:focus:bg-neutral-700'
                aria-label='Next'
              >
                <span className='sr-only'>Next</span>
                <svg
                  className='shrink-0 size-3.5'
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
                  <path d='m9 18 6-6-6-6' />
                </svg>
              </button>
            </nav>
            {/* End Pagination */}
          </div>
          {/* End Footer */}
        </div>
      </div>
    </div>
  );
}

export default ResultList;
