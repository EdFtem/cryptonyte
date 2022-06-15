import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from '../Sidebar'

export default function Layout({ children }) {
  return (
    <>
    <div className='flex'>
        <Sidebar/>
        <main className='flex-1 ml-44'>
            {children}
        </main>     
    </div>     
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node
};
