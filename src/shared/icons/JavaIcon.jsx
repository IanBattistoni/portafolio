import React from 'react';
import { ReactComponent as JavaSVG } from '../../assets/svg/Java.svg';

const JavaIcon = ({ color = 'rgb(230,230,230)', size = 25, className = 'Java-icon' }) => {
  return (
    <JavaSVG
      className={className}
      style={{ color, width: size, height: size }}
    />
  );
};

export default JavaIcon;