import React, { useState,useEffect } from 'react';
import imgMail from '../assets/mail.png';
import { submitMessage } from '../services/api'; // Import the API function

const UnsentProject = () => {
    const [message, setMessage] = useState('');
    const [name, setName] = useState('');
    const [selectedColor, setSelectedColor] = useState({ name: 'Black', hex: '#000000' });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    useEffect(() => {
        if (error) {
            const timer = setTimeout(() => setError(''), 3000); // Hide error message after 5 seconds
            return () => clearTimeout(timer); // Cleanup timer on component unmount
        }
    }, [error]);

    // Handle success message timeout
    useEffect(() => {
        if (success) {
            const timer = setTimeout(() => setSuccess(''), 3000); // Hide success message after 5 seconds
            return () => clearTimeout(timer); // Cleanup timer on component unmount
        }
    }, [success]);

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
        '#f81b1b': 'text-black',  // Bright Red background -> Black text
        '#f97724': 'text-black',  // Orange Red background -> Black text
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
                setName("");
                setError('');
            } catch (error) {
                setError('Error submitting message. Please try again.');
                setSuccess('');
            }
        } else {
            setError('Please enter both name and message.');
        }
    };

    // Function to get text color based on background color
    const getTextColor = (bgColor) => {
        return colorMapping[bgColor] || 'text-black'; // Default to black if color not found
    };

    // Determine the text color based on selected background color
    const textColorClass = getTextColor(selectedColor.hex);

    return (
        <div className="flex flex-col items-center justify-center p-8 sm:p-4 lg:w-[45vw]">
            <div className='flex flex-col lg:flex-row gap-2 w-full max-w-4xl'>
                <div className='h-[45vh] lg:h-[70vh] w-full lg:w-[70%] border-4 p-2 border-black bg-white'>
                    <div className='h-[10%] flex justify-between items-center mb-1'>
                        <div className='flex justify-start gap-1 items-center w-[80%]'>
                            <p className='text-white bg-black font-bold tracking-wide px-2 text-base sm:text-base md:text-base'>ABC</p>
                            <div className='flex items-center flex-grow'>
                                <p className='font-semibold text-base sm:text-base md:text-base'>To:</p>
                                <input
                                    type="text"
                                    placeholder="Enter Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="font-semibold tracking-wide border-none focus:outline-none h-full w-[90%] bg-transparent px-2 text-base sm:text-base md:text-base"
                                />
                            </div>
                        </div>
                        <div className='h-[3.5vh] w-auto flex justify-center items-center'>
                            <img src={imgMail} alt='mail' className='h-full w-auto' />
                        </div>
                    </div>

                    <div className='h-[85%] w-full overflow-auto text-4xl sm:text-4xl md:text-4xl blur-[0.4px] p-2 font-normal'>
                        <textarea
                            placeholder="Type Your Message Here..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className={`w-full h-full py-2 px-4 overflow-auto focus:outline-none ${textColorClass}`}
                            style={{ backgroundColor: selectedColor.hex }}
                        />
                    </div>

                    <div className='flex justify-between items-center'>
                        <p className='font-bold tracking-wide text-sm sm:text-sm md:text-base'>Send</p>
                        <p className='font-semibold tracking-wide text-sm sm:text-sm md:text-base'>#unreadechoes</p>
                        <p className='font-bold tracking-wide text-sm sm:text-sm md:text-base'>Back</p>
                    </div>
                </div>

                <div className="grid grid-cols-4 gap-1 mb-4 lg:mb-0 w-full lg:w-[30%]">
                    {colors.map((color, index) => (
                        <div
                            key={index}
                            className={`w-10 h-10 border-4 border-black cursor-pointer`}
                            style={{ backgroundColor: color.hex }}
                            onClick={() => handleColorClick(color)}
                        />
                    ))}
                </div>
            </div>

            <div className="bg-white w-full mt-4">
                <button
                    onClick={handleSubmit}
                    className="px-4 py-1 border-4 text-black border-black w-full font-bold text-lg tracking-wide"
                >
                    Submit Your Message
                </button>
            </div>

            {error && (
                <p className="text-red-600 bg-red-100 border border-red-300 p-2 rounded mt-2 w-full text-center font-semibold">
                    {error}
                </p>
            )}
            {success && (
                <p className="text-green-600 bg-green-100 border border-green-300 p-2 rounded mt-2 w-full text-center font-semibold">
                    {success}
                </p>
            )}

        </div>
    );
};

export default UnsentProject;
