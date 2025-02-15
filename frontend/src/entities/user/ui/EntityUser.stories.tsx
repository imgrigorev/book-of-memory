import type { Meta, StoryObj } from '@storybook/react';
import { withProviders } from 'shared/storybook';
import { AvatarImage } from 'shared/ui/assets/images';
import { EntityUser } from './EntityUser.tsx';

const meta: Meta<typeof EntityUser> = {
  title: 'Entities/EntityUser',
  decorators: [withProviders],
  component: EntityUser,
  tags: ['autodocs'],
};

export default meta;

type TStory = StoryObj<typeof EntityUser>;

export const Default: TStory = {
  args: {
    id: '1',
    avatar: AvatarImage,
    profession: 'UI/UX Designer',
    fullName: 'Ronald Richards',
  },
};
