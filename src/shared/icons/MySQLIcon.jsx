import React from 'react';
import { ReactComponent as MySQLSVG } from '../../assets/svg/MySQL.svg';

const MySQLIcon = ({ color = 'rgb(230,230,230)', size = 25, className = 'MySQL-icon' }) => {
  return (
    <MySQLSVG
      className={className}
      style={{  }}
    />
  );
};

export default MySQLIcon;