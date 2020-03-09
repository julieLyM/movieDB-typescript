import express from 'express';
import moviesRouter from './routes/moviesRoute';
import charactersRouter from './routes/charactersRoute';
import searchMovieRouter from './routes/searchMovieRoute';

function routes(app: express.Application) {
  app.use('/api/v1/movies', moviesRouter);
  app.use('/api/v1/characters', charactersRouter);
  app.use('/api/v1/search', searchMovieRouter);
}

export default routes;
