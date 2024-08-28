import React from 'react';
import imgMail from '../assets/mail.png';

const MessageCard = ({ name, text, color }) => {
  return (
      <div className=' h-[45vh] w-[20vw] border-4 p-1 border-black bg-white'>
        
            <div className='h-[10%] flex justify-between mb-1'>
                    <div className='flex justify-between items-center gap-2'>
                        <p className='text-white bg-black font-bold tracking-wide'>ABC</p>
                        <p className='font-semibold tracking-wide'>To : {name}</p>
                    </div>
                    <div className='h-[3.5vh] w-auto flex justify-center items-center'>
                        <img src={imgMail} alt='mail' className='h-full w-auto'/>
                    </div>
            </div>

            <div className={`h-[82%] w-full overflow-auto text-xl p-2 ${color}`}>
            {text}
            </div>
            
            <div className='flex justify-between items-center'>
              <p className='font-bold tracking-wide'>Send</p>
              <p className='font-semibold tracking-wide'>#unreadechoes</p>
              <p className='font-bold tracking-wide'>Back</p>
            </div> 
      </div>
  );
};

export default MessageCard;