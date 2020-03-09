import express from 'express';
const app = express();

const PORT = process.env.PORT || 5000;

import middlewares from './middlewares';
import routes from './routes';

middlewares(app);
routes(app);

app.listen(PORT, () => console.log(`listen on ${PORT}`));
