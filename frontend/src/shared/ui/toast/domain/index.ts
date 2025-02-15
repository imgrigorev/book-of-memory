export type TToast = {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info' | 'warning';
};

export type TToastContext = {
  toasts: TToast[];
  addToast: (toast: Omit<TToast, 'id'>) => void;
  removeToast: (id: string) => void;
};
