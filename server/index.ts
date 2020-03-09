import express from 'express';
import dotenv from 'dotenv';

const app = express();

dotenv.config();

const PORT = process.env.PORT || 5000;

import middlewares from './middlewares';
import routes from './routes';

middlewares(app);
routes(app);

app.listen(PORT, () => console.log(`listen on ${PORT}`));
