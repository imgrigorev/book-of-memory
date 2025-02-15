import { ControllerProps } from 'react-hook-form';
import { IInputTextProps } from '../../input/text';

export type TValues = Record<string, IInputTextProps['value']>;

export type TControllerInputTextProps<TFieldValues extends TValues> = Omit<IInputTextProps, 'name'> &
  Omit<ControllerProps<TFieldValues>, 'render'>;
