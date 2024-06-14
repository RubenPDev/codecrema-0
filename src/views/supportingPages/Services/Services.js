import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Container from 'common/Container';
import {
  Hero,
  WhatWeDo,
} from './components';

const Services = () => {
  

  return (
    <Box>
      <Container>
        <Hero />
      </Container>
      <Container>
        <WhatWeDo />
      </Container>

    </Box>
  );
};

Services.propTypes = {
  themeMode: PropTypes.string.isRequired,
};

export default Services;
