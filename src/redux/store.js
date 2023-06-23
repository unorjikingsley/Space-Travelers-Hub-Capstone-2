import { configureStore } from '@reduxjs/toolkit';
import missionReducer from './mission/missionSlice';
import rocketReducer from './rocket/rocketSlice';

const store = configureStore({
  reducer: {
    mission: missionReducer,
    rocket: rocketReducer,
  },
});

const selectRockets = (store) => store.rocket;
const selectMissions = (store) => store.missions;

export { selectMissions, selectRockets };

export default store;
