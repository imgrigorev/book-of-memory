import { Button, Image, Typography, ChevronRightIcon, Section } from 'shared/ui';
import { HomeCoverImage } from 'shared/ui/assets/images';
import classes from './WidgetCover.module.scss';

export const WidgetCover = () => {
  return (
    <Section
      painted
      mainContent={
        <div className={classes.grid}>
          <header className={classes.header}>
            <div className={classes.description}>
              <Typography.Title level={1}>Unlock Your Potential with Byway</Typography.Title>
              <Typography.Text>
                Welcome to Byway, where learning knows no bounds. We believe that education is the key to personal and
                professional growth, and we're here to guide you on your journey to success.
              </Typography.Text>
            </div>

            <Button text="Start your instructor journey" postfixIcon={ChevronRightIcon} />
          </header>

          <Image className={classes.image} src={HomeCoverImage} alt="cover image" />
        </div>
      }
    />
  );
};
