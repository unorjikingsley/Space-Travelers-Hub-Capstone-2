import { createSlice } from '@reduxjs/toolkit';
// import axios from 'axios';

// const url = 'https://api.spacexdata.com/v3/missions';

const initialState = {
  mission: [
    {
      mission_id: 'item1',
      mission_name: 'The Great Gatsby',
      description: 'John Smith',
    },
    {
      mission_id: 'item2',
      mission_name: 'Anna Karenina',
      description: 'Leo Tolstoy',
    },
    {
      mission_id: 'item3',
      mission_name: 'The Selfish Gene',
      description: 'Richard Dawkins',
    },
  ],
  isLoading: true,
  errMsg: false,
  addMsg: false,
  delMsg: false,
};

const missionSlice = createSlice({
  name: 'mission',
  initialState,
  extraReducers: {},
});

export default missionSlice.reducer;
