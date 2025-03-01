'use client';

import React from 'react';

import { Box, Divider, Grid2, Paper, Rating, Typography } from '@mui/material';
import { Movie, MovieDetails } from '@store/types/Movie.types';

import GenreChip from '@components/GenreChip';
import MovieDetailsSkeleton from '@components/MovieDetailsSkeleton';
import MovieMetadata from '@components/MovieMetadata';

import '@styles/customStyles.scss';

type MovieDetailsPageProps = {
  movie: MovieDetails | null;
  loading: boolean;
  selectedMovie: Movie | null;
};
const MovieDetailsPageComponent = ({
  movie,
  loading,
  selectedMovie,
}: MovieDetailsPageProps): React.JSX.Element => {
  if (loading) {
    return <MovieDetailsSkeleton />;
  }

  if (!selectedMovie) {
    return (
      <Box className="movie-details-error">
        <Typography variant="h5">
          No movie selected. Please go back and select a movie.
        </Typography>
      </Box>
    );
  }

  if (!movie) {
    return (
      <Box className="movie-details-error">
        <Typography variant="h5">Movie details could not be loaded</Typography>
      </Box>
    );
  }

  const rating = movie.imdbRating ? Number.parseFloat(movie.imdbRating) / 2 : 0;

  return (
    <Box className="movie-details-container">
      <div className="movie-details-hero">
        <div
          className="movie-details-backdrop"
          style={{ backgroundImage: `url(${movie.Poster})` }}
        />
        <div className="movie-details-overlay" />
        <Grid2 container className="movie-details-content">
          <Grid2 className="movie-details-poster-container">
            <img
              src={
                movie.Poster !== 'N/A'
                  ? movie.Poster
                  : '/placeholder-poster.png'
              }
              alt={movie.Title}
              className="movie-details-poster"
            />
          </Grid2>
          <Grid2 className="movie-details-info">
            <Typography variant="h3" className="movie-details-title">
              {movie.Title}
            </Typography>
            <Box className="movie-details-subtitle">
              <Typography variant="h6">{movie.Year}</Typography>
              <Typography variant="h6">•</Typography>
              <Typography variant="h6">{movie.Rated}</Typography>
              <Typography variant="h6">•</Typography>
              <Typography variant="h6">{movie.Runtime}</Typography>
            </Box>
            <Box className="movie-details-genres">
              {movie.Genre.split(', ').map((genre) => (
                <GenreChip key={genre} genre={genre} />
              ))}
            </Box>
            <Box className="movie-details-rating">
              <Rating value={rating} precision={0.5} readOnly />
              <Typography variant="body1">{movie.imdbRating}/10</Typography>
            </Box>
          </Grid2>
        </Grid2>
      </div>

      <Paper className="movie-details-paper">
        <Grid2 container spacing={6}>
          <Grid2>
            <Typography variant="h5" className="section-title">
              Plot
            </Typography>

            <Typography variant="body1" className="movie-plot">
              {movie.Plot}
            </Typography>
          </Grid2>

          <Grid2>
            <Divider />
          </Grid2>

          <Grid2>
            <Box sx={{ mb: 3 }}>
              <MovieMetadata title="Director" content={movie.Director} />
            </Box>
            <Box sx={{ mb: 3 }}>
              <MovieMetadata title="Writers" content={movie.Writer} />
            </Box>
            <Box sx={{ mb: 3 }}>
              <MovieMetadata title="Cast" content={movie.Actors} />
            </Box>
          </Grid2>

          <Grid2>
            <Box sx={{ mb: 3 }}>
              <MovieMetadata title="Released" content={movie.Released} />
            </Box>
            <Box sx={{ mb: 3 }}>
              <MovieMetadata
                title="Box Office"
                content={movie.BoxOffice || 'N/A'}
              />
            </Box>
            <Box sx={{ mb: 3 }}>
              <MovieMetadata title="Awards" content={movie.Awards} />
            </Box>
            <Box sx={{ mb: 3 }}>
              <MovieMetadata
                title="Production"
                content={movie.Production || 'N/A'}
              />
            </Box>
          </Grid2>

          <Grid2>
            <Divider />
          </Grid2>

          <Grid2>
            <Box className="movie-ratings-container">
              <Typography variant="h5" className="section-title">
                Ratings
              </Typography>
              <Grid2 container spacing={4} className="movie-ratings-Grid2">
                {movie.Ratings &&
                  movie.Ratings.map((rating, index) => (
                    <Grid2 key={index}>
                      <Paper className="rating-card">
                        <Typography variant="h6">{rating.Source}</Typography>
                        <Typography variant="h5">{rating.Value}</Typography>
                      </Paper>
                    </Grid2>
                  ))}
              </Grid2>
            </Box>
          </Grid2>
        </Grid2>
      </Paper>
    </Box>
  );
};

export default MovieDetailsPageComponent;
