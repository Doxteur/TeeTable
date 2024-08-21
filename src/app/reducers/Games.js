import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { REACT_APP_API_URL } from "../../utils/config.js";

export const getGames = createAsyncThunk(
  "games/getGames",
  async (data, thunkAPI) => {
    try {
      const response = await fetch(`${REACT_APP_API_URL}/games`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + data.token,
        },
      });

      const responseData = await response.json();
      if (!response.ok) {
        return thunkAPI.rejectWithValue(responseData);
      }

      return responseData;
    } catch (error) {
      console.log("JD Error", error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getPopularGames = createAsyncThunk(
  "games/popular",
  async (data, thunkAPI) => {
    try {
      const response = await fetch(`${REACT_APP_API_URL}/games/popular`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + data.token,
        },
      });

      const responseData = await response.json();
      if (!response.ok) {
        return thunkAPI.rejectWithValue(responseData);
      }

      return responseData;
    } catch (error) {
      console.log("JD Error", error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getGame = createAsyncThunk(
  "games/getGame",
  async (data, thunkAPI) => {
    try {
      const response = await fetch(`${REACT_APP_API_URL}/games/${data.id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + data.token,
        },
      });

      const responseData = await response.json();
      if (!response.ok) {
        return thunkAPI.rejectWithValue(responseData);
      }

      return responseData;
    } catch (error) {
      console.log("JD Error", error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getGameByFilter = createAsyncThunk(
  "games/getGameByFilter",
  async (data, thunkAPI) => {
    try {
      const response = await fetch(
        `${REACT_APP_API_URL}/games/search/${data.filter}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + data.token,
          },
        }
      );

      const responseData = await response.json();
      if (!response.ok) {
        return thunkAPI.rejectWithValue(responseData);
      }

      return responseData;
    } catch (error) {
      console.log("JD Error", error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const GamesSlice = createSlice({
  name: "games",
  initialState: {
    games: [],
    popularGames: [],
    gameChosen: {},
    isLoading: false,
    isLoadingSingle: false,
    error: null,
  },
  reducers: {
    setGameChosen: (state, action) => {
      state.gameChosen = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getGames.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getGames.fulfilled, (state, action) => {
      state.isLoading = false;
      state.games = action.payload.data;
    });
    builder.addCase(getGames.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(getPopularGames.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getPopularGames.fulfilled, (state, action) => {
      state.isLoading = false;
      state.popularGames = action.payload;
    });
    builder.addCase(getPopularGames.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(getGame.pending, (state) => {
      state.isLoadingSingle = true;
    });
    builder.addCase(getGame.fulfilled, (state, action) => {
      state.isLoadingSingle = false;
      state.gameChosen = action.payload;
    });
    builder.addCase(getGame.rejected, (state, action) => {
      state.isLoadingSingle = false;
      state.error = action.payload;
    });
    builder.addCase(getGameByFilter.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getGameByFilter.fulfilled, (state, action) => {
      state.isLoading = false;
      state.games = action.payload.data;
    });
    builder.addCase(getGameByFilter.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { setGameChosen } = GamesSlice.actions;

export default GamesSlice.reducer;
