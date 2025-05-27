import React from 'react';
import { ReactComponent as TypeScriptSVG } from '../../assets/svg/TypeScript.svg';

const TypeScriptIcon = ({ color = 'rgb(230,230,230)', size = 25, className = 'TypeScript-icon' }) => {
  return (
    <TypeScriptSVG
      className={className}
      style={{  }}
    />
  );
};

export default TypeScriptIcon;