import { Input } from '../../index.ts';
import classes from './InputPassword.module.scss';

export const InputPassword = () => {
  return <Input.Text type="password" label="Password" wrapperClassName={classes.search} />;
};
