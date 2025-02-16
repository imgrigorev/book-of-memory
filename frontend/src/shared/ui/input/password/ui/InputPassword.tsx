import { Input } from '../../index.ts';
import classes from './InputPassword.module.scss';

export const InputPassword = () => {
  return <Input.Text type="password" label="Пароль" wrapperClassName={classes.search} />;
};
