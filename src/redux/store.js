import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from './mission/missionSlice';
import rocketsReducer from './rocket/rocketSlice';

const store = configureStore({
  reducer: {
    mission: missionsReducer,
    rocket: rocketsReducer,
  },
});

const selectRockets = (store) => store.rocket;
const selectMissions = (store) => store.missions;

export { selectMissions, selectRockets };

export default store;
