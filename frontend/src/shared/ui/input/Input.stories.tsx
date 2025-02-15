import type { Meta, StoryObj } from '@storybook/react';
import { withProviders } from 'shared/storybook';

import { Input } from '../index.ts';
import { IInputTextProps } from './text';
import { IInputTextareaProps } from './textarea';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  decorators: [withProviders],
  component: Input,
  tags: ['autodocs'],
};

export default meta;

const TEMPLATE_TEXT = 'placeholder...';

type TInputTextStory = StoryObj<typeof Input.Text>;
const renderElement = (props: IInputTextProps) => <Input.Text {...props} />;

export const Default: TInputTextStory = {
  args: {
    placeholder: TEMPLATE_TEXT,
  },
  render: renderElement,
};

type TInputSearchStory = StoryObj<typeof Input.Search>;
const renderSearch = () => <Input.Search />;

export const Search: TInputSearchStory = {
  render: renderSearch,
};

type TInputPasswordStory = StoryObj<typeof Input.Password>;
const renderPassword = () => <Input.Password />;

export const Password: TInputPasswordStory = {
  render: renderPassword,
};

type TInputTextareaStory = StoryObj<typeof Input.Textarea>;
const renderTextarea = (props: IInputTextareaProps) => <Input.Textarea {...props} />;

export const Textarea: TInputTextareaStory = {
  args: {
    placeholder: TEMPLATE_TEXT,
  },
  render: renderTextarea,
};
