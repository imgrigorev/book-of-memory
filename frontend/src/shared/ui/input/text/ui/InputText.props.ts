import { InputHTMLAttributes } from 'react';

export const enum EInputVariant {
  LIGHT = 'light',
  DARK = 'dark',
}

export interface IInputTextProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'ref'> {
  label?: string;
  prefixIcon?: string;
  postfixIcon?: string;
  wrapperClassName?: string;
  containerClassName?: string;
  inputClassName?: string;
  variant?: EInputVariant;
}
