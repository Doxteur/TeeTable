import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const NewConnectionForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [enableSSL, setEnableSSL] = useState(false);
  const [enableSSHTunnel, setEnableSSHTunnel] = useState(false);
  const [readOnlyMode, setReadOnlyMode] = useState(false);
  const [savePasswords, setSavePasswords] = useState(true);

  return (
    <div className='p-4 bg-primary text-white max-w-md mx-auto '>
      <div className='flex justify-between items-center mb-4'>
        <button className='text-blue-400 text-sm'>Via URL</button>
      </div>

      <form className='space-y-4'>
        <div>
          <h3 className='text-lg font-semibold mb-2'>Nom Connection</h3>
          <input
            type='text'
            placeholder='Nom'
            className='w-full bg-primary p-2 rounded mb-2 border-2 border-secondary'
          />
        </div>
        <div>
          <label className='block text-sm mb-1'>Type de connection</label>
          <select className='w-full bg-primary appearance-none border-2 border-secondary p-2'>
            <option>TiDB</option>
          </select>
        </div>

        <div>
          <label className='block text-sm mb-1'>Mode de connection</label>
          <select className='w-full bg-primary rounded appearance-none border-2 border-secondary p-2'>
            <option>Host and Port</option>
          </select>
        </div>

        <div className='flex space-x-2'>
          <div className='flex-grow'>
            <label className='block text-sm mb-1'>Host</label>
            <input
              type='text'
              defaultValue='localhost'
              className='w-full bg-primary rounded border-2 border-secondary p-2'
            />
          </div>
          <div className='w-24'>
            <label className='block text-sm mb-1'>Port</label>
            <input
              type='text'
              defaultValue='4000'
              className='w-full bg-primary rounded border-2 border-secondary p-2'
            />
          </div>
        </div>

        <div className='flex items-center justify-between'>
          <span className='text-sm'>Enable SSL</span>
          <button
            type='button'
            className={`w-12 h-6 rounded-full ${
              enableSSL ? 'bg-blue-600' : 'bg-gray-600'
            } transition-colors duration-200 ease-in-out`}
            onClick={() => setEnableSSL(!enableSSL)}
          >
            <span
              className={`block w-4 h-4 bg-white rounded-full transform transition-transform duration-200 ease-in-out ${
                enableSSL ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
        </div>

        <div className='flex space-x-2'>
          <div className='flex-grow'>
            <label className='block text-sm mb-1'>User</label>
            <input
              type='text'
              className='w-full bg-primary rounded border-2 border-secondary p-2'
            />
          </div>
          <div className='flex-grow relative'>
            <label className='block text-sm mb-1'>Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              className='w-full bg-primary rounded pr-10 border-2 border-secondary p-2'
            />
            <button
              type='button'
              className='absolute right-2 top-8 text-gray-400'
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
            </button>
          </div>
        </div>

        <div>
          <label className='block text-sm mb-1'>Default Database</label>
          <input type='text' className='w-full bg-primary p-2 rounded border-2 border-secondary' />
        </div>

        <div className='flex items-center justify-between'>
          <span className='text-sm'>SSH Tunnel</span>
          <button
            type='button'
            className={`w-12 h-6 rounded-full ${
              enableSSHTunnel ? 'bg-blue-600' : 'bg-gray-600'
            } transition-colors duration-200 ease-in-out`}
            onClick={() => setEnableSSHTunnel(!enableSSHTunnel)}
          >
            <span
              className={`block w-4 h-4 bg-white rounded-full transform transition-transform duration-200 ease-in-out ${
                enableSSHTunnel ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
        </div>


        <div className='flex justify-end space-x-2'>
          <button type='button' className='bg-secondary text-white px-4 py-2 rounded hover:bg-gray-600 transition-colors duration-200 ease-in-out'>
            Test
          </button>
          <button type='submit' className='bg-green-500 text-white px-4 py-2 rounded'>
            Connect
          </button>
        </div>
      </form>

      <div className='mt-6'>
        <div className='flex items-center justify-between'>
        </div>
      </div>
    </div>
  );
};

export default NewConnectionForm;
