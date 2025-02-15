import type { Meta, StoryObj } from '@storybook/react';
import { withProviders } from 'shared/storybook';
import { WidgetHeader } from './WidgetHeader.tsx';

// TODO: изменение при логине

const meta: Meta<typeof WidgetHeader> = {
  title: 'Widgets/WidgetHeader',
  decorators: [withProviders],
  component: WidgetHeader,
  tags: ['autodocs'],
};

export default meta;

type TStory = StoryObj<typeof WidgetHeader>;

export const Default: TStory = {};
