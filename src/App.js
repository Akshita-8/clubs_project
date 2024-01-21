// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ClubList from './components/Clublist';
import ClubDetails from './components/ClubDetails';
import Chess from './components/Chess'; // Correct casing for Chess.js
import Coding from './components/Coding';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clubs" element={<ClubList />} />
        <Route path="/clubs/:clubId" element={<ClubDetails />} />
        <Route path="/clubs/:clubId/chess" element={<Chess />} />
        <Route path="/clubs/:clubId/coding" element={<Coding />} />

      </Routes>
    </Router>
  );
};

export default App;
