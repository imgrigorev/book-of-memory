export const enum EIconSize {
  SMALL = 'sm',
  MEDIUM = 'md',
  LARGE = 'lg',
}

export interface IIconProps {
  src: string;
  className?: string;
  size?: EIconSize;
}
