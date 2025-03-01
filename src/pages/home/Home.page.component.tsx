import React from 'react';

import { Search as SearchIcon } from '@mui/icons-material';
import {
  Box,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
  Typography,
} from '@mui/material';
import Grid2 from '@mui/material/Grid2';
import { Movie } from '@store/types/Movie.types';

import ErrorStateComponent from '@components/ErrorState.component';

import '@styles/customStyles.scss';

type HomePageProps = {
  error?: boolean;
  searchQuery: string;
  yearFilter: string;
  typeFilter: TypeFilter;
  movies: Movie[];
  totalResults: number;
  rowsPerPage: number;
  setRowsPerPage: (rowsPerPage: number) => void;
  page: number;
  setPage: (page: number) => void;
  onSearchByNameChange: (e: string) => void;
  onYearFilterChange: (e: string) => void;
  onTypeFilterChange: (e: TypeFilter) => void;
  onMovieClick: (imdbID: string) => void;
  onSearch: () => void;
};

const HomePageComponent = ({
  error,
  searchQuery,
  yearFilter,
  typeFilter,
  movies,
  totalResults,
  rowsPerPage,
  setRowsPerPage,
  page,
  setPage,
  onSearchByNameChange,
  onYearFilterChange,
  onTypeFilterChange,
  onMovieClick,
  onSearch,
}: HomePageProps): React.JSX.Element => {
  if (error) {
    return (
      <ErrorStateComponent
        title="Failed to Load Movies"
        message="We couldn't load the movies. Please try again later."
        isButtonVisible={false}
      />
    );
  }
  return (
    <Box sx={{ width: '95%', p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Movie Search
      </Typography>
      <Grid2 container spacing={2} sx={{ mb: 3 }}>
        <Grid2 size={4}>
          <TextField
            label="Search by name"
            value={searchQuery}
            onChange={(e) => onSearchByNameChange(e.target.value)}
            fullWidth
          />
        </Grid2>
        <Grid2 size={3}>
          <TextField
            label="Year"
            value={yearFilter}
            onChange={(e) => onYearFilterChange(e.target.value)}
            fullWidth
          />
        </Grid2>
        <Grid2 size={4}>
          <FormControl fullWidth>
            <InputLabel>Type</InputLabel>
            <Select
              value={typeFilter}
              onChange={(e) => onTypeFilterChange(e.target.value as TypeFilter)}
              label="Type"
              variant={'outlined'}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="movie">Movie</MenuItem>
              <MenuItem value="series">TV Series</MenuItem>
              <MenuItem value="episode">Episode</MenuItem>
            </Select>
          </FormControl>
        </Grid2>
        <Grid2 size={1} sx={{ display: 'flex', justifyContent: 'center' }}>
          <IconButton onClick={onSearch} color="primary">
            <SearchIcon />
          </IconButton>
        </Grid2>
      </Grid2>
      <Paper className="table-container">
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell className="fixed-width-poster">Poster</TableCell>
                <TableCell className="fixed-width-title">Title</TableCell>
                <TableCell className="fixed-width-release-date">
                  Release Date
                </TableCell>
                <TableCell className="fixed-width-imdb-id">IMDb ID</TableCell>
                <TableCell className="fixed-width-type">Type</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {movies.map((movie) => (
                <TableRow
                  key={movie.imdbID}
                  hover
                  onClick={() => onMovieClick(movie.imdbID)}
                  sx={{ cursor: 'pointer' }}
                >
                  <TableCell className="fixed-width-poster">
                    <img
                      src={
                        movie.Poster === 'N/A' || !movie.Poster
                          ? 'https://placehold.co/100x150'
                          : movie.Poster
                      }
                      alt={movie.Title}
                      className="movie-poster"
                    />
                  </TableCell>
                  <TableCell className="fixed-width-title">
                    {movie.Title}
                  </TableCell>
                  <TableCell className="fixed-width-release-date">
                    {movie.Year}
                  </TableCell>
                  <TableCell className="fixed-width-imdb-id">
                    {movie.imdbID}
                  </TableCell>
                  <TableCell className="fixed-width-type">
                    {movie.Type}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10]}
          component="div"
          count={totalResults}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={(e, newPage) => setPage(newPage)}
          onRowsPerPageChange={(e) => {
            setRowsPerPage(parseInt(e.target.value, 10));
            setPage(0);
          }}
          className="pagination"
        />
      </Paper>
    </Box>
  );
};

export default HomePageComponent;
