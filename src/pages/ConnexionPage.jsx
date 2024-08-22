import React from 'react';
import ModalConnexionBDD from '../components/Modals/ModalConnexionBDD';
import { FaDatabase } from 'react-icons/fa';

function ConnexionPage() {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <main id='content' className='lg:ps-[20.5rem] pt-[59px] lg:pt-0'>
      <div className='p-2 sm:p-5 sm:py-0 sm:py-5 space-y-5'>
        <div className='p-4 flex flex-col justify-center h-72 md:h-96 min-h-[calc(100vh-115px)] sm:min-h-[calc(100vh-40px)]  bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-primary dark:border-neutral-700'>
          <div className='m-auto  text-[#909090] text-right flex flex-col gap-4'>
            <FaDatabase size={200} className='m-auto text-[#909090] my-6' />
            <div className='flex gap-2 justify-end'>
              <h2>Afficher toutes les commandes</h2>
              <span className="bg-secondary rounded-md p-0.5">SHIFT + R</span>
            </div>
            <div className='flex gap-2 justify-end'>
              <h2>Nouvelle connection</h2>
              <span className="bg-secondary rounded-md p-0.5">CTRL + N</span>
            </div>
            <div className='flex gap-2 justify-end'>
              <h2>Nouvelle Table</h2>
              <span className="bg-secondary rounded-md p-0.5">SHIFT + N</span>
            </div>
            <div className='flex gap-2 justify-end'>
              <h2>Ping</h2>
              <span className="bg-secondary rounded-md p-0.5">CTRL + SHIFT + P</span>
            </div>
          </div>
        </div>
        {/* End Card */}
      </div>
      <ModalConnexionBDD modalIsOpen={modalIsOpen} openModal={openModal} closeModal={closeModal} />
    </main>
  );
}

export default ConnexionPage;
