import { ButtonHTMLAttributes, ComponentPropsWithoutRef, ElementType } from 'react';
import { EIconSize } from 'shared/ui';

interface IButton<T extends ElementType = 'button'> extends ButtonHTMLAttributes<HTMLButtonElement> {
  containerClassName?: string;
  textClassName?: string;
  text?: string;
  prefixIcon?: string;
  postfixIcon?: string;
  iconSize?: EIconSize;
  as?: T;
}

export type TButtonProps<T extends ElementType> = IButton<T> & Omit<ComponentPropsWithoutRef<T>, keyof IButton>;
