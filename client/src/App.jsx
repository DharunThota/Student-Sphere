import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Events from './routes/Events';
// Other imports

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/Events' element={<Events/>} />
      </Routes>
    </Router>
  );
}

export default App;
