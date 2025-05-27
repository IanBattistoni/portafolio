import React from 'react';
import { ReactComponent as PostgresSQLSVG } from '../../assets/svg/PostgresSQL.svg';

const PostgresSQLIcon = ({ color = 'rgb(230,230,230)', size = 25, className = 'PostgresSQL-icon' }) => {
  return (
    <PostgresSQLSVG
      className={className}
      style={{  }}
    />
  );
};

export default PostgresSQLIcon;