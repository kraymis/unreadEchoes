// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Submit from './pages/Submit';
import TermsOfService from './pages/TermsOfService';
import Navbar from './components/NavBar';

function App() {
  return (
    <Router>
      <div >
        {/* Navigation */}
        <Navbar/>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/submit" element={<Submit />} />
          <Route path="/terms" element={<TermsOfService />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
