import { PropsWithChildren } from 'react';

export type TTypographyTitleLevel = 1 | 2 | 3;

export interface ITypographyTitleProps extends PropsWithChildren {
  level: TTypographyTitleLevel;
  className?: string;
}
