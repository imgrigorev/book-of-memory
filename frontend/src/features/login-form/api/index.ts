import { createAsyncThunk } from '@reduxjs/toolkit';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { firebaseAuth } from 'shared/firebase';
import { sessionActions, TUserSession } from 'app/store';
import { TCredentials } from '../ui/FeatureLoginForm.types.ts';

export const signInApi = async ({ email, password }: TCredentials) => {
  const response = await signInWithEmailAndPassword(firebaseAuth, email, password);

  return response.user as unknown as TUserSession;
};

export const getUserSessionApi = async (callback: (user: TUserSession) => void) => {
  onAuthStateChanged(firebaseAuth, user => callback(user as unknown as TUserSession));
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

export const getUserSessionThunk = createAsyncThunk('session/user', async (_, thunkAPI) => {
  const { dispatch } = thunkAPI;

  await getUserSessionApi(user => {
    if (user) {
      dispatch(sessionActions.setIsAuthenticated(true));
      dispatch(sessionActions.setUser(user as unknown as TUserSession));
    } else {
      dispatch(sessionActions.setIsAuthenticated(false));
    }
  });
});
