import { Image, SectionCard } from 'shared/ui';
import { RegisterCoverImage } from 'shared/ui/assets/images';
import { FeatureRegisterForm } from 'features/register-form';
import classes from './RegisterPage.module.scss';

export const RegisterPage = () => {
  return (
    <div className={classes.container}>
      <Image src={RegisterCoverImage} />

      <div className={classes.content}>
        <SectionCard padding={false} title="Create Your Account" content={<FeatureRegisterForm />} />
      </div>
    </div>
  );
};
