const router = require('express').Router();
import moviesController from '../controllers/moviesCtrl';

router.get('/:id', moviesController.characters);

export default router;
