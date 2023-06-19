import { configureStore } from '@reduxjs/toolkit';
import missionSlice from './missionSlice';
import rocketSlice from './rocketSlice';

const store = configureStore({
  reducer: {
    mission: missionSlice,
    rocket: rocketSlice,
  },
});

export default store;
