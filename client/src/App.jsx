import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Events from './routes/Events';
import Announcements from './routes/Announcements';
import ClubPage from './routes/ClubPage';
import Clubs from './routes/Clubs';

// Other imports

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/events' element={<Events/>} />
        <Route path='/announcements' element={<Announcements/>} />
        <Route path='/clubs/:id' element={<ClubPage/>} />
        <Route path='/clubs' element={<Clubs/>} />
      </Routes>
    </Router>
  );
}

export default App;
