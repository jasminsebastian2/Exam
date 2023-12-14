import { configureStore } from '@reduxjs/toolkit';
import homeReducer from './homeSlice';
import { getHome } from './Api/homeApi';

const store = configureStore({
  reducer: {
    home: homeReducer,
  },
});

store.dispatch(getHome());

export default store;
