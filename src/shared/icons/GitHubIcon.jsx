import React from 'react';
import { ReactComponent as GitHubSVG } from '../../assets/svg/Github-svgrepo.svg';

const GitHubIcon = ({ color = 'rgb(230,230,230)', size = 25, className = 'github-icon' }) => {
  return (
    <GitHubSVG
      className={className}
      style={{  }}
    />
  );
};

export default GitHubIcon;