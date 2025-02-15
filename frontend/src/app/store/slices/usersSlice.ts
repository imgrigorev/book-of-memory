import { createSlice, isAnyOf, PayloadAction } from '@reduxjs/toolkit';
import { getUsersThunk, TUsersList } from 'entities/user';
import { TRootState } from '../types.ts';

interface IInitialState {
  list: TUsersList;
  isLoading: boolean;
}

const initialState: IInitialState = {
  list: [],
  isLoading: false,
};

const slice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    clearState: () => initialState,
  },
  extraReducers: builder => {
    builder.addMatcher(isAnyOf(getUsersThunk.fulfilled), (state, action: PayloadAction<TUsersList>) => {
      state.list = action.payload;
    });
    builder.addMatcher(isAnyOf(getUsersThunk.pending), state => {
      state.isLoading = true;
    });
    builder.addMatcher(isAnyOf(getUsersThunk.fulfilled, getUsersThunk.rejected), state => {
      state.isLoading = false;
    });
  },
});

export const usersSliceName = slice.name;
export const usersReducer = slice.reducer;
export const usersActions = slice.actions;

export const getUsersLoadingSelector = (state: TRootState) => state.users.isLoading;
export const getUsersListSelector = (state: TRootState) => state.users.list;
export const getUsersListByIdSelector = (id: string) => (state: TRootState) => {
  return state.users.list.find(item => item.id === id);
};
