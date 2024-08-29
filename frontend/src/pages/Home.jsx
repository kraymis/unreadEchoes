import React, { useState, useEffect } from 'react';
import { getAllMessages, searchMessagesByName } from '../services/api'; // Import the API functions
import MessageCard from '../components/MessageCard';

const Home = () => {
  const [allMessages, setAllMessages] = useState([]); // Store all messages
  const [messages, setMessages] = useState([]); // Store filtered/search results
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedColor, setSelectedColor] = useState('all');
  const [sortOrder, setSortOrder] = useState('desc'); // 'asc' for ascending, 'desc' for descending
  const [colors, setColors] = useState([]); // State for storing available colors
  const [searchTriggered, setSearchTriggered] = useState(false); // To track if search was triggered

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await getAllMessages();
        setAllMessages(response);
        setMessages(response);

        // Extract unique colors from messages
        const uniqueColors = Array.from(new Set(response.map(message => message.color.hex)));
        const colorOptions = uniqueColors.map(hex => {
          const colorName = response.find(message => message.color.hex === hex)?.color.name || 'Unknown';
          return { hex, name: colorName };
        });

        setColors(colorOptions);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    fetchMessages();
  }, []);

  const handleSearch = async () => {
    try {
      if (searchTerm) {
        const response = await searchMessagesByName(searchTerm);
        setMessages(response);
      } else {
        setMessages(allMessages); // Reset to all messages if searchTerm is empty
      }
      setSearchTriggered(true);
    } catch (error) {
      console.error('Error searching messages:', error);
    }
  };

  // Sort messages by dateAdded
  const sortedMessages = [...messages].sort((a, b) => {
    if (a.dateAdded && b.dateAdded) {
      if (sortOrder === 'asc') {
        return new Date(a.dateAdded) - new Date(b.dateAdded);
      } else {
        return new Date(b.dateAdded) - new Date(a.dateAdded);
      }
    }
    return 0; // Default to no sorting if dateAdded is missing
  });

  // Filter messages by color
  const filteredMessages = sortedMessages.filter((message) => {
    const matchesColor = selectedColor === 'all' || message.color?.hex === selectedColor;
    return matchesColor;
  });

  return (
    <div className='flex flex-col'>
      <div className='flex flex-col justify-center items-center'>
        <div style={{ textAlign: 'center', padding: '20px' }}>
          <h1 className="text-[6vw] font-semibold">Unread Echoes</h1>
        </div>
        <div className='flex flex-col justify-center items-center gap-4'>
          <p className="text-[2vw] font-normal">A Collection Of Unsent Text Messages To First Loves</p>  
          <p className="text-[1.4vw] font-normal text-gray-700">{filteredMessages.length} posts found.</p>  
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
          <button
            onClick={handleSearch}
            className='py-2 px-4 bg-blue-500 text-white rounded-lg'
          >
            Search
          </button>

          <select
            className='py-2 px-4 border border-gray-300 rounded-lg mt-4'
            value={selectedColor}
            onChange={(e) => setSelectedColor(e.target.value)}
          >
            <option value='all'>All Colors</option>
            {colors.map((color, index) => (
              <option key={index} value={color.hex}>{color.name}</option>
            ))}
          </select>

          {/* Sort Order Selector */}
          <select
            className='py-2 px-4 border border-gray-300 rounded-lg mt-4'
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value='desc'>Newest First</option>
            <option value='asc'>Oldest First</option>
          </select>
        </div>

        {/* Display Messages */}
        <div className='flex flex-wrap gap-4 justify-center'>
          {filteredMessages.map((message) => (
            <MessageCard
              key={message._id}
              name={message.collection}
              text={message.text}
              color={message.color.hex}
            />
          ))}
        </div>  
      </div>
    </div>
  );
};

export default Home;
