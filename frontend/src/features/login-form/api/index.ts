import { createAsyncThunk } from '@reduxjs/toolkit';
import { TCredentials } from '../ui/FeatureLoginForm.types.ts';
import axios from 'axios';

export const signInApi = async ({ username, password }: TCredentials) => {
  const response = await axios.post('http://localhost:8083/api/v1/auth', { username, password });

  console.log('response', response);
  console.log('response', response.data.data.token);

  window.localStorage.setItem('token', response.data.data.token);

  return (response as any).data.data.token;
};

export const loginThunk = createAsyncThunk('session/login', async (request: TCredentials, thunkAPI) => {
  const { rejectWithValue, fulfillWithValue } = thunkAPI;

  try {
    const response = await signInApi(request);

    return fulfillWithValue(response);
  } catch (e) {
    return rejectWithValue({});
  }
});
