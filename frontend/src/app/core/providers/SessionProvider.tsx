import { FC, PropsWithChildren, useEffect } from 'react';
import { useAppDispatch, useAppSelector, getIsAuthenticatedSessionSelector, sessionActions } from 'app/store';

export const SessionProvider: FC<PropsWithChildren> = ({ children }) => {
  const dispatch = useAppDispatch();
  const isAuthenticated = useAppSelector(getIsAuthenticatedSessionSelector);

  useEffect(() => {
    const token = window.localStorage.getItem('token');
    const tokenElk = window.localStorage.getItem('token-elk');

    if (token) {
      dispatch(sessionActions.setIsAuthenticated(true));
      dispatch(sessionActions.setIsAdmin(true));
      return;
    }

    if (tokenElk) {
      dispatch(sessionActions.setIsAuthenticated(true));
      return;
    }

    dispatch(sessionActions.setIsAuthenticated(false));
  }, []);

  if (typeof isAuthenticated === 'undefined') {
    return null;
  }

  return <>{children}</>;
};
