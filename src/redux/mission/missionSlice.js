import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  missionList: [],
};

const missionUrl = 'https://api.spacexdata.com/v3/missions';

export const fetchMissions = createAsyncThunk(
  'missions/fetchMissions',
  async () => {
    const response = await axios.get(missionUrl);
    if (response.data) {
      return response.data;
    }
    return [];
  },
);

const missionSlice = createSlice({
  name: 'mission',
  initialState,

  reducers: {
    joinMission: (state, action) => {
      state.missionList = state.missionList.map((mission) => {
        if (mission.id !== action.payload) {
          return { ...mission };
        }
        return { ...mission, joined: true };
      });
    },
    cancelMission: (state, action) => {
      state.missionList = state.missionList.map((mission) => {
        if (mission.id !== action.payload) {
          return { ...mission };
        }
        return { ...mission, joined: false };
      });
    },
  },

  extraReducers: (build) => {
    build.addCase(fetchMissions.fulfilled, (state, action) => {
      const missions = action.payload.map((mission) => {
        const { mission_id: id, mission_name: name, description } = mission;
        return { id, name, description };
      });
      state.missionList = missions;
    });
  },
});

export const { joinMission, cancelMission } = missionSlice.actions;

export default missionSlice.reducer;
