import React from 'react';
import { ReactComponent as LinkedInSVG } from '../../assets/svg/LinkedIn-svgrepo.svg';

const LinkedInIcon = ({ color = 'rgb(230,230,230)', size = 25, className = 'linkedin-icon' }) => {
  return (
    <LinkedInSVG
      className={className}
      style={{  }}
    />
  );
};

export default LinkedInIcon;