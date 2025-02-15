import { FC } from 'react';
import { Typography, ETypographySize, Image } from 'shared/ui';
import { TemplateAvatarImage } from 'shared/ui/assets/images';
import { TEntityUserProps } from './EntityUser.props.ts';
import classes from './EntityUser.module.scss';

export const EntityUser: FC<TEntityUserProps> = ({ avatar, fullName, profession }) => {
  return (
    <article className={classes.container}>
      <Image src={avatar || TemplateAvatarImage} alt="avatar" className={classes.avatar} />
      <div className={classes.info}>
        <Typography.Text size={ETypographySize.MEDIUM} className={classes.full_name}>
          {fullName ?? 'Нет данных'}
        </Typography.Text>
        <Typography.Text size={ETypographySize.SMALL} className={classes.profession}>
          {profession ?? 'Нет данных'}
        </Typography.Text>
      </div>
    </article>
  );
};
