import { createSlice, isAnyOf, PayloadAction } from '@reduxjs/toolkit';
import { TRootState } from '../types.ts';
import { loginThunk } from 'features/login-form/api';

// TODO: убрать отсюда тип пользователя
export type TUserSession = {
  displayName: string | null;
  email: string | null;
  uid: string;
  stsTokenManager: {
    accessToken: string;
    refreshToken: string;
    expirationTime: number;
  };
};

interface IInitialState {
  userSession: TUserSession | null;
  isAuthenticated: boolean | undefined;
}

const initialState: IInitialState = {
  userSession: null,
  isAuthenticated: undefined,
};

const slice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    clearState: () => initialState,
    setIsAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },
    setUser: (state, action: PayloadAction<TUserSession>) => {
      state.userSession = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addMatcher(isAnyOf(loginThunk.fulfilled), (state, action: PayloadAction<TUserSession>) => {
      state.userSession = action.payload;
    });
  },
});

export const sessionSliceName = slice.name;
export const sessionReducer = slice.reducer;
export const sessionActions = slice.actions;

export const getUserForProfileSelector = (state: TRootState) => {
  if (!state.session.userSession) return null;

  return {
    id: state.session.userSession.uid,
    fullName: state.session.userSession.displayName ?? undefined,
  };
};
export const getUserSessionSelector = (state: TRootState) => state.session.userSession;
export const getIsAuthenticatedSessionSelector = (state: TRootState) => state.session.isAuthenticated;
