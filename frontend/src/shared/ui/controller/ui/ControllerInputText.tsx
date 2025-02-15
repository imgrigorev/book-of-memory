import { ChangeEvent } from 'react';
import { Controller } from 'react-hook-form';
import { Input } from '../../input';
import { TControllerInputTextProps, TValues } from './ControllerInputText.props.ts';

export const ControllerInputText = <TFieldValues extends TValues>(props: TControllerInputTextProps<TFieldValues>) => (
  <Controller
    {...props}
    render={({ field }) => {
      const { onChange, ...restComponentProps } = props;

      function handleChange(e: ChangeEvent<HTMLInputElement>) {
        field.onChange(e);
        onChange?.(e);
      }

      return <Input.Text {...restComponentProps} {...field} onChange={handleChange} />;
    }}
  />
);
