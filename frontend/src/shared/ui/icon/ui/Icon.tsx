import { FC } from 'react';
import { ReactSVG } from 'react-svg';
import classNames from 'classnames';
import { EIconSize, IIconProps } from './Icon.props.ts';
import classes from './Icon.module.scss';

export const Icon: FC<IIconProps> = ({ src, size = EIconSize.MEDIUM, className }) => {
  return <ReactSVG src={src} className={classNames(classes.container, className)} data-size={size} />;
};
