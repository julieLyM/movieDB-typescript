import express from 'express';

function middlewares(app: express.Application) {
  app.use('/', express.static(__dirname + '/../../client/build/'));
  app.use(express.json());
}

export default middlewares;
