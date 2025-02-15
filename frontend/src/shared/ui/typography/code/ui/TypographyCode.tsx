import { FC } from 'react';
import { TypographyBase, ETypographyVariant } from '../../base';
import { ITypographyCodeProps } from './TypographyCode.props.ts';

export const TypographyCode: FC<ITypographyCodeProps> = ({ className, children }) => {
  return (
    <TypographyBase variant={ETypographyVariant.CODE} className={className}>
      {children}
    </TypographyBase>
  );
};
