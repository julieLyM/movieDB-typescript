import express from 'express';
import moviesStore from '../stores/moviesStore';

const listMovies = async (req: express.Request, res: express.Response) => {
  try {
    const movies = await moviesStore.getMovie();
    res.json(movies);
  } catch (e) {
    console.error(e);
  }
};

const movieById = async (req: express.Request, res: express.Response) => {
  const {
    params: { id },
  } = req;
  try {
    const movies = await moviesStore.getMovieById(id);
    res.json(movies);
  } catch (e) {
    console.error(e);
  }
};

const listCredits = async (req: express.Request, res: express.Response) => {
  const {
    params: { id },
  } = req;
  try {
    const credits = await moviesStore.getMovieCredit(id);
    res.json(credits);
  } catch (e) {
    console.error(e);
  }
};

const characters = async (req: express.Request, res: express.Response) => {
  const {
    params: { id },
  } = req;
  try {
    const character = await moviesStore.getCharacter(id);
    res.json(character);
  } catch (e) {
    console.error(e);
  }
};

const searchMovie = async (req: express.Request, res: express.Response) => {
  const {
    params: { query },
  } = req;
  try {
    const search = await moviesStore.getMovieSearch(query);
    res.json(search);
  } catch (e) {
    console.error(e);
  }
};

export default { listMovies, movieById, listCredits, characters, searchMovie };
