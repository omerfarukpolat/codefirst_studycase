import React from 'react';

import { Chip, type ChipProps } from '@mui/material';

import '@styles/customStyles.scss';

interface GenreChipProps extends Omit<ChipProps, 'label'> {
  genre: string;
}

const GenreChipComponent: React.FC<GenreChipProps> = ({ genre, ...props }) => {
  return <Chip label={genre} className="movie-genre-chip" {...props} />;
};

export default GenreChipComponent;
