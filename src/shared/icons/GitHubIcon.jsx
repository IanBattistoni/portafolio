import React from 'react';
import { ReactComponent as GitHubSVG } from '../../assets/svg/Github-svgrepo.svg';

const GitHubIcon = ({ color = '#fff', size = 25, className = 'github-icon' }) => {
  return (
    <GitHubSVG
      className={className}
      style={{ color, width: size, height: size }}
    />
  );
};

export default GitHubIcon;