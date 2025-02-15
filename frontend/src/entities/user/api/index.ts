import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_URL_USERS, getApi, postApi } from 'shared/firebase';
import { TUsersApiList, TUsersList } from '../model';

export const getUsersApi = () => {
  return getApi<TUsersApiList>(API_URL_USERS);
};

export const postCreateUserApi = (request: unknown) => {
  return postApi(API_URL_USERS, request);
};

export const getUsersThunk = createAsyncThunk('users/get', async (_, thunkAPI) => {
  const { rejectWithValue, fulfillWithValue } = thunkAPI;

  try {
    const response = await getUsersApi();

    const list: TUsersList = response.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));

    return fulfillWithValue(list);
  } catch (e) {
    return rejectWithValue({});
  }
});
