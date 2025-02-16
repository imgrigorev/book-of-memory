import { Image, SectionCard } from 'shared/ui';
import { LoginCoverImage, RegisterCoverImage } from 'shared/ui/assets/images';
import { FeatureRegisterForm } from 'features/register-form';
import classes from './RegisterPage.module.scss';
import { FeatureLoginForm } from 'features/login-form';

export const RegisterPage = () => {
  return (
    <div className={classes.container}>
      <Image src={LoginCoverImage} className={classes.image} />

      <div className={classes.content}>
        <div className={classes.wrapper}>
          <FeatureRegisterForm />
        </div>
      </div>
    </div>
  );
};
