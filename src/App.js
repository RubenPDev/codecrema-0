import React from 'react';
import { HashRouter } from 'react-router-dom';
import Routes from './Routes';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'aos/dist/aos.css';

const App = () => {
  return (
    <HashRouter>
      <Routes />
    </HashRouter>
  );
};

export default App;
