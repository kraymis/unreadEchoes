import React from 'react';
import imgMail from '../assets/mail.png';

const MessageCard = ({ name, text, color }) => {
  return (
      <div className=' h-[40vh] md:h-[60vh] w-full p-1 border-4 border-black outline outline-4 outline-white bg-white shadow-xl'>
        
            <div className='h-[10%] flex justify-between items-center mb-1'>
                    <div className='flex justify-between items-center gap-2'>
                        <p className='text-white bg-black font-bold text-lg px-2 tracking-wider'>ABC</p>
                        <p className='font-semibold text-lg tracking-wide'>To : {name}</p>
                    </div>
                    <div className='h-[3.5vh] w-auto flex justify-center items-center'>
                        <img src={imgMail} alt='mail' className='h-full w-auto'/>
                    </div>
            </div>

            <div style={{ backgroundColor: color }} className={`h-[83%] w-full overflow-auto  py-2 px-4`}>
            <p className='text-8xl text-black font-medium blur-[0.3px]'>{text}</p>
            </div>
            
            <div className='flex justify-between items-center '>
            <p className='font-bold tracking-wide '>Send</p>
              <p className='font-semibold tracking-wide '>#unreadechoes</p>
              <p className='font-bold tracking-wide '>Back</p>
            </div> 
      </div>
  );
};

export default MessageCard;