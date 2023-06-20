import { configureStore } from '@reduxjs/toolkit';
import missionSlice from './mission/missionSlice';
import rocketSlice from './rocket/rocketSlice';

const store = configureStore({
  reducer: {
    mission: missionSlice,
    rocket: rocketSlice,
  },
});

const selectRockets = (store) => store.rocket;
const selectMissions = (store) => store.missions;

export { selectMissions, selectRockets };

export default store;
