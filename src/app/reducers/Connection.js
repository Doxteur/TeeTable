import { createSlice } from '@reduxjs/toolkit';
import { REACT_APP_API_URL } from '../../utils/config.js';

const ConnectionSlice = createSlice({
  name: 'connection',
  initialState: {
    connections: [],
    selectedConnection: {},
    isLoading: false,
    error: null,
  },
  reducers: {
    addConnection: (state, action) => {
      state.connections.push(action.payload);
    },
    setSelectedConnection: (state, action) => {
      state.selectedConnection = action.payload;
    },
  },
});

export const { addConnection,setSelectedConnection} = ConnectionSlice.actions;

export default ConnectionSlice.reducer;
