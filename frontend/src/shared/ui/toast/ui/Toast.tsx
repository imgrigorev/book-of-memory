import { FC } from 'react';
import classes from './Toast.module.scss';
import { TToast } from '../domain';

export const Toast: FC<TToast> = ({ message }) => {
  return <div className={classes.toast}>{message}</div>;
};
