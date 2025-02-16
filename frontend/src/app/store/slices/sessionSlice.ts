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
  userSession: string | null;
  isAuthenticated: boolean | undefined;
  isAdmin: boolean | undefined;
}

const initialState: IInitialState = {
  userSession: null,
  isAuthenticated: undefined,
  isAdmin: undefined,
};

const slice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    clearState: () => initialState,
    setIsAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },
    setIsAdmin: (state, action: PayloadAction<boolean>) => {
      state.isAdmin = action.payload;
    },
    setUser: (state, action: PayloadAction<string>) => {
      state.userSession = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addMatcher(isAnyOf(loginThunk.fulfilled), (state, action: PayloadAction<string>) => {
      state.userSession = action.payload;
    });
  },
});

export const sessionSliceName = slice.name;
export const sessionReducer = slice.reducer;
export const sessionActions = slice.actions;

export const getUserSessionSelector = (state: TRootState) => state.session.userSession;
export const getIsAuthenticatedSessionSelector = (state: TRootState) => state.session.isAuthenticated;
export const getIsAdminSessionSelector = (state: TRootState) => state.session.isAdmin;
