import { ReactNode } from 'react';
import { TTypographyTitleLevel } from '../../../typography/title';

export interface ISectionCardProps {
  painted?: boolean;
  padding?: boolean;
  level?: TTypographyTitleLevel;
  title?: string;
  content?: ReactNode;
}
