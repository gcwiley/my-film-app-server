import path from 'path';
import { fileURLToPath } from 'url';
import process from 'process';
import express from 'express';
import logger from 'morgan';
import { applicationDefault, initializeApp } from 'firebase-admin';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

// Initialized the Firebase SDK
initializeApp({
  credential: applicationDefault(),
});

// import database connection
import './db/db/js';

// Import the Routes
import { filmRouter } from './routes/film.js';
import { commentRouter } from './routes/comment.js';

// create express app by executing express package
const app = express();

// define the port
const PORT = process.env.PORT || 3000;

// allows static access to the angular folder
app.use(express.static(path.join(__dirname, './dist/my-film-app-client')));

// automatically parse incoming JSON to an object so we can access it in our request handlers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// creates a logger middleware
app.use(logger('dev'));

// register the routers
app.use(filmRouter);
app.use(commentRouter);

// handle all other routes with angular app - returns angular app
app.use('*', (req, res) => {
  // send back the angular index.html file
  res.sendFile(path.join(__dirname, './dist/my-film-app-client', 'index.html'));
});

// start the server
app.listen(PORT, () => {
  console.log('Started server');
});
