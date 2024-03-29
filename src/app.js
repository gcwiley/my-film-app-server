import path from 'path';
import { fileURLToPath } from 'url';
import process from 'process';
import express from 'express';
import logger from 'morgan';
import { applicationDefault, initializeApp } from 'firebase-admin/app';

// get the current file name
const __filename = fileURLToPath(import.meta.url);

// get the directory name of the current file
const __dirname = path.dirname(__filename);

// Initialized the Firebase SDK
initializeApp({
  credential: applicationDefault(),
});

// import the database connection
// this will connect to the database
import './db/db.js';

// Import the Routes
import { filmRouter } from './routes/film.js';
// insert comment router here - TODO

// create express app by executing express package
const app = express();

// get the port from the environment variable or use 8080
const PORT = process.env.PORT || 8080;

// allows static access to the angular client side folder
app.use(express.static(path.join(__dirname, '/dist/my-film-app-client')));

// automatically parse incoming JSON to an object so we can access it in our request handlers
app.use(express.json());
// automatically parse incoming urlencoded payloads to an object so we can access it in our request handlers
app.use(express.urlencoded({ extended: true }));

// creates a logger middleware
app.use(logger('dev'));

// register the routers
app.use(filmRouter);

// handle all other routes with angular app - returns angular app
app.use('*', (req, res) => {
  // send back the angular index.html file
  res.sendFile(path.join(__dirname, './dist/my-film-app-client', 'index.html'));
});

// start the server on the specified port
app.listen(PORT, () => {
  console.log(`Successfully started server running on port ${PORT}`);
});
