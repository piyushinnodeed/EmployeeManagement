import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Error from './pages/Error';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Dashboard/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="*" element={<Error/>}/>
    </Routes>
    </>
  );
}

export default App;
