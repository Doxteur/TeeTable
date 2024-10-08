import React, { useState, useEffect } from 'react';
import Side_TableName from './Side_TableName.jsx';
import { FaPlus, FaCircle } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import Database from '@tauri-apps/plugin-sql';
import { setSelectedConnection } from '../../app/reducers/Connection.js';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setTableData } from '../../app/reducers/Tables.js';

function Sidebar_connexions() {
  const connections = useSelector((state) => state.connection.connections);
  const data = useSelector((state) => state.tables.data);

  const [connectionStatuses, setConnectionStatuses] = useState({});
  const dispatch = useDispatch();

  const connectToDatabase = async (connection) => {
    const { username, password, host, port, database } = connection;
    const connectionString = `mysql://${username}:${password}@${host}:${port}/${database}`;

    try {
      const db = await Database.load(connectionString);
      console.log('Connexion à la base de données réussie:', db);

      return { success: true, db };
    } catch (error) {
      return { success: false, error };
    }
  };

  const connectToAllDatabases = async () => {
    const statuses = {};
    for (const connection of connections) {
      const result = await connectToDatabase(connection);
      console.log(result);
      statuses[connection.name] = result.success;
    }
    setConnectionStatuses(statuses);
  };

  useEffect(() => {
    if (connections.length > 0) {
      console.log('Tentative de connexion aux bases de données');
      connectToAllDatabases();
    }
  }, [connections]);
  const openDatabase = (connection) => {
    dispatch(setSelectedConnection(connection));
  };

  const renderConnectionItem = (connection) => {
    const isConnected = connectionStatuses[connection.name];
    return (
      <div key={connection.name} className='flex items-center gap-2 mb-2'>
        <FaCircle color={isConnected ? 'green' : 'red'} size={10} />
        <Link to='/'>
          <button className='text-white cursor:pointer' onClick={() => openDatabase(connection)}>
            {connection.name}
          </button>
        </Link>
      </div>
    );
  };

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
              <div className='flex items-center gap-2 mb-4'>
                <h2 className='text-white'>Local</h2>
                <button
                  type='button'
                  aria-haspopup='dialog'
                  aria-expanded='false'
                  aria-controls='hs-scale-animation-modal'
                  data-hs-overlay='#hs-scale-animation-modal'
                >
                  <FaPlus
                    color='white'
                    size={10}
                    className='hover:scale-125 transition-all hover:cursor-pointer'
                  />
                </button>
              </div>
              {connections.map(renderConnectionItem)}
              <div className='flex items-center gap-2 mt-4'>
                <h2 className='text-yellow-500 '>Staging</h2>
                <FaPlus
                  color='white'
                  size={10}
                  className='hover:scale-125 transition-all hover:cursor-pointer'
                />
              </div>
              <div className='flex items-center gap-2 mt-4'>
                <h2 className='text-red-500'>Production</h2>
                <FaPlus
                  color='white'
                  size={10}
                  className='hover:scale-125 transition-all hover:cursor-pointer'
                />
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

export default Sidebar_connexions;
