import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import MainScreen from './pages/MainScreen';

import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <MainScreen />
    </BrowserRouter>

    <GlobalStyle />
  </>
);

export default App;
