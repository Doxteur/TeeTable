import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { REACT_APP_API_URL } from '../../utils/config.js';



import { queryBuilder } from '../../utils/queryBuilder';

export const fetchTableData = createAsyncThunk(
  'table/fetchData',
  async ({ db, selectedTable }, thunkAPI) => {
    try {
      const countQuery = queryBuilder.getCountQuery(selectedTable);
      const countResult = await db.select(countQuery);
      const totalCount = countResult[0].total_count;

      const dataQuery = queryBuilder.getLimitedDataQuery(selectedTable);
      const data = await db.select(dataQuery);

      return { totalCount, data };
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const executeCustomQuery = createAsyncThunk(
  'table/executeCustomQuery',
  async ({ db, sql }, thunkAPI) => {
    try {
      const query = queryBuilder.getCustomQuery(sql);
      const result = await db.select(query);
      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


const TablesSlice = createSlice({
  name: 'tables',
  initialState: {
    db: null,
    tables: [],
    selectedTable: {},
    totalCount: 0,
    data: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    addActiveTable: (state, action) => {
      state.selectedTable = action.payload;
    },
    setTables: (state, action) => {
      state.tables = action.payload;
    },
    connectToDatabaseRedux: (state, action) => {
      state.db = action.payload;
    },
    setTableData: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTableData.pending, (state) => {
      })
      .addCase(fetchTableData.fulfilled, (state, action) => {
        state.data = action.payload.data;
        state.totalCount = action.payload.totalCount;
      })
      .addCase(fetchTableData.rejected, (state, action) => {
        state.error = action.payload;
      })

      .addCase(executeCustomQuery.pending, (state) => {
      })
      .addCase(executeCustomQuery.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(executeCustomQuery.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const { addActiveTable, setTables, connectToDatabaseRedux,setTableData } = TablesSlice.actions;

export default TablesSlice.reducer;
