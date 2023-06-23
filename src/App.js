import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import NotMatch from './routes/NotMatch';
import Rockets from './routes/Rocket';
import Missions from './routes/Mission';
import Profile from './routes/Profile';
import './App.css';
import { fetchMissions } from './redux/mission/missionSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

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
