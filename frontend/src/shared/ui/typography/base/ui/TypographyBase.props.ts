import { PropsWithChildren } from 'react';
import { ETypographySize, ETypographyVariant, ETypographyWeight } from './TypographyBase.types.ts';

export interface ITypographyBaseProps extends PropsWithChildren {
  variant: ETypographyVariant;
  weight?: ETypographyWeight;
  size?: ETypographySize;
  href?: string;
  className?: string;
  onCLick?: () => void;
}
