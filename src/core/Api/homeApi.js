import { createAsyncThunk } from '@reduxjs/toolkit';
import Axios from 'axios';

const url = 'https://restcountries.com/v2/all?fields=name,region,flag';

export const getHome = createAsyncThunk('home/getHome', async () => {
  const response = await Axios.get(url);
  return response.data;
});
