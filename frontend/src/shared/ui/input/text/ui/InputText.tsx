import { forwardRef } from 'react';
import classNames from 'classnames';
import { Icon } from '../../../icon';
import { Typography, ETypographyWeight } from '../../../typography';
import { EInputVariant, IInputTextProps } from './InputText.props.ts';
import classes from './InputText.module.scss';

export const InputText = forwardRef<HTMLInputElement, IInputTextProps>(
  (
    {
      label,
      variant = EInputVariant.LIGHT,
      prefixIcon,
      postfixIcon,
      wrapperClassName,
      containerClassName,
      inputClassName,
      ...props
    },
    ref,
  ) => {
    return (
      <div className={classNames(classes.wrapper, wrapperClassName)}>
        {!!label && <Typography.Text weight={ETypographyWeight.BOLD}>{label}</Typography.Text>}
        <div data-variant={variant} className={classNames(classes.container, containerClassName)}>
          {!!prefixIcon && <Icon src={prefixIcon} />}
          <input {...props} ref={ref} className={classNames(classes.input, inputClassName)} />
          {!!postfixIcon && <Icon src={postfixIcon} />}
        </div>
      </div>
    );
  },
);
