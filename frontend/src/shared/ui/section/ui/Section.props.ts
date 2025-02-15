import { ReactNode } from 'react';

export interface ISectionProps {
  painted?: boolean;
  title?: string;
  headerContent?: ReactNode;
  mainContent?: ReactNode;
}
