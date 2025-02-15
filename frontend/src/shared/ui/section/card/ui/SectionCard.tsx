import { FC } from 'react';
import { Typography } from '../../../typography';
import { ISectionCardProps } from './SectionCard.props.ts';
import classes from './SectionCard.module.scss';

export const SectionCard: FC<ISectionCardProps> = ({ title, level, painted, padding = true, content }) => {
  return (
    <section className={classes.section} data-painted={painted} data-padding={padding}>
      {!!title && !!level && (
        <header className={classes.header}>
          <Typography.Title level={level}>{title}</Typography.Title>
          {content}
        </header>
      )}
      {!!content && <main>{content}</main>}
    </section>
  );
};
