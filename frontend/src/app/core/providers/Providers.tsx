import { FC, PropsWithChildren } from 'react';
import { StoreProvider } from 'app/store';
import { SessionProvider } from './SessionProvider.tsx';
import { ToastProvider } from 'shared/ui';

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <StoreProvider>
      <SessionProvider>
        <ToastProvider>{children}</ToastProvider>
      </SessionProvider>
    </StoreProvider>
  );
};
