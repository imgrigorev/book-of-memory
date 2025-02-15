import { TextareaHTMLAttributes } from 'react';

export interface IInputTextareaProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'ref'> {
  label?: string;
  prefixIcon?: string;
  postfixIcon?: string;
  wrapperClassName?: string;
  containerClassName?: string;
  inputClassName?: string;
}
