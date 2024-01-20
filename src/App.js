// App.js

import React from 'react';
import Home from './components/Home'; // Assuming you have a Home component
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <Router>
    <div>
      <Home/>
    </div>
  </Router>
  );
};

export default App;
