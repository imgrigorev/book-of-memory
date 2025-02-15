import { FC } from 'react';
import { TImageProps } from './Image.props.ts';

export const Image: FC<TImageProps> = ({ src, alt, className }) => {
  return <img src={src} alt={alt} className={className} />;
};
