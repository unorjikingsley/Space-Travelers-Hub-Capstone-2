import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import NotMatch from './routes/NotMatch';
import Rockets from './routes/Rocket';
import Missions from './routes/Mission';
import Profile from './routes/Profile';
import './App.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Rockets />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/*" element={<NotMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
