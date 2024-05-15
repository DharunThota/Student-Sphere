import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Events from './routes/Events';
import Announcements from './routes/Announcements';

import Clubs from './routes/Clubs';

import { UserContextProvider } from './context/UserContext';
import Login from './routes/Login';
// Other imports

function App() {
  return (
    <UserContextProvider>
      <Router>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path='/Events' Component={Events} />
          <Route path='/Announcements' Component={Announcements} />
           <Route path='/Clubs' element={<Clubs/>} />
          <Route path='/login' Component={Login} />
        </Routes>
      </Router>
    </UserContextProvider>
  );
}

export default App;
