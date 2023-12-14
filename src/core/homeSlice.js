import { createSlice } from '@reduxjs/toolkit';
import { getHome } from './Api/homeApi';

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    loading: false,
    error: false,
    data: [],
    selectedRegion: 'All',
  },
  reducers: {
    setRegion: (state, action) => {
      state.selectedRegion = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getHome.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getHome.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.data = action.payload;
      })
      .addCase(getHome.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setRegion } = homeSlice.actions;
export default homeSlice.reducer;
