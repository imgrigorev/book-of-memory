import { INavigationItem, TActiveItem } from '../model/navigation.types.ts';

export interface INavigationMenuProps {
  list: INavigationItem[];
  hasToggle?: boolean;
  label?: string;
  selected?: TActiveItem;
  onSelected?: (arg: TActiveItem | undefined) => void;
}
