import { FC } from 'react';
import { TypographyBase, ETypographyVariant, ETypographySize, ETypographyWeight } from '../../base';
import { ITypographyTextProps } from './TypographyText.props.ts';

export const TypographyText: FC<ITypographyTextProps> = ({
  size = ETypographySize.MEDIUM,
  weight = ETypographyWeight.NORMAL,
  children,
  ...rest
}) => {
  return (
    <TypographyBase variant={ETypographyVariant.PARAGRAPH} weight={weight} size={size} {...rest}>
      {children}
    </TypographyBase>
  );
};
