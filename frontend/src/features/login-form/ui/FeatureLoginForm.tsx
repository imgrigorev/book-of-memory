import { useForm } from 'react-hook-form';
import {
  Button,
  ControllerInputText,
  EInputVariant,
  ETypographySize,
  RequiredRule,
  Typography,
  wrapperOnSubmit,
} from 'shared/ui';
import { TCredentials } from './FeatureLoginForm.types.ts';
import classes from './FeatureLoginForm.module.scss';
import { ROUTE_AUTH_LOGIN_ELK_REDIRECT, ROUTE_AUTH_REGISTER, ROUTE_MAIN } from 'shared/router';
import { sessionActions, useAppDispatch } from 'app/store';
import { loginThunk } from 'features/login-form/api';
import { useNavigate } from 'react-router-dom';

export const FeatureLoginForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { handleSubmit, control } = useForm<TCredentials>();

  const handleCreateUser = wrapperOnSubmit(
    handleSubmit((data: TCredentials) => {
      dispatch(loginThunk(data))
        .unwrap()
        .then(() => {
          navigate(ROUTE_MAIN);
          dispatch(sessionActions.setIsAuthenticated(true));
          dispatch(sessionActions.setIsAdmin(true));
        });
    }),
  );

  return (
    <form className={classes.content} onSubmit={handleCreateUser}>
      <ControllerInputText
        rules={RequiredRule}
        control={control}
        name="username"
        label="Имя пользователя"
        defaultValue="johndoe@example.com"
        placeholder="johndoe@example.com"
        variant={EInputVariant.DARK}
      />
      <ControllerInputText
        rules={RequiredRule}
        control={control}
        name="password"
        type="password"
        label="Пароль"
        defaultValue="qwe123ewq"
        variant={EInputVariant.DARK}
      />

      <div className={classes.actions}>
        <Button type="submit" text="Войти" />

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ cursor: 'pointer' }}>
            <Typography.Link href={ROUTE_AUTH_LOGIN_ELK_REDIRECT} size={ETypographySize.SMALL} className={classes.elk}>
              Войти через единый личный кабинет
            </Typography.Link>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ cursor: 'pointer' }}>
            <Typography.Link href={ROUTE_AUTH_REGISTER} size={ETypographySize.SMALL} className={classes.elk}>
              Создать аккаунт
            </Typography.Link>
          </div>
        </div>
      </div>
    </form>
  );
};
