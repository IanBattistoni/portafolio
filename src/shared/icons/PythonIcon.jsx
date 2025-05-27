import React from 'react';
import { ReactComponent as PythonSVG } from '../../assets/svg/Python.svg';

const PythonIcon = ({ color = 'rgb(230,230,230)', size = 25, className = 'Python-icon' }) => {
  return (
    <PythonSVG
      className={className}
      style={{  }}
    />
  );
};

export default PythonIcon;