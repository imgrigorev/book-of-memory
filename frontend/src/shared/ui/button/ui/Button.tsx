import { ElementType } from 'react';
import classNames from 'classnames';
import { Typography } from '../../typography';
import { Icon } from '../../icon';
import { TButtonProps } from './Button.props.ts';
import classes from './Button.module.scss';

export const Button = <T extends ElementType = 'button'>({
  text,
  prefixIcon,
  postfixIcon,
  iconSize,
  containerClassName,
  textClassName,
  as,
  ...props
}: TButtonProps<T>) => {
  const Component = as || 'button';

  return (
    <Component {...props} data-text={!!text} className={classNames(classes.button, containerClassName)}>
      {!!prefixIcon && <Icon src={prefixIcon} size={iconSize} />}
      {!!text && <Typography.Text className={classNames(classes.text, textClassName)}>{text}</Typography.Text>}
      {!!postfixIcon && <Icon src={postfixIcon} size={iconSize} />}
    </Component>
  );
};
