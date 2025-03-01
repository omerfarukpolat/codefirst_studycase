import React from 'react';

import { Chip, type ChipProps } from '@mui/material';

interface GenreChipProps extends Omit<ChipProps, 'label'> {
  genre: string;
}

const GenreChipComponent: React.FC<GenreChipProps> = ({ genre, ...props }) => {
  return (
    <Chip
      label={genre}
      className="movie-genre-chip"
      sx={{
        fontWeight: 600,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        color: 'rgba(0, 0, 0, 0.87)',
        '&:hover': {
          backgroundColor: 'rgba(255, 255, 255, 1)',
        },
      }}
      {...props}
    />
  );
};

export default GenreChipComponent;
