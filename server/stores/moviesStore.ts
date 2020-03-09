import axios from 'axios';
import { auth } from '../utils/auth';

interface IMovie {
  id: string;
}

interface IMovieResponse {
  results: IMovie[];
  page: number;
}

const getMovie = async () => {
  const {
    data: { results },
  } = await axios.get<IMovieResponse>(
    `https://api.themoviedb.org/3/discover/movie?api_key=${auth.apiKey}`
  );
  return results;
};

const getMovieById = async (id: string) => {
  const { data } = await axios.get<IMovie[]>(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${auth.apiKey}`
  );
  return data;
};

export const getMovieCredit = async (id: string) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${auth.apiKey}`
  );
  return data;
};

export const getCharacter = async (id: string) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/person/${id}?api_key=${auth.apiKey}`
  );
  return data;
};

export const getMovieSearch = async (query: string) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${auth.apiKey}&query=${query}`
  );
  return data;
};

export default {
  getCharacter,
  getMovie,
  getMovieById,
  getMovieCredit,
  getMovieSearch,
};
