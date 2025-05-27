import React from 'react';
import { ReactComponent as YoutubeSVG } from '../../assets/svg/YoutubeIcon.svg';

const YoutubeIcon = ({ color = 'rgb(230,230,230)', size = 25, className = 'Youtube-icon' }) => {
  return (
    <YoutubeSVG
      className={className}
      style={{   }}
    />
  );
};

export default YoutubeIcon;