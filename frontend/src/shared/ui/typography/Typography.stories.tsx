import type { Meta, StoryObj } from '@storybook/react';
import { withProviders } from 'shared/storybook';

import { ETypographySize, ETypographyVariant, Typography } from './index.ts';
import { ITypographyTitleProps } from './title';
import { ITypographyTextProps } from './text';
import { ITypographyLinkProps } from './link';
import { ITypographyCodeProps } from './code';
import { ITypographyBaseProps } from './base';

const meta: Meta<typeof Typography> = {
  title: 'Components/Typography',
  decorators: [withProviders],
  component: Typography,
  tags: ['autodocs'],
};

export default meta;

const TEMPLATE_TEXT = 'Lorem ipsum dolor sit amet, consectetur';

type TTypographyBaseStory = StoryObj<typeof Typography.Base>;
const renderElement = (props: ITypographyBaseProps) => <Typography.Base {...props} />;

export const Paragraph: TTypographyBaseStory = {
  args: {
    variant: ETypographyVariant.PARAGRAPH,
    size: ETypographySize.MEDIUM,
    children: TEMPLATE_TEXT,
  },
  render: renderElement,
};

type TTypographyTitleStory = StoryObj<typeof Typography.Title>;
const renderTitle = (props: ITypographyTitleProps) => <Typography.Title {...props} />;

export const H1: TTypographyTitleStory = {
  args: {
    level: 1,
    children: TEMPLATE_TEXT,
  },
  render: renderTitle,
};

export const H2: TTypographyTitleStory = {
  args: {
    level: 2,
    children: TEMPLATE_TEXT,
  },
  render: renderTitle,
};

export const H3: TTypographyTitleStory = {
  args: {
    level: 3,
    children: TEMPLATE_TEXT,
  },
  render: renderTitle,
};

type TTypographyTextStory = StoryObj<typeof Typography.Text>;
const renderText = (props: ITypographyTextProps) => <Typography.Text {...props} />;

export const Text: TTypographyTextStory = {
  args: {
    children: TEMPLATE_TEXT,
  },
  render: renderText,
};

type TTypographyLinkStory = StoryObj<typeof Typography.Link>;
const renderLink = (props: ITypographyLinkProps) => <Typography.Link {...props} />;

export const Link: TTypographyLinkStory = {
  args: {
    children: TEMPLATE_TEXT,
  },
  render: renderLink,
};

type TTypographyCodeStory = StoryObj<typeof Typography.Code>;
const renderCode = (props: ITypographyCodeProps) => <Typography.Code {...props} />;

export const Code: TTypographyCodeStory = {
  args: {
    children: TEMPLATE_TEXT,
  },
  render: renderCode,
};
