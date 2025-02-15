import { FC } from 'react';
import { NavigationMenu } from 'shared/ui';
import { itemsMenu } from '../lib';
import { IWidgetUsersProfileNavigationProps } from './WidgetUsersProfileNavigation.props.ts';

export const WidgetUsersProfileNavigation: FC<IWidgetUsersProfileNavigationProps> = ({ selected, onSelected }) => {
  return <NavigationMenu list={itemsMenu} selected={selected} onSelected={onSelected} />;
};
