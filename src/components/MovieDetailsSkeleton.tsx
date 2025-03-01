import React from 'react';

import { Box, Grid2, Paper, Skeleton } from '@mui/material';

const MovieDetailsSkeleton: React.FC = () => {
  return (
    <Box className="movie-details-container">
      <div className="movie-details-hero skeleton-hero">
        <div className="movie-details-overlay" />
        <Grid2 container className="movie-details-content">
          <Grid2 className="movie-details-poster-container">
            <Skeleton
              variant="rectangular"
              className="movie-details-poster skeleton-poster"
            />
          </Grid2>
          <Grid2 className="movie-details-info">
            <Skeleton variant="text" height={60} width="80%" />
            <Box className="movie-details-subtitle">
              <Skeleton variant="text" width={100} />
              <Skeleton variant="text" width={100} />
              <Skeleton variant="text" width={100} />
            </Box>
            <Box className="movie-details-genres">
              <Skeleton
                variant="rectangular"
                width={80}
                height={32}
                sx={{ borderRadius: 16, mr: 1 }}
              />
              <Skeleton
                variant="rectangular"
                width={80}
                height={32}
                sx={{ borderRadius: 16, mr: 1 }}
              />
              <Skeleton
                variant="rectangular"
                width={80}
                height={32}
                sx={{ borderRadius: 16 }}
              />
            </Box>
            <Box className="movie-details-rating">
              <Skeleton variant="text" width={150} />
            </Box>
          </Grid2>
        </Grid2>
      </div>

      <Paper className="movie-details-paper">
        <Grid2 container spacing={4}>
          <Grid2>
            <Skeleton variant="text" height={40} width={150} />
            <Skeleton variant="text" height={100} />
          </Grid2>

          <Grid2>
            <Skeleton variant="text" />
          </Grid2>

          <Grid2>
            {[1, 2, 3].map((item) => (
              <Box key={item} sx={{ mb: 2 }}>
                <Skeleton variant="text" width={100} />
                <Skeleton variant="text" />
              </Box>
            ))}
          </Grid2>

          <Grid2>
            {[1, 2, 3, 4].map((item) => (
              <Box key={item} sx={{ mb: 2 }}>
                <Skeleton variant="text" width={100} />
                <Skeleton variant="text" />
              </Box>
            ))}
          </Grid2>
        </Grid2>
      </Paper>
    </Box>
  );
};

export default MovieDetailsSkeleton;
