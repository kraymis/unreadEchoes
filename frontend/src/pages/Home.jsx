// src/pages/Home.jsx
import React, {useState,useEffect} from 'react';
import Typewriter from 'typewriter-effect';
import MessageCard from '../components/MessageCard';
import UnsentProject from '../components/UnsentProject';

const Home = () => {
  const name = 'John Doe';
  const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, velit ac ultrices aliquam, justo nunc tincidunt nisl, non tincidunt nunc nisl id nunc. Sed nec nisl nec nisl aliquet tincidunt. Nulla facilisi. Sed euismod, velit ac ultrices aliquam, justo nunc tincidunt nisl, non tincidunt nunc nisl id nunc. Sed nec nisl nec nisl aliquet tincidunt. Nulla facilisi.';
  const co = 'bg-blue-500';
  const numberOfPosts = 521

  const messages = [
    { id: 1, name: 'John Doe', text: 'Lorem ipsum dolor sit amet.', color: 'bg-blue-500' },
    { id: 2, name: 'Jane Smith', text: 'Consectetur adipiscing elit.', color: 'bg-red-500' },
    { id: 3, name: 'Alice Johnson', text: 'Sed euismod, velit ac ultrices.', color: 'bg-green-500' },
    { id: 4, name: 'John Doe', text: 'Lorem ipsum dolor sit amet.', color: 'bg-blue-500' },
    { id: 5, name: 'Jane Smith', text: 'Consectetur adipiscing elit.', color: 'bg-red-500' },
    { id: 6, name: 'Alice Johnson', text: 'Sed euismod, velit ac ultrices.', color: 'bg-green-500' },
    // Add more messages as needed
  ];
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedColor, setSelectedColor] = useState('all');

  const filteredMessages = messages.filter((message) => {
    const matchesName = message.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesColor = selectedColor === 'all' || message.color === selectedColor;
    return matchesName && matchesColor;
  });

  return (
    <div className='flex flex-col'>
      

        <div className='flex flex-col justify-center items-center'>
            <div style={{ textAlign: 'center', padding: '20px' }}>
                <h1 className="text-[6vw] font-semibold">
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                        .typeString('Unread Echoes')
                        .pauseFor(1000)
                        .deleteAll()
                        .pauseFor(500)
                        .start();
                    }}
                    options={{
                        loop: true,
                    }}
                    />
                </h1>
            </div>
            <div className='flex flex-col justify-center items-center gap-4'>
                <p className="text-[2vw] font-normal">A Collection Of Unsent Text Messages To First Loves</p>  
                <p className="text-[1.4vw] font-normal text-gray-700">{numberOfPosts} posts found.</p>  
            </div>

                  {/* Search Bar and Filter */}
            <div className='flex flex-col items-center py-4 px-16'>
                <input
                type='text'
                placeholder='Search by name...'
                className='py-2 px-4 mb-4 border border-gray-300 rounded-lg'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                />

                <select
                className='py-2 px-4 border border-gray-300 rounded-lg'
                value={selectedColor}
                onChange={(e) => setSelectedColor(e.target.value)}
                >
                <option value='all'>All Colors</option>
                <option value='bg-blue-500'>Blue</option>
                <option value='bg-red-500'>Red</option>
                <option value='bg-green-500'>Green</option>
                </select>
            </div>

            {/* Filtered Messages */}
            <div className='flex flex-wrap gap-4 justify-center'>
                {filteredMessages.map((message) => (
                <MessageCard
                    key={message.id}
                    name={message.name}
                    text={message.text}
                    color={message.color}
                />
                ))}
            </div>  
        
        </div>

    </div>
  );
};

export default Home;
