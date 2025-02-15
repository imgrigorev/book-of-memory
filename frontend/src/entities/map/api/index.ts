import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_URL_MAP_BY_ID } from 'shared/firebase';
import { apiGet } from 'shared/api/lib/apiFunctions.ts';

export const getMap = createAsyncThunk('map/get', async (_, thunkAPI) => {
  const { rejectWithValue, fulfillWithValue } = thunkAPI;

  try {
    const response = await apiGet(API_URL_MAP_BY_ID());

    console.log('response', response);

    return fulfillWithValue([]);
  } catch (e) {
    return rejectWithValue({});
  }
});
