import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import CollaborationHub from '../pages/CollaborationHub';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/collaboration-hub" element={<CollaborationHub />} />
        {/* Add more routes here */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
