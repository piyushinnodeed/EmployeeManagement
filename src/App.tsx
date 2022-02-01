import React,{useState} from 'react';
import { Routes, Route } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Error from './pages/Error';

//Local Files
import ThemeContext , {themes} from './theme-context';
import { Switch } from '@mui/material';

function App() {
  const [theme, setTheme] = useState(themes.light)
  return (
    <>
    <ThemeContext.Provider value={theme}>
      <div>
        <Routes>
          <Route path="/" element={<Dashboard theme={theme} setTheme={setTheme}/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
      </div>
    </ThemeContext.Provider>
    </>
  );
}

export default App;
