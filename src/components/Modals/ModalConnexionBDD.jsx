import React from 'react';
import Modal from 'react-modal';
import ConnexionPage from '../../pages/ConnexionPage';
import NewConnectionForm from '../Forms/NewConnectionForm';

function ModalConnexionBDD({ modalIsOpen, openModal, closeModal }) {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  return (
    <div>
      <div
        id='hs-scale-animation-modal'
        class='hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none'
        role='dialog'
        tabindex='-1'
        aria-labelledby='hs-scale-animation-modal-label'
      >
        <div class='hs-overlay-animation-target hs-overlay-open:scale-100 hs-overlay-open:opacity-100 scale-95 opacity-0 ease-in-out transition-all duration-200 sm:max-w-lg sm:w-full m-3 sm:mx-auto min-h-[calc(100%-3.5rem)] flex items-center'>
          <div class='w-full flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto dark:bg-primary dark:border-neutral-700 dark:shadow-neutral-700/70'>

            {/* Header */}
            <div class='flex justify-between items-center py-3 px-4 border-b dark:border-neutral-700'>
              <h3
                id='hs-scale-animation-modal-label'
                class='font-bold text-gray-800 dark:text-white'
              >
                Connexion
              </h3>
              <button
                type='button'
                class='size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:text-neutral-400 dark:focus:bg-neutral-600'
                aria-label='Close'
                data-hs-overlay='#hs-scale-animation-modal'
              >
                <span class='sr-only'>Close</span>
                <svg
                  class='shrink-0 size-4'
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                >
                  <path d='M18 6 6 18'></path>
                  <path d='m6 6 12 12'></path>
                </svg>
              </button>
            </div>
            {/* Content */}
            <div class='p-4 overflow-y-auto'>
                <NewConnectionForm/>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalConnexionBDD;
