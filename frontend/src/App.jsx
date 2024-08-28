import React from 'react';
import imgMail from './assets/mail.png'
import MessageCard from './components/MessageCard';
// import TypingEffect from '../components/TypingEffect';


function App() {
  const name = 'John Doe';
  const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, velit ac ultrices aliquam, justo nunc tincidunt nisl, non tincidunt nunc nisl id nunc. Sed nec nisl nec nisl aliquet tincidunt. Nulla facilisi. Sed euismod, velit ac ultrices aliquam, justo nunc tincidunt nisl, non tincidunt nunc nisl id nunc. Sed nec nisl nec nisl aliquet tincidunt. Nulla facilisi.';
  const co = 'bg-blue-500';

  return (
    <div className='flex flex-col'>
      <div className='flex justify-between py-8 px-16'>
        <h1 className='text-4xl font-bold text-center'>Unread Echoes</h1>
        <button className='py-4 px-6 bg-black font-semibold text-white rounded-xl'>Leave an echo</button>
      </div>
      {/* <TypingEffect /> */}
    <div className='flex justify-center border-black border-2 bg-slate-500 items-center'>
      <MessageCard name={name} text={text} color={co} />
    
    </div>

    </div>
  );
}

export default App;