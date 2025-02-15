import { Input, EInputVariant } from '../../index.ts';
import { SearchIcon } from '../../../icon';
import classes from './InputSearch.module.scss';

export const InputSearch = () => {
  return (
    <Input.Text
      type="search"
      placeholder="Поиск..."
      postfixIcon={SearchIcon}
      variant={EInputVariant.DARK}
      wrapperClassName={classes.search}
    />
  );
};
