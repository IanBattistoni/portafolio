import React from 'react';
import { ReactComponent as ExpressSVG } from '../../assets/svg/Express.svg';

const ExpressIcon = ({ color = 'rgb(230,230,230)', size = 25, className = 'Express-icon' }) => {
  return (
    <ExpressSVG
      className={className}
      style={{  }}
    />
  );
};

export default ExpressIcon;