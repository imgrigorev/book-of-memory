import { useForm } from 'react-hook-form';
import { Button, ControllerInputText, wrapperOnSubmit, RequiredRule, EInputVariant } from 'shared/ui';
import { registerApi } from '../api';
import classes from './FeatureRegisterForm.module.scss';
import { useNavigate } from 'react-router-dom';
import { ROUTE_AUTH_LOGIN } from 'shared/router/config/path.ts';
import { TRegister } from './FeatureRegisterForm.types.ts';

export const FeatureRegisterForm = () => {
  const navigate = useNavigate();
  const { handleSubmit, control } = useForm<TRegister>();

  const handleCreateUser = wrapperOnSubmit(
    handleSubmit(async data => {
      await registerApi(data).then(() => navigate(ROUTE_AUTH_LOGIN));
    }),
  );

  return (
    <form className={classes.content} onSubmit={handleCreateUser}>
      <ControllerInputText
        rules={RequiredRule}
        control={control}
        name="name"
        label="Name"
        placeholder="John Doe"
        defaultValue="John Doe"
        variant={EInputVariant.DARK}
      />
      <ControllerInputText
        rules={RequiredRule}
        control={control}
        name="email"
        label="Email"
        defaultValue="johndoe@example.com"
        placeholder="johndoe@example.com"
        variant={EInputVariant.DARK}
      />
      <ControllerInputText
        rules={RequiredRule}
        control={control}
        name="password"
        type="password"
        label="Password"
        defaultValue="qwe123ewq"
        variant={EInputVariant.DARK}
      />

      <Button type="submit" text="Create account" />
    </form>
  );
};
