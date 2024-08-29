import React from 'react';
import imgMail from '../assets/mail.png';

// Define a mapping of background colors to text colors
const colorMapping = {
  '#FFFFFF': 'text-black',  // White background -> Black text
  '#a2a2a2': 'text-black',  // Light Gray background -> Black text
  '#6b6b6b': 'text-white',  // Dark Gray background -> White text
  '#000000': 'text-white',  // Black background -> White text
  '#fda44a': 'text-black',  // Orange background -> Black text
  '#fefe7c': 'text-black',  // Yellow background -> Black text
  '#eddbba': 'text-black',  // Beige background -> Black text
  '#a27040': 'text-white',  // Brown background -> White text
  '#a9b8bb': 'text-black',  // Light Blue background -> Black text
  '#698c8e': 'text-white',  // Teal background -> White text
  '#a9d1ee': 'text-black',  // Sky Blue background -> Black text
  '#46d2fc': 'text-black',  // Turquoise background -> Black text
  '#711bcf': 'text-white',  // Purple background -> White text
  '#a377fb': 'text-black',  // Lavender background -> Black text
  '#8c7e96': 'text-black',  // Slate background -> Black text
  '#d1c5d8': 'text-black',  // Light Purple background -> Black text
  '#890404': 'text-white',  // Dark Red background -> White text
  '#f81b1b': 'text-white',  // Bright Red background -> Black text
  '#f97724': 'text-white',  // Orange Red background -> Black text
  '#fda37e': 'text-black',  // Light Orange background -> Black text
  '#71805b': 'text-white',  // Olive background -> White text
  '#057008': 'text-white',  // Dark Green background -> White text
  '#44d046': 'text-black',  // Lime background -> Black text
  '#a7fea7': 'text-black',  // Pale Green background -> Black text
  '#1227fc': 'text-white',  // Navy Blue background -> White text
  '#053ea0': 'text-white',  // Royal Blue background -> White text
  '#603442': 'text-white',  // Maroon background -> White text
  '#341c3f': 'text-white',  // Deep Purple background -> White text
  '#fbe0e9': 'text-black',  // Light Pink background -> Black text
  '#fda6fd': 'text-black',  // Magenta background -> Black text
  '#f978d1': 'text-black',  // Hot Pink background -> Black text
  '#fcd1a6': 'text-black',  // Peach background -> Black text
};

const MessageCard = ({ name, text, color }) => {
  // Function to determine text color based on background color
  const getTextColor = (bgColor) => {
    // Return text color based on the mapping or default to black if color is not found
    return colorMapping[bgColor] || 'text-black';
  };

  // Determine text color
  const textColorClass = getTextColor(color);

  return (
    <div className='h-[50vh] md:h-[60vh] w-full p-1 border-4 border-black outline outline-4 outline-white bg-white shadow-xl'>
      <div className='h-[10%] flex justify-between items-center mb-1'>
        <div className='flex justify-between items-center gap-2'>
          <p className='text-white bg-black font-bold text-lg px-2 tracking-wider'>ABC</p>
          <p className='font-semibold text-lg tracking-wide'>To : {name}</p>
        </div>
        <div className='h-[3.5vh] w-auto flex justify-center items-center'>
          <img src={imgMail} alt='mail' className='h-full w-auto'/>
        </div>
      </div>

      <div style={{ backgroundColor: color }} className={`h-[83%] w-full overflow-auto py-2 px-4`}>
        <p className={`text-4xl font-normal blur-[0.1px] ${textColorClass}`}>{text}</p>
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
