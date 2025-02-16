import { Link } from 'react-router-dom';
import { ROUTE_USERS_ME } from 'shared/router';
import classes from './Avatar.module.scss';
import { FC } from 'react';

interface IProps {
  initials?: string;
}

export const Avatar: FC<IProps> = ({ initials }) => {
  return (
    <div className={classes.avatar}>
      <Link to={ROUTE_USERS_ME} className={classes.link}>
        {initials}
      </Link>
    </div>
  );
};
