import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DetailProject from './components/Routes/DetailProject';
import Home from './components/Routes/Home';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="detail" element={<DetailProject />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
