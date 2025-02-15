import { createContext, FC, PropsWithChildren, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRightIcon, ETypographyWeight, Icon, Typography } from 'shared/ui';
import { INavigationItem, TActiveItem } from '../model/navigation.types.ts';
import classes from './Navigation.module.scss';

interface INavigationContext {
  setActiveItem: (arg: TActiveItem | undefined) => void;
  currentItemIsActive: (arg: TActiveItem) => boolean;
  activeItem: TActiveItem | undefined;
  toggleIsOpen: () => void;
  isOpen: boolean;
  hasToggle: boolean;
}

const NavigationContext = createContext<INavigationContext | null>(null);

const useNavigationContext = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigationContext must be used within a Navigation');
  }
  return context;
};

interface INavigationProps extends PropsWithChildren {
  hasToggle: boolean;
  selected?: TActiveItem;
  onSelected?: (arg: TActiveItem | undefined) => void;
}

export const Navigation = ({ selected, onSelected, hasToggle = false, children }: INavigationProps) => {
  const [activeItem, setActiveItemState] = useState<TActiveItem | undefined>(selected || undefined);
  const [isOpen, setIsOpen] = useState(false);

  const setActiveItem = (id: TActiveItem | undefined) => {
    setActiveItemState(id);
    onSelected?.(id);
  };

  const toggleIsOpen = () => setIsOpen(prev => !prev);
  const currentItemIsActive = (id: TActiveItem) => activeItem === id;

  const value: INavigationContext = {
    activeItem,
    setActiveItem,
    currentItemIsActive,
    isOpen,
    toggleIsOpen,
    hasToggle,
  };

  return (
    <NavigationContext.Provider value={value}>
      <nav className={classes.navigation}>{children}</nav>
    </NavigationContext.Provider>
  );
};

interface INavigationHeaderProps {
  label?: string;
}

const Header: FC<INavigationHeaderProps> = ({ label }) => {
  const { hasToggle, toggleIsOpen } = useNavigationContext();

  if (!hasToggle && !label) return null;

  return (
    <header className={classes.header} onClick={toggleIsOpen}>
      {!!label && <Typography.Text weight={ETypographyWeight.BOLD}>{label}</Typography.Text>}
      {hasToggle && <Icon src={ChevronRightIcon} />}
    </header>
  );
};

const List: FC<PropsWithChildren> = ({ children }) => {
  const { hasToggle, isOpen } = useNavigationContext();

  const content = <ul className={classes.list}>{children}</ul>;

  if (hasToggle) {
    return isOpen && content;
  }

  return content;
};

type TNavigationItemProps = INavigationItem;

const Item: FC<TNavigationItemProps> = ({ id, label, to, onClick }) => {
  const { setActiveItem, currentItemIsActive } = useNavigationContext();

  const isActive = currentItemIsActive(id);

  const handleClick = () => {
    setActiveItem(id);
    onClick?.(id);
  };

  const content = (
    <li onClick={handleClick} className={classes.item} data-active={isActive}>
      <Typography.Text>{label}</Typography.Text>
    </li>
  );

  if (to) {
    return (
      <Link to={to} className={classes.link}>
        {content}
      </Link>
    );
  }

  return content;
};

Navigation.Header = Header;
Navigation.List = List;
Navigation.Item = Item;
