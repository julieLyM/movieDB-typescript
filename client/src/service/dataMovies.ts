import axios from 'axios';

export const getMovies = async () => {
  const { data } = await axios.get(`/api/v1/movies`);
  return data;
};

export const getMovieById = async (id: string) => {
  const { data } = await axios.get(`/api/v1/movies/${id}`);
  return data;
};

export const getMovieCredit = async (id: string) => {
  const { data } = await axios.get(`/api/v1/movies/${id}/credits`);
  return data;
};

export const getCharacter = async (characterId: string) => {
  const { data } = await axios.get(`/api/v1/characters/${characterId}`);
  return data;
};

export const searchMovie = async (query: string) => {
  const { data } = await axios.get(`/api/v1/search/${query}`);
  return data;
};
