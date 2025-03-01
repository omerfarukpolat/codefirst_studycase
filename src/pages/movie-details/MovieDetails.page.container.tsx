import React, { useEffect, useState } from 'react';

import { getMovieDetails } from '@services/omdbService';
import { RootState } from '@store/store';
import { MovieDetails } from '@store/types/Movie.types';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import MovieDetailsPageComponent from './MovieDetails.page.component';

export const MovieDetailsPageContainer = (): React.JSX.Element => {
  const [movie, setMovie] = useState<MovieDetails | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const selectedMovie = useSelector(
    (state: RootState) => state.movies.selectedMovie
  );
  const [error, setError] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovieDetails = async (): Promise<void> => {
      setLoading(true);
      if (selectedMovie) {
        try {
          const details = await getMovieDetails(selectedMovie.imdbID);
          setMovie(details);
          setLoading(false);
        } catch {
          setError(true);
          setLoading(false);
        }
      } else {
        navigate('/');
      }
    };
    fetchMovieDetails();
  }, [selectedMovie, navigate]);

  return (
    <MovieDetailsPageComponent
      error={error}
      movie={movie}
      loading={loading}
      selectedMovie={selectedMovie}
    />
  );
};
