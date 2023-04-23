import { DataTypes } from 'sequelize';

// import the sequelize instance
import { sequelize } from '../db/db.js';

// create the film model
const Film = sequelize.define('Film', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  director: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  releaseDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  genre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  summary: {
    type: DataTypes.STRING,
  },
});

// export the film model
export { Film };
