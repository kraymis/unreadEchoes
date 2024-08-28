// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div>
        {/* Navigation */}
        {/* <nav className='flex justify-between py-4 px-8 bg-gray-800 text-white'>
          <Link to="/" className='text-xl'>Home</Link>
          <div>
            <Link to="/about" className='mx-4'>About</Link>
            <Link to="/contact" className='mx-4'>Contact</Link>
          </div>
        </nav> */}

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
