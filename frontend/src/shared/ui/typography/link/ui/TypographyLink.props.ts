import { PropsWithChildren } from 'react';
import { ETypographySize } from '../../base';

export interface ITypographyLinkProps extends PropsWithChildren {
  size?: ETypographySize;
  href: string;
  className?: string;
}
