import React from 'react';
import { ReactComponent as AngularSVG } from '../../assets/svg/Angular.svg';

const AngularIcon = ({ color = 'rgb(230,230,230)', size = 25, className = 'Angular-icon' }) => {
  return (
    <AngularSVG
      className={className}
      style={{ color, width: size, height: size }}
    />
  );
};

export default AngularIcon;