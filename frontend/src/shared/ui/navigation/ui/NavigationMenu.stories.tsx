import type { Meta, StoryObj } from '@storybook/react';
import { withProviders } from 'shared/storybook';

import { NavigationMenu } from './NavigationMenu.tsx';

const meta: Meta<typeof NavigationMenu> = {
  title: 'Components/NavigationMenu',
  decorators: [withProviders],
  component: NavigationMenu,
  tags: ['autodocs'],
};

export default meta;

type TStory = StoryObj<typeof NavigationMenu>;

export const Default: TStory = {
  args: {
    list: [
      {
        id: '1',
        label: '1',
        to: '1',
      },
      {
        id: '2',
        label: 'Navigation menu item',
      },
    ],
  },
};
