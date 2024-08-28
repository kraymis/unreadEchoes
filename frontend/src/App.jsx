// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Submit from './pages/Submit';
import Terms from './pages/Terms';

function App() {
  return (
    <Router>
      <div>
        {/* Navigation */}
        <nav className='flex justify-between py-8 px-16'>
        <h1 className='text-4xl font-bold text-center'>
        <Link to="/">Unread Echoes</Link>
        </h1>
        
        <Link to="/submit">
        <button className='py-4 px-6  font-bold text-black border-4 border-black'>
        Leave an echo
        </button>
        </Link>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/submit" element={<Submit />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
