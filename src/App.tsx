import React from 'react';

import { ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';

import Home from './pages/Home';

import { store } from './store/store';
import theme from './theme/theme';

import './App.css';

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <div className="App">
          <Home />
        </div>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
