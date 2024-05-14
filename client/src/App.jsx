import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Events from './routes/Events';
import Announcements from './routes/Announcements';
import EventPage from './routes/EventPage';
// Other imports

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/Events' element={<Events/>} />
        <Route path='/Announcements' element={<Announcements/>} />
        <Route path='/EventPage' element={<EventPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
