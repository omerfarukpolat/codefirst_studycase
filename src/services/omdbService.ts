import { Movie, MovieDetails } from '@store/types/Movie.types';
import axios from 'axios';

const API_KEY = 'e8755aa5';
const BASE_URL = 'http://www.omdbapi.com/';

export const searchMovies = async (
  query: string,
  year?: string,
  type?: 'movie' | 'series' | 'episode',
  page = 1
): Promise<{ Search: Movie[]; totalResults: string }> => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        apikey: API_KEY,
        s: query,
        y: year,
        type: type,
        page: page,
      },
    });

    if (response.data.Response === 'True') {
      return {
        Search: response.data.Search,
        totalResults: response.data.totalResults,
      };
    } else {
      throw new Error(response.data.Error || 'No movies found');
    }
  } catch {
    throw new Error('Failed to fetch movies');
  }
};

export const getMovieDetails = async (
  imdbID: string
): Promise<MovieDetails> => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        apikey: API_KEY,
        i: imdbID,
      },
    });

    if (response.data.Response === 'True') {
      return response.data;
    } else {
      throw new Error(response.data.Error || 'Movie details not found');
    }
  } catch {
    throw new Error('Failed to fetch movie details');
  }
};
