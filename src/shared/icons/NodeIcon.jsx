import React from 'react';
import { ReactComponent as NodeSVG } from '../../assets/svg/Node.svg';

const NodeIcon = ({ color = 'rgb(230,230,230)', size = 25, className = 'Node-icon' }) => {
  return (
    <NodeSVG
      className={className}
      style={{  }}
    />
  );
};

export default NodeIcon;