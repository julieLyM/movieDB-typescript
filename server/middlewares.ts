import express from 'express';

function middlewares(app: express.Application) {
  app.use(express.json());
}

export default middlewares;
