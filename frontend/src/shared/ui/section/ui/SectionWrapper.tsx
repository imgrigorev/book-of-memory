import { FC, PropsWithChildren } from 'react';
import { Typography, TTypographyTitleLevel } from '../../typography';
import { ISectionWrapperProps } from './SectionWrapper.props.ts';
import classes from './Section.module.scss';

export const SectionWrapper = ({ painted, children }: ISectionWrapperProps) => {
  return (
    <div className={classes.wrapper} data-painted={painted}>
      <section className={classes.section}>{children}</section>
    </div>
  );
};

interface ISectionHeaderProps extends PropsWithChildren {
  level?: TTypographyTitleLevel;
  title: string;
}

const Header: FC<ISectionHeaderProps> = ({ title, level = 1, children }) => {
  return (
    <header className={classes.header}>
      <Typography.Title level={level}>{title}</Typography.Title>
      {children}
    </header>
  );
};

type TSectionMainProps = PropsWithChildren;

const Main: FC<TSectionMainProps> = ({ children }) => {
  return <main className={classes.main}>{children}</main>;
};

SectionWrapper.Header = Header;
SectionWrapper.Main = Main;
