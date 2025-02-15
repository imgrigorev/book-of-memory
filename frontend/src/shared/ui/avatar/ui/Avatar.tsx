import { Link } from 'react-router-dom';
import { ROUTE_USERS_ME } from 'shared/router';
import classes from './Avatar.module.scss';

export const Avatar = () => {
  return (
    <Link to={ROUTE_USERS_ME}>
      <div className={classes.avatar}></div>
    </Link>
  );
};
