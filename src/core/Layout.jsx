import React from 'react';
import Sidebar from './Sidebar.jsx';
import Header from './Header.jsx';

function Layout({ children }) {
  return (
    <div className='bg-tertiary h-screen w-screen'>
      <Sidebar /> <div className='bg-secondary'>{children}</div>
    </div>
  );
}

export default Layout;
