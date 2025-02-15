import { FC, PropsWithChildren, useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector, getIsAuthenticatedSessionSelector, getUserSessionSelector } from 'app/store';
import { getUserSessionThunk } from 'features/login-form/api';

export const SessionProvider: FC<PropsWithChildren> = ({ children }) => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(getUserSessionSelector);
  const isAuthenticated = useAppSelector(getIsAuthenticatedSessionSelector);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    if (typeof isAuthenticated === 'undefined') {
      dispatch(getUserSessionThunk());
    }
  }, [dispatch, isAuthenticated]);

  useEffect(() => {
    if (isAuthenticated && user) {
      const currentTimeInMs = new Date().getTime();
      const tokenWillBeValidInMs = user.stsTokenManager.expirationTime - currentTimeInMs;

      let delayForRefreshTokenInMs = tokenWillBeValidInMs - 60 * 1000;
      if (delayForRefreshTokenInMs < 0) {
        delayForRefreshTokenInMs = 0;
      }

      clearTimeout(timeoutRef.current);

      timeoutRef.current = setTimeout(() => {
        // TODO: refresh token
      }, delayForRefreshTokenInMs);
    }

    return () => {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = undefined;
    };
  }, [dispatch, isAuthenticated, user]);

  if (typeof isAuthenticated === 'undefined') {
    return null;
  }

  return <>{children}</>;
};
