import { useForm } from 'react-hook-form';
import { Button, ControllerInputText, EInputVariant, RequiredRule, Typography } from 'shared/ui';
import { TCredentials } from './FeatureLoginForm.types.ts';
import classes from './FeatureLoginForm.module.scss';
import { ROUTE_AUTH_LOGIN_ELK_REDIRECT } from 'shared/router';

export const FeatureLoginForm = () => {
  const { control } = useForm<TCredentials>();

  const handleCreateUser = () => {};
  const handleLoginELK = async () => {
    // @ts-ignore
    window.location = 'http://hackathon-2.orb.ru/api/v1/elk-auth';
  };

  return (
    <form className={classes.content} onSubmit={handleCreateUser}>
      <ControllerInputText
        rules={RequiredRule}
        control={control}
        name="email"
        label="Логин"
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
          <div style={{ cursor: 'pointer' }} onClick={handleLoginELK}>
            <Typography.Link href={ROUTE_AUTH_LOGIN_ELK_REDIRECT} className={classes.elk}>
              Войти через единый личный кабинет
            </Typography.Link>
          </div>
        </div>
      </div>
    </form>
  );
};
