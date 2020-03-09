const router = require('express').Router();
import moviesController from '../controllers/moviesCtrl';

router.get('/:query', moviesController.searchMovie);

export default router;
