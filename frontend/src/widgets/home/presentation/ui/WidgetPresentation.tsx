import { Button, Image, Section, Typography, ChevronRightIcon } from 'shared/ui';
import { ESharedClassNames } from 'shared/ui/tokens/ESharedClassNames.ts';
import { items } from '../mocks';
import classes from './WidgetPresentation.module.scss';

export const WidgetPresentation = () => {
  return (
    <>
      {items.map(({ title, text, buttonLabel, image }, index) => (
        <Section
          key={index}
          painted
          mainContent={
            <div className={ESharedClassNames.FLEX} data-reverse={index % 2 === 0}>
              <header className={classes.header}>
                <div className={classes.header__description}>
                  <Typography.Title level={2}>{title}</Typography.Title>
                  <Typography.Text>{text}</Typography.Text>
                </div>

                <Button text={buttonLabel} postfixIcon={ChevronRightIcon} />
              </header>

              <div className={classes.image__wrapper}>
                <Image className={classes.image} src={image} alt="presentation image" />
              </div>
            </div>
          }
        />
      ))}
    </>
  );
};
