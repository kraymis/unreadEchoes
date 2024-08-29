import React, { useState, useEffect } from 'react';
import { getAllMessages, searchMessagesByName } from '../services/api'; // Import the API functions
import MessageCard from '../components/MessageCard';

const Home = () => {
  const [allMessages, setAllMessages] = useState([]); // Store all messages
  const [messages, setMessages] = useState([]); // Store filtered/search results
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedColor, setSelectedColor] = useState('all');
  const [sortOrder, setSortOrder] = useState('desc'); // 'asc' for ascending, 'desc' for descending
  const [showFilterPanel, setShowFilterPanel] = useState(false); // Toggle filter panel visibility
  const [appliedFilters, setAppliedFilters] = useState({ color: 'all', sortOrder: 'desc' });
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

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await getAllMessages();
        setAllMessages(response);
        setMessages(response);
        console.log('All messages:', response);

        // Extract unique colors from messages


      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    fetchMessages();
  }, []);

  const handleSearch = async () => {
    try {
      if (searchTerm) {
        console.log('Searching for:', searchTerm);
        const response = await searchMessagesByName(searchTerm);
        setMessages(response);
        const updatedMessages = response.map((message) => ({ ...message, collection: searchTerm }));
        setMessages(updatedMessages);
      } else {
        setMessages(allMessages); // Reset to all messages if searchTerm is empty
      }
    } catch (error) {
      console.error('Error searching messages:', error);
    }
  };

  const applyFilters = () => {
    setSelectedColor(appliedFilters.color);
    setSortOrder(appliedFilters.sortOrder);
  };

  // Sort messages by dateAdded
  const sortedMessages = [...messages].sort((a, b) => {
    if (a.dateAdded && b.dateAdded) {
      return sortOrder === 'asc' ? new Date(a.dateAdded) - new Date(b.dateAdded) : new Date(b.dateAdded) - new Date(a.dateAdded);
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
          <p className="text-[1.4vw] font-normal text-gray-700 mb-8">{filteredMessages.length} posts found.</p>  
        </div>

        {/* Search Bar and Filter */}
        <div className='flex items-center relative mb-8 gap-1 justify-center  w-[85%]'>
          <input
            type='text'
            placeholder='Search by name...'
            className='py-2 px-4 border-2 border-black w-[80%] '
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSearch();
              }
            }}
          />

          <button
            onClick={() => setShowFilterPanel(!showFilterPanel)}
            className='py-2 px-4 border-2 border-black bg-black text-white w-[18%]'
          >
            Filters
          </button>

          {showFilterPanel && (
            <div
              className='absolute top-full left-0 right-0 items-end flex flex-col bg-transparent  shadow-lg z-50'
              style={{ zIndex: 1000 }} // Ensures it appears above other elements
            >
              <div className='w-[25%] flex p-4 mt-1 border-4 border-black flex-col font-medium justify-center  overflow-y-auto bg-white'>
              

              {/* Color Filter */}
              <div className='max-h-40 overflow-y-auto '>
                <p className='mb-2'>Filter by color :</p>
                <label className='flex items-center font-normal'>
                  <input
                    type='radio'
                    name='color'
                    value='all'
                    checked={appliedFilters.color === 'all'}
                    onChange={() => setAppliedFilters({ ...appliedFilters, color: 'all' })}
                    className='mr-2'
                  />
                  All Colors
                </label>
                {colors.map((color, index) => (
                  <label key={index} className='flex items-center font-normal'>
                    <input
                      type='radio'
                      name='color'
                      value={color.hex}
                      checked={appliedFilters.color === color.hex}
                      onChange={(e) => setAppliedFilters({ ...appliedFilters, color: e.target.value })}
                      className='mr-2'
                    />
                    <span
                      className='w-4 h-4 rounded-full mr-2'
                      style={{ backgroundColor: color.hex }}
                    ></span>
                    {color.name}
                  </label>
                ))}

              </div>

              {/* Sort Order Selector */}
              <div className='mt-4'>
                <p>Sort By:</p>
                <select
                  className='py-2 px-4 border border-gray-300 rounded-lg font-normal'
                  value={appliedFilters.sortOrder}
                  onChange={(e) => setAppliedFilters({ ...appliedFilters, sortOrder: e.target.value })}
                >
                  <option value='desc'>Newest First</option>
                  <option value='asc'>Oldest First</option>
                </select>
              </div>

              <button
                onClick={() => {
                  applyFilters();
                  setShowFilterPanel(false); // Hide the panel after applying filters
                }}
                className='py-2 px-4 bg-black text-white mt-4'
              >
                Update Filters
              </button>
              </div>
            </div>
          )}
        </div>


        {/* Display Messages */}
        <div className='flex flex-wrap gap-5 w-[85%] justify-start '>
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
