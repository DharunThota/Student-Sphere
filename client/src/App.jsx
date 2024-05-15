import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Events from './routes/Events';
import Announcements from './routes/Announcements';
import Clubs from './routes/Clubs';
// Other imports

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/Events' element={<Events/>} />
        <Route path='/Announcements' element={<Announcements/>} />
        <Route path='/Clubs' element={<Clubs/>} />
      </Routes>
    </Router>
  );
}

export default App;
