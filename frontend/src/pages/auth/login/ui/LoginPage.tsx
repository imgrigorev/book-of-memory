import { SectionCard, Image } from 'shared/ui';
import { LoginCoverImage } from 'shared/ui/assets/images';
import { FeatureLoginForm } from 'features/login-form';
import classes from './LoginPage.module.scss';

export const LoginPage = () => {
  return (
    <div className={classes.container}>
      <Image src={LoginCoverImage} className={classes.image} />

      <div className={classes.content}>
        <div className={classes.wrapper}>
          <SectionCard padding={false} title="Log in to your account" content={<FeatureLoginForm />} />
        </div>
      </div>
    </div>
  );
};
