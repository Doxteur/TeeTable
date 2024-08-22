import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { REACT_APP_API_URL } from '../../utils/config.js';

const ConnectionSlice = createSlice({
  name: 'connection',
  initialState: {
    connections: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
});

export default ConnectionSlice.reducer;
