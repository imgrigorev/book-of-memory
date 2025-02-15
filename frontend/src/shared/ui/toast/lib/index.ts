import { createContext } from 'react';
import { TToastContext } from 'shared/ui/toast/domain';

export const ToastContext = createContext<TToastContext | undefined>(undefined);

export const createPortalRoot = () => {
  const toastRoot = document.createElement('div');
  toastRoot.id = 'toast-root';
  document.body.appendChild(toastRoot);
  return toastRoot;
};
