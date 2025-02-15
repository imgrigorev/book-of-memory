import { FC } from 'react';
import { TypographyBase, ETypographySize, ETypographyVariant } from '../../base';
import { ITypographyLinkProps } from './TypographyLink.props.ts';

export const TypographyLink: FC<ITypographyLinkProps> = ({
  size = ETypographySize.MEDIUM,
  href,
  className,
  children,
}) => {
  return (
    <TypographyBase variant={ETypographyVariant.LINK} href={href} size={size} className={className}>
      {children}
    </TypographyBase>
  );
};
