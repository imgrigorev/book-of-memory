import type { Meta, StoryObj } from '@storybook/react';
import '../../tokens/index.scss';

import { Logo } from '../index.ts';

const meta: Meta<typeof Logo> = {
  title: 'Components/Logo',
  component: Logo,
  tags: ['autodocs'],
};

export default meta;

type TStory = StoryObj<typeof Logo>;

export const Default: TStory = {};
