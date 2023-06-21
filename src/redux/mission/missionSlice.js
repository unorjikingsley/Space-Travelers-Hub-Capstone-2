import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const missionUrl = 'https://api.spacexdata.com/v3/missions';
const missionList = [];

export const fetchMissions = createAsyncThunk('missions/fetchMissions', async () => {
  const response = await axios.get(missionUrl);
  if (response.data) {
    return response.data;
  }
  return [];
});

const missionSlice = createSlice({
  name: 'mission',
  initialState: missionList,

  reducers: {
    joinMission(state, action) {
      return state.map((mission) => {
        if (mission.id !== action.payload) {
          return { ...mission };
        }
        return { ...mission, joined: true };
      });
    },
    cancelMission(state, action) {
      return state.map((mission) => {
        if (mission.id !== action.payload) {
          return { ...mission };
        }
        return { ...mission, joined: false };
      });
    },
  },

  extraReducers: (build) => {
    build.addCase(fetchMissions.fulfilled, (state, action) => {
      const currentState = state;
      Object.entries(action.payload).forEach((elm) => {
        currentState.push({
          id: elm[1].mission_id,
          mission_name: elm[1].mission_name,
          description: elm[1].description,
          joined: false,
        });
      });
      return currentState;
    });
  },
});

export const { joinMission, cancelMission } = missionSlice.actions;

export default missionSlice.reducer;
