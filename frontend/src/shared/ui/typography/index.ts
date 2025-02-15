export { ETypographySize, ETypographyVariant, ETypographyWeight } from './base';
export type { TTypographyTitleLevel } from './title';

import { TypographyBase } from './base';
import { TypographyTitle } from './title';
import { TypographyText } from './text';
import { TypographyLink } from './link';
import { TypographyCode } from './code';

export const Typography = () => {
  return null;
};

Typography.Base = TypographyBase;
Typography.Title = TypographyTitle;
Typography.Text = TypographyText;
Typography.Link = TypographyLink;
Typography.Code = TypographyCode;
