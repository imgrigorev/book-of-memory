import { combineReducers } from 'redux';
import { usersReducer, sessionReducer, sessionSliceName, usersSliceName } from './slices';

export const rootReducer = combineReducers({
  [sessionSliceName]: sessionReducer,
  [usersSliceName]: usersReducer,
});
