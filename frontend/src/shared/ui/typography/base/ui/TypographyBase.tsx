import { createElement, FC, useMemo } from 'react';
import classNames from 'classnames';

import { getTagNameByVariant } from '../lib/getTagNameByVariant.ts';
import { ITypographyBaseProps } from './TypographyBase.props.ts';
import { ETypographySize, ETypographyWeight } from './TypographyBase.types.ts';

import classes from './TypographyBase.module.scss';

export const TypographyBase: FC<ITypographyBaseProps> = ({
  size,
  weight,
  variant,
  href,
  className,
  children,
  onCLick,
}) => {
  const tagName = useMemo(() => getTagNameByVariant(variant), [variant]);

  const commonProps = {
    className: classNames(
      classes[tagName],
      {
        [classes.sm]: size === ETypographySize.SMALL,
        [classes.md]: size === ETypographySize.MEDIUM,
        [classes.lg]: size === ETypographySize.LARGE,

        [classes.bold]: weight === ETypographyWeight.BOLD,
        [classes.normal]: weight === ETypographyWeight.NORMAL,
      },
      className,
    ),
    ...(href && { href }),
    ...(onCLick && { onCLick }),
  };

  return createElement(tagName, commonProps, children);
};
