import { Film } from '../models/film.js';

// function to create a new film - CREATE FILM
export const newFilm = async (req, res) => {
  const film = new Film.find(req.body);

  try {
    await film.save();
    res.status(201).send(film);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Route handler to fetching all films - GET ALL FILMS
export const getFilms = async (req, res) => {
  try {
    const films = await Film.find({});

    if (!films) {
      return res.status(404).send();
    }

    res.send(films);
  } catch (error) {
    res.status(500).send();
  }
};

// Route handler to fetch individual film by ID
export const getFilmById = async (req, res) => {
  const _id = req.params.id;

  try {
    // filters by _id
    const film = await Film.findById({ _id });

    // if no film is found
    if (!film) {
      return res.status(404).send();
    }

    res.send(film);
  } catch (error) {
    res.status(500).send();
  }
};

// Route handler to update an existing film - UPDATE FILM
export const updateFilm = async (req, res) => {
  try {
    const _id = req.params.id;
    const film = await Film.findByIdAndUpdate(_id, req.body, {
      new: true,
      runValidators: true,
    });

    // if no film is found
    if (!film) {
      return res.status(404).send();
    }

    // send updated film back to client
    res.send(film);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Route handler to delete a film by ID - DELETE FILM
export const deleteFilm = async (req, res) => {
  try {
    // find and delete film that takes _id into account
    const film = await Film.findByIdAndDelete({
      _id: req.params.id,
    });

    // if no film is found
    if (!film) {
      res.status(404).send();
    }
    res.send(film);
  } catch (error) {
    res.status(500).send();
  }
};
