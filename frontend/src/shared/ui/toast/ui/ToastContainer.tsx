import { FC } from 'react';
import { createPortal } from 'react-dom';
import { useToast } from '../hooks';
import { createPortalRoot } from '../lib';
import classes from './ToastContainer.module.scss';
import { Toast } from 'shared/ui/toast/ui/Toast.tsx';

export const ToastContainer: FC = () => {
  const { toasts } = useToast();

  const portalRoot = document.getElementById('toast-root') || createPortalRoot();

  return createPortal(
    <div className={classes.container}>
      {toasts.map(toast => (
        <Toast key={toast.id} {...toast} />
      ))}
    </div>,
    portalRoot,
  );
};
