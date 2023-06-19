import { createSlice } from '@reduxjs/toolkit';
// import axios from 'axios';

// const url = 'https://api.spacexdata.com/v4/rockets';

const initialState = {
  rockets: [
    {
      id: 'item1',
      rocket_name: 'The Great Gatsby',
      description: 'John Smith',
      flickr_images: '',
    },
    {
      id: 'item1',
      rocket_name: 'The Great Gatsby',
      description: 'John Smith',
      flickr_images: '',
    },
    {
      id: 'item1',
      rocket_name: 'The Great Gatsby',
      description: 'John Smith',
      flickr_images: '',
    },
  ],
  isLoading: true,
  errMsg: false,
  addMsg: false,
  delMsg: false,
};

const rocketSlice = createSlice({
  name: 'rockets',
  initialState,
  extraReducers: {},
});

export default rocketSlice.reducer;
