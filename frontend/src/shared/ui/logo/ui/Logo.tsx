import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '../../typography';
import classes from './Logo.module.scss';
import { ROUTE_MAIN } from 'shared/router';

export const Logo: FC = () => {
  return (
    <Link to={ROUTE_MAIN} className={classes.container}>
      <Typography.Title level={1} className={classes.text}>
        ИРМА
      </Typography.Title>
    </Link>
  );
};
