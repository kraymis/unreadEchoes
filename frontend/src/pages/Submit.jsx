// src/pages/Contact.jsx
import React from 'react';
import UnsentProject from '../components/UnsentProject';

const Submit = () => {
  return (
    <div className='flex flex-col items-center justify-center h-full gap-4'>
     <h1 className='font-semibold text-5xl mb-8'>Leave an echo</h1>
     <UnsentProject/>
    </div>
  );
};

export default Submit;
