export interface INavigationItem<T = string> {
  id: T;
  label: string;
  to?: string;
  onClick?: (id: string) => void;
}

export type TActiveItem<T = string> = INavigationItem<T>['id'];
