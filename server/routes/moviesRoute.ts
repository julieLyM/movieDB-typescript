const router = require('express').Router();
import moviesController from '../controllers/moviesCtrl';

router.get('/', moviesController.listMovies);
router.get('/:id', moviesController.movieById);
router.get('/:id/credits', moviesController.listCredits);

export default router;
