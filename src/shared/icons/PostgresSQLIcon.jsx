import React from 'react';
import { ReactComponent as PostgresSQLSVG } from '../../assets/svg/PostgresSQL.svg';

const PostgresSQLIcon = ({ color = '#fff', size = 25, className = 'PostgresSQL-icon' }) => {
  return (
    <PostgresSQLSVG
      className={className}
      style={{ color, width: size, height: size }}
    />
  );
};

export default PostgresSQLIcon;