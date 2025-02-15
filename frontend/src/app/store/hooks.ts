import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { TAppDispatch, TRootState } from './types.ts';

export const useAppDispatch = () => useDispatch<TAppDispatch>();
export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;
