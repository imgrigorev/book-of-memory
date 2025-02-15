import { INavigationMenuProps } from './NavigationMenu.props.ts';
import { Navigation } from './Navigation.tsx';

export const NavigationMenu = ({ list, hasToggle = false, label, selected, onSelected }: INavigationMenuProps) => {
  return (
    <Navigation hasToggle={hasToggle} selected={selected} onSelected={onSelected}>
      <Navigation.Header label={label} />
      <Navigation.List>
        {list.map(item => (
          <Navigation.Item key={item.id} {...item} />
        ))}
      </Navigation.List>
    </Navigation>
  );
};
