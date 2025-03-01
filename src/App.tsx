import React from 'react';

import { ThemeProvider } from '@mui/material';
import { store } from '@store/store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { HomePageContainer } from '@pages/home/Home.page.container';
import { MovieDetailsPageContainer } from '@pages/movie-details/MovieDetails.page.container';

import theme from './theme/theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <div className="App">
          <Router>
            <Routes>
              <Route path="/" element={<HomePageContainer />} />
              <Route
                path="/movie/:imdbID"
                element={<MovieDetailsPageContainer />}
              />
            </Routes>
          </Router>
        </div>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
