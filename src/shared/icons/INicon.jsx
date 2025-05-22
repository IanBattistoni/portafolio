import React from 'react';
import { ReactComponent as INSVG } from '../../assets/svg/Insignia_IN.svg';

const INIcon = ({ color = '#fff', size = 25, className = 'IN-icon' }) => {
  return (
    <INSVG
      className={className}
      style={{ color, width: size, height: size }}
    />
  );
};

export default INIcon;