// src/pages/Contact.jsx
import React from 'react';
import UnsentProject from '../components/UnsentProject';

const Submit = () => {
  return (
    <div className='flex flex-col items-center gap-8 justify-center h-screen'>
     <h1 className='font-semibold text-5xl'>Leave an echo</h1>
     <UnsentProject/>
    </div>
  );
};

export default Submit;
