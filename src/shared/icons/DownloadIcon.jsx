import React from 'react';
import { ReactComponent as DownloadSVG } from '../../assets/svg/Download.svg';

const DownloadIcon = ({ color = 'rgb(230,230,230)', size = 25, className = 'Download-icon' }) => {
  return (
    <DownloadSVG
      className={className}
      style={{  }}
    />
  );
};

export default DownloadIcon;