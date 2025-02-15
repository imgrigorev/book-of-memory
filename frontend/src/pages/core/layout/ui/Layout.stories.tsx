import type { Meta, StoryObj } from '@storybook/react';
import { withProviders } from 'shared/storybook';
import { Layout } from './Layout.tsx';

const meta: Meta<typeof Layout> = {
  title: 'Widgets/WidgetLayout',
  decorators: [withProviders],
  component: Layout,
  tags: ['autodocs'],
};

export default meta;

type TStory = StoryObj<typeof Layout>;

export const Default: TStory = {};
