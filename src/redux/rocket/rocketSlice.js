import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const rocketUrl = 'https://api.spacexdata.com/v4/rockets';

const initialState = {
  rockets: [],
  isLoading: true,
  error: undefined,
};

export const fetchRockets = createAsyncThunk(
  'rockets/fetchRockets',
  async (_, thunkAPI) => {
    try {
      const resp = await axios.get(rocketUrl);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        'An error occured while getting your data',
      );
    }
  },
);

const rocketSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    reserveRocket: (state, { payload }) => ({
      ...state,
      rockets: state.rockets.map((rocket) => {
        if (payload.id !== rocket.id) return rocket;
        return { ...rocket, reserved: true };
      }),
    }),

    cancelReserveRocket: (state, { payload }) => ({
      ...state,
      rockets: state.rockets.map((rocket) => {
        if (payload.id !== rocket.id) return rocket;
        return { ...rocket, reserved: false };
      }),
    }),
  },

  extraReducers: (build) => {
    build
      .addCase(fetchRockets.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchRockets.fulfilled, (state, action) => {
        state.isLoading = false;
        state.rockets = action.payload;
      })
      .addCase(fetchRockets.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { reserveRocket, cancelReserveRocket } = rocketSlice.actions;

export default rocketSlice.reducer;
