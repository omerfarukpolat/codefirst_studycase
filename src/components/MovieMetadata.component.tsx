import React from 'react';

import { Box, Typography } from '@mui/material';

interface MovieMetadataProps {
  title: string;
  content: string;
}

const MovieMetadataComponent: React.FC<MovieMetadataProps> = ({
  title,
  content,
}) => {
  return (
    <Box className="movie-metadata">
      <Typography variant="subtitle1" className="metadata-title" gutterBottom>
        {title}
      </Typography>
      <Typography
        variant="body1"
        className="metadata-content"
        sx={{
          overflowWrap: 'break-word',
          wordWrap: 'break-word',
          marginTop: '0.5rem',
        }}
      >
        {content}
      </Typography>
    </Box>
  );
};

export default MovieMetadataComponent;
