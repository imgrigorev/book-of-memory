import { FC } from 'react';
import { ETypographyVariant, TypographyBase } from '../../base';
import { ITypographyTitleProps } from '../index.ts';

export const TypographyTitle: FC<ITypographyTitleProps> = ({ level, className, children }) => {
  if (level < 1 || level > 3) {
    console.error('Invalid level for headline');
    return null;
  }

  const variant = `headline${level}` as ETypographyVariant;

  return (
    <TypographyBase variant={variant} className={className}>
      {children}
    </TypographyBase>
  );
};
