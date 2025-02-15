import type { Meta, StoryObj } from '@storybook/react';

import { Loader } from '../index.ts';
import { withProviders } from 'shared/storybook';

const meta: Meta<typeof Loader> = {
  title: 'Components/Loader',
  decorators: [withProviders],
  component: Loader,
  tags: ['autodocs'],
};

export default meta;

type TStory = StoryObj<typeof Loader>;

export const Default: TStory = {};
