import React from 'react';
import { Normalize } from 'styled-normalize';

import GlobalStyle from './globalStyle';

const App = () => (
  <React.Fragment>
    <Normalize />
    <GlobalStyle />
    <h1>Hello World!</h1>
  </React.Fragment>
);

export default App;