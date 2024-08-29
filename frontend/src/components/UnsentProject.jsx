import React, { useState } from 'react';
import axios from 'axios'; // Assuming you are using axios to send data to the backend
import imgMail from '../assets/mail.png';
import { submitMessage } from '../services/api'; // Import the API function


const UnsentProject = () => {
    const [message, setMessage] = useState('');
    const [name, setName] = useState('');
    const [selectedColor, setSelectedColor] = useState({ name: 'Black', hex: '#000000' });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    // Array of color objects with names and hex codes
    const colors = [
        { name: 'White', hex: '#FFFFFF' },
        { name: 'Light Gray', hex: '#a2a2a2' },
        { name: 'Dark Gray', hex: '#6b6b6b' },
        { name: 'Black', hex: '#000000' },
        { name: 'Orange', hex: '#fda44a' },
        { name: 'Yellow', hex: '#fefe7c' },
        { name: 'Beige', hex: '#eddbba' },
        { name: 'Brown', hex: '#a27040' },
        { name: 'Light Blue', hex: '#a9b8bb' },
        { name: 'Teal', hex: '#698c8e' },
        { name: 'Sky Blue', hex: '#a9d1ee' },
        { name: 'Turquoise', hex: '#46d2fc' },
        { name: 'Purple', hex: '#711bcf' },
        { name: 'Lavender', hex: '#a377fb' },
        { name: 'Slate', hex: '#8c7e96' },
        { name: 'Light Purple', hex: '#d1c5d8' },
        { name: 'Dark Red', hex: '#890404' },
        { name: 'Bright Red', hex: '#f81b1b' },
        { name: 'Orange Red', hex: '#f97724' },
        { name: 'Light Orange', hex: '#fda37e' },
        { name: 'Olive', hex: '#71805b' },
        { name: 'Dark Green', hex: '#057008' },
        { name: 'Lime', hex: '#44d046' },
        { name: 'Pale Green', hex: '#a7fea7' },
        { name: 'Navy Blue', hex: '#1227fc' },
        { name: 'Royal Blue', hex: '#053ea0' },
        { name: 'Maroon', hex: '#603442' },
        { name: 'Deep Purple', hex: '#341c3f' },
        { name: 'Light Pink', hex: '#fbe0e9' },
        { name: 'Magenta', hex: '#fda6fd' },
        { name: 'Hot Pink', hex: '#f978d1' },
        { name: 'Peach', hex: '#fcd1a6' },
    ];


    const handleColorClick = (color) => {
        setSelectedColor(color);
    };

    const handleSubmit = async () => {
        if (message && name) {
            const data = {
                text: message,
                color: selectedColor,
                dateAdded: new Date(),
            };

            try {
                const response = await submitMessage(name.toLowerCase(), data);
                setSuccess('Message submitted successfully!');
                setMessage('');
                setError('');
            } catch (error) {
                setError('Error submitting message. Please try again.');
                setSuccess('');
            }
        } else {
            setError('Please enter both name and message.');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center ">
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
                            style={{ backgroundColor: selectedColor.hex }}
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
                                backgroundColor: color.hex,
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

            {/* Display success or error messages */}
            {error && <p className="text-red-500">{error}</p>}
            {success && <p className="text-green-500">{success}</p>}
        </div>
    );
};

export default UnsentProject;
