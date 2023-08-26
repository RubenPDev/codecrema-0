import React from 'react';
import PropTypes from 'prop-types';
//import { useTheme } from '@mui/material/styles';

const ReactLogo = ({ width = 160, height = 112 }) => {
  //const theme = useTheme();
  //const colorPrimaryMain = theme.palette.primary.main;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} style={{marginRight:'1rem'}} viewBox="-11.5 -10.23174 23 20.46348">
      <title>React Logo</title>
      <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
      <g stroke="#61dafb" stroke-width="1" fill="none">
        <ellipse rx="11" ry="4.2"/>
        <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
        <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
      </g>
    </svg>

  );
};

ReactLogo.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default ReactLogo;
