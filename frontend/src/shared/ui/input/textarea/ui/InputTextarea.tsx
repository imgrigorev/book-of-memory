import { forwardRef } from 'react';
import classNames from 'classnames';
import { Icon } from '../../../icon';
import { Typography, ETypographyWeight } from '../../../typography';
import { IInputTextareaProps } from './InputTextarea.props.ts';
import classes from './InputTextarea.module.scss';

export const InputTextarea = forwardRef<HTMLTextAreaElement, IInputTextareaProps>(
  ({ label, prefixIcon, postfixIcon, wrapperClassName, containerClassName, inputClassName, ...props }, ref) => {
    return (
      <div className={classNames(classes.wrapper, wrapperClassName)}>
        {!!label && <Typography.Text weight={ETypographyWeight.BOLD}>{label}</Typography.Text>}
        <div className={classNames(classes.container, containerClassName)}>
          {!!prefixIcon && <Icon src={prefixIcon} />}
          <textarea {...props} ref={ref} className={classNames(classes.input, inputClassName)} />
          {!!postfixIcon && <Icon src={postfixIcon} />}
        </div>
      </div>
    );
  },
);
