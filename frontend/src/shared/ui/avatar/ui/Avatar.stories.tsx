import type { Meta, StoryObj } from '@storybook/react';
import { withProviders } from 'shared/storybook';

import { Avatar } from '../index.ts';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  decorators: [withProviders],
  component: Avatar,
  tags: ['autodocs'],
};

export default meta;

type TStory = StoryObj<typeof Avatar>;

export const Default: TStory = {};
