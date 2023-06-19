import { configureStore } from '@reduxjs/toolkit';
import missionSlice from './mission/missionSlice';
import rocketSlice from './rocket/rocketSlice';

const store = configureStore({
  reducer: {
    mission: missionSlice,
    rocket: rocketSlice,
  },
});

export default store;
