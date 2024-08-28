import React, { useState } from 'react';
import axios from 'axios'; // Assuming you are using axios to send data to the backend
import imgMail from '../assets/mail.png';

const UnsentProject = () => {
    const [message, setMessage] = useState('');
    const [name, setName] = useState('');
    const [selectedColor, setSelectedColor] = useState('#000000'); // Default color is black

    const colors = [
        '#FFFFFF', '#a2a2a2', '#6b6b6b', '#000000',
        '#fda44a', '#fefe7c', '#eddbba', '#a27040',
        '#a9b8bb', '#698c8e', '#a9d1ee', '#46d2fc',
        '#711bcf', '#a377fb', '#8c7e96', '#d1c5d8',
        '#890404', '#f81b1b', '#f97724', '#fda37e',
        '#71805b', '#057008', '#44d046', '#a7fea7',
        '#1227fc', '#053ea0', '#603442', '#341c3f',
        '#fbe0e9', '#fda6fd', '#f978d1','#fcd1a6'
    ];

    const handleColorClick = (color) => {
        setSelectedColor(color);
    };

    const handleSubmit = async () => {
        if (message && name) {
            const data = {
                name: name,
                text: message,
                color: selectedColor
            };

            try {
                // Replace with your backend API endpoint
                const response = await axios.post('https://your-backend-api.com/submit-message', data);
                console.log('Response:', response.data);
            } catch (error) {
                console.error('Error submitting message:', error);
            }
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
                <div className='flex gap-4'>
                    <div className=' h-[60vh] w-[25vw] border-4 p-1 border-black bg-white'>
            
                        <div className='h-[10%] flex justify-between items-center mb-1'>
                            <div className='flex justify-start gap-1 items-center w-[80%]'>
                                <p className='text-white bg-black font-bold tracking-wide px-2'>ABC</p>
                                <div className='flex items-center flex-grow'>
                                    <p className='font-semibold '>To:</p>
                                    <input
                                        type="text"
                                        placeholder="Enter Name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="font-semibold tracking-wide border-none focus:outline-none h-full w-[90%] bg-transparent px-2"
                                    />
                                </div>
                            </div>
                            <div className='h-[3.5vh] w-auto flex justify-center items-center'>
                                <img src={imgMail} alt='mail' className='h-full w-auto'/>
                            </div>
                        </div>


                        <div className={`h-[82%] w-full overflow-auto text-xl p-2 `}>
                        <textarea
                        placeholder="Type Your Message Here..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full h-full p-2 text-white overflow-auto focus:outline-none"
                        style={{ backgroundColor: selectedColor }}
                        />
                        </div>
                        
                        <div className='flex justify-between items-center'>
                        <p className='font-bold tracking-wide'>Send</p>
                        <p className='font-semibold tracking-wide'>#unreadechoes</p>
                        <p className='font-bold tracking-wide'>Back</p>
                        </div> 
                    </div>

                    <div className="grid grid-cols-4 gap-2 mb-4">
                            {colors.map((color, index) => (
                                <div
                                    key={index}
                                    className={`w-10 h-10 border-4 border-black cursor-pointer`}
                                    style={{
                                        backgroundColor: color,
                                        
                                    }}
                                    onClick={() => handleColorClick(color)}
                                />
                            ))}
                    </div>
                </div>



                <div className="bg-white w-full">
                    <button
                        onClick={handleSubmit}
                        className="px-4 py-1 border-4 text-black border-black w-full font-bold text-lg tracking-wide"
                    >
                        Submit Your Message
                    </button>
                </div>
        </div>
    );
};

export default UnsentProject;
