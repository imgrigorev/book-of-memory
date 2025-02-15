import { FC, memo, useMemo } from 'react';
import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';
import { ROUTE_AUTH_LOGIN, ROUTE_MAIN } from 'shared/router';
import { ETypographySize, Typography, BywayLogoIcon, EIconSize, Button } from 'shared/ui';
import { FOOTER_CONTENT } from '../lib/constants.ts';
import classes from './WidgetFooter.module.scss';

export const WidgetFooter: FC = memo(() => {
  const location = useLocation();

  const content = useMemo(() => {
    return FOOTER_CONTENT.map(({ title, links }, index) => (
      <div key={index} className={classes.footer__column}>
        <Typography.Title level={3} className={classes.title}>
          {title}
        </Typography.Title>
        {links.map(({ name }, index) => (
          <Typography.Link key={index} size={ETypographySize.SMALL} className={classes.text} href="#">
            {name}
          </Typography.Link>
        ))}
      </div>
    ));
  }, []);

  if (location.pathname === ROUTE_AUTH_LOGIN) {
    return null;
  }

  return (
    <footer className={classes.footer}>
      <div className={classes.footer__content}>
        <div className={classNames(classes.footer__column, classes.company)}>
          <div className={classes.logo}>
            <Button as={Link} to={ROUTE_MAIN} postfixIcon={BywayLogoIcon} iconSize={EIconSize.LARGE} />
            <Typography.Title level={1} className={classes.title}>
              Byway
            </Typography.Title>
          </div>

          <Typography.Text size={ETypographySize.SMALL} className={classes.text}>
            Empowering learners through accessible and engaging online education. Byway is an online learning platform
            dedicated to providing high-quality, flexible, and affordable educational experiences.
          </Typography.Text>
        </div>

        {content}

        <div className={classes.footer__column}>
          <Typography.Title level={3} className={classes.title}>
            Contact Us
          </Typography.Title>

          <Typography.Text size={ETypographySize.SMALL} className={classes.text}>
            Address: Saint-Petersburg, Kronverkskaya st., building 7
          </Typography.Text>
          <Typography.Text size={ETypographySize.SMALL} className={classes.text}>
            Tel: 8(800) 555-35-35
          </Typography.Text>
          <Typography.Text size={ETypographySize.SMALL} className={classes.text}>
            Mail: bywayedu@webkul.in
          </Typography.Text>
        </div>
      </div>
    </footer>
  );
});
