import React from 'react';
import { ReactComponent as NestSVG } from '../../assets/svg/Nest.svg';

const NestIcon = ({ color = 'rgb(230,230,230)', size = 25, className = 'Nest-icon' }) => {
  return (
    <NestSVG
      className={className}
      style={{ color, width: size, height: size }}
    />
  );
};

export default NestIcon;