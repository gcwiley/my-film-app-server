import { Film } from '../models/film.js';

// function to create a new film - CREATE FILM
export const newFilm = async (req, res) => {
  // build a new film instance
  const film = Film.build(req.body);

  try {
    await film.save();
    res.status(201).send(film);
  } catch (error) {
    res.status(400).send(error);
  }
};

// function to fetch all films - ALL FILMS
export const getFilms = async (req, res) => {
  try {
    const films = await Film.findAll();

    // if no films are found
    if (!films) {
      return res.status(404).send();
    }

    res.send(films);
  } catch (error) {
    res.status(500).send();
  }
};

// function to fetch individual film by ID
export const getFilmById = async (req, res) => {
  // convert id string into integer
  const id = parseInt(req.params.id);

  try {
    // Search for a single film by its primary key.
    const film = await Film.findByPk(id);

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
  // convert id string into integer
  const id = parseInt(req.params.id);

  try {
    const film = await Film.update(req.body, {
      where: {
        id: id,
      },
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
export const deleteFilmById = async (req, res) => {
  // convert string into integer
  const id = parseInt(req.params.id);

  try {
    // find and delete film that takes id into account
    const film = await Film.destroy({
      where: {
        id: id,
      },
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
