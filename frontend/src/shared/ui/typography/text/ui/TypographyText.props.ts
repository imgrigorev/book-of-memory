import { PropsWithChildren } from 'react';
import { ETypographySize, ETypographyWeight } from '../../base';

export interface ITypographyTextProps extends PropsWithChildren {
  size?: ETypographySize;
  weight?: ETypographyWeight;
  className?: string;
  onClick?: () => void;
}
