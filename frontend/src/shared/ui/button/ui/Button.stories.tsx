import type { Meta, StoryObj } from '@storybook/react';
import { withProviders } from 'shared/storybook';

import { Button } from '../index.ts';
import { ChevronRightIcon } from '../../icon/svg';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  decorators: [withProviders],
  component: Button,
  tags: ['autodocs'],
};

export default meta;

type TStory = StoryObj<typeof Button>;

export const Default: TStory = {
  args: {
    text: 'See all',
    postfixIcon: ChevronRightIcon,
    prefixIcon: ChevronRightIcon,
  },
};
