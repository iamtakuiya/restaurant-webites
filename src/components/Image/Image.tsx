import React from 'react';
import type { ImageProps } from './type';

const Image: React.FC<ImageProps> = ({ src, alt, className, icon }) => (
  <figure className={className}>
    {icon && <span className={`styles.${className}`}></span>}
    {src && <img src={src} alt={alt} />}
  </figure>
);

export default Image;