import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Events from './routes/Events';
import EventPage from './routes/EventPage';
import Announcements from './routes/Announcements';
import { UserContextProvider } from './context/UserContext';
import Login from './routes/Login';
// Other imports

function App() {
  return (
    <UserContextProvider>
      <Router>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path='/events' Component={Events} />
          <Route path="/events/:id" Component={EventPage} />
          <Route path='/announcements' Component={Announcements} />
          <Route path='/login' Component={Login} />
          {/*<Route path='/clubs' Component={Clubs} /> */}
        </Routes>
      </Router>
    </UserContextProvider>
  );
}

export default App;
