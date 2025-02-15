import { TActiveItem } from 'shared/ui';

export interface IWidgetUsersProfileNavigationProps {
  onSelected?: (arg: TActiveItem | undefined) => void;
  selected?: TActiveItem;
}
