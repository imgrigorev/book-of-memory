import { Image } from 'shared/ui';
import { LoginCoverImage } from 'shared/ui/assets/images';
import { FeatureLoginForm } from 'features/login-form';
import classes from './LoginPage.module.scss';

export const LoginPage = () => {
  return (
    <div className={classes.container}>
      <Image src={LoginCoverImage} className={classes.image} />

      <div className={classes.content}>
        <div className={classes.wrapper}>
          <FeatureLoginForm />
        </div>
      </div>
    </div>
  );
};
