import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Chat from './pages/Chat';
import Settings from './pages/Settings';

import './index.css';
import Sign from './pages/Sign';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='/chat' element={ <Chat />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/signin' element={ <Sign />} />
      </Routes>
    </Router>
  );
}

export default App;
