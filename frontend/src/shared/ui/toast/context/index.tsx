import { useState, ReactNode, FC } from 'react';
import { TToast } from '../domain';
import { ToastContext } from '../lib';
import { ToastContainer } from '../ui/ToastContainer.tsx';

export const ToastProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<TToast[]>([]);

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  const addToast = (toast: Omit<TToast, 'id'>) => {
    const newToast = { id: Date.now().toString(), ...toast };
    setToasts(prev => [...prev, newToast]);

    setTimeout(() => removeToast(newToast.id), 3000);
  };

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      <ToastContainer />
      {children}
    </ToastContext.Provider>
  );
};
