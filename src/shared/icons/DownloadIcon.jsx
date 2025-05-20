import React from 'react';
import { ReactComponent as DownloadSVG } from '../../assets/svg/Download.svg';

const DownloadIcon = ({ color = 'white', size = 25, className = 'Download-icon' }) => {
  return (
    <DownloadSVG
      className={className}
      style={{ color, width: size, height: size }}
    />
  );
};

export default DownloadIcon;