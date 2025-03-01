import React, { useEffect, useRef } from 'react';

import { searchMovies } from '@services/omdbService';
import {
  setMovies,
  setSearchQuery,
  setSelectedMovie,
  setTypeFilter,
  setYearFilter,
} from '@store/slices/moviesSlice';
import { RootState } from '@store/store';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import HomePageComponent from './Home.page.component';

export const HomePageContainer = (): React.JSX.Element => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { searchQuery, yearFilter, typeFilter, movies, totalResults } =
    useSelector((state: RootState) => state.movies);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [error, setError] = React.useState(false);

  const isFetching = useRef(false);

  useEffect(() => {
    if (!isFetching.current) {
      isFetching.current = true;
      fetchMovies().finally(() => {
        isFetching.current = false;
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const fetchMovies = async (): Promise<void> => {
    try {
      const results = await searchMovies(
        searchQuery,
        yearFilter,
        typeFilter || undefined,
        page + 1
      );
      dispatch(
        setMovies({
          movies: results.Search,
          totalResults: parseInt(results.totalResults, 10),
        })
      );
    } catch {
      setError(true);
    }
  };

  const handleSearch = (): void => {
    setPage(0);
    fetchMovies();
  };

  const handleMovieClick = (imdbID: string): void => {
    const selected = movies.find((movie) => movie.imdbID === imdbID);
    if (selected) {
      dispatch(setSelectedMovie(selected));
      navigate(`/movie/${imdbID}`);
    }
  };

  const handleSearchByNameChange = (searchQuery: string): void => {
    dispatch(setSearchQuery(searchQuery));
  };

  const handleYearFilterChange = (yearFilter: string): void => {
    dispatch(setYearFilter(yearFilter));
  };

  const handleTypeFilterChange = (typeFilter: TypeFilter): void => {
    dispatch(setTypeFilter(typeFilter));
  };

  return (
    <HomePageComponent
      error={error}
      searchQuery={searchQuery}
      yearFilter={yearFilter}
      typeFilter={typeFilter}
      movies={movies}
      totalResults={totalResults}
      rowsPerPage={rowsPerPage}
      setRowsPerPage={setRowsPerPage}
      page={page}
      setPage={setPage}
      onSearchByNameChange={handleSearchByNameChange}
      onYearFilterChange={handleYearFilterChange}
      onTypeFilterChange={handleTypeFilterChange}
      onSearch={handleSearch}
      onMovieClick={handleMovieClick}
    />
  );
};
