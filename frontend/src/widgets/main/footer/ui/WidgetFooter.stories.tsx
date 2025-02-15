import type { Meta, StoryObj } from '@storybook/react';
import { withProviders } from 'shared/storybook';
import { WidgetFooter } from './WidgetFooter.tsx';

const meta: Meta<typeof WidgetFooter> = {
  title: 'Widgets/WidgetFooter',
  decorators: [withProviders],
  component: WidgetFooter,
  tags: ['autodocs'],
};

export default meta;

type TStory = StoryObj<typeof WidgetFooter>;

export const Default: TStory = {};
