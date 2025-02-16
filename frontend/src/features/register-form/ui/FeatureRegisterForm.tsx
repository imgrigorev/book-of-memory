import { useForm } from 'react-hook-form';
import {
  Button,
  ControllerInputText,
  wrapperOnSubmit,
  RequiredRule,
  EInputVariant,
  Typography,
  ETypographySize,
} from 'shared/ui';
import { registerApi } from '../api';
import classes from './FeatureRegisterForm.module.scss';
import { useNavigate } from 'react-router-dom';
import { ROUTE_AUTH_LOGIN, ROUTE_AUTH_REGISTER } from 'shared/router/config/path.ts';
import { TRegister } from './FeatureRegisterForm.types.ts';

export const FeatureRegisterForm = () => {
  const navigate = useNavigate();
  const { handleSubmit, control } = useForm<TRegister>();

  const handleCreateUser = wrapperOnSubmit(
    handleSubmit(data => {
      registerApi(data).then(() => navigate(ROUTE_AUTH_LOGIN));
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

      <Button type="submit" text="Создать аккаунт" />

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ cursor: 'pointer' }}>
          <Typography.Link href={ROUTE_AUTH_LOGIN} size={ETypographySize.SMALL} className={classes.elk}>
            Войти
          </Typography.Link>
        </div>
      </div>
    </form>
  );
};
