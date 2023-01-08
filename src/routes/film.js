import express from 'express';

// Define a new router
const router = new express.Router();

import {
  newFilm,
  getFilms,
  getFilmById,
  updateFilm,
  deleteFilm,
} from '../controllers/film.js';

// Route handler to create a new film - NEW FILM
router.post('/api/films', newFilm);

// Route handler for fetching all film - GET ALL FILMS
router.get('/api/films', getFilms);

// Route handler to fetch individual film by Id
router.get('/api/films/:id', getFilmById);

// Route handler to update an existing film - UPDATE FILM
router.patch('/api/films/:id', updateFilm);

// Route handler to delete a film by ID - DELETE FILM
router.delete('/api/films/:id', deleteFilm);

// export the router to be used
export { router };
