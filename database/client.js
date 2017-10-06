process.env.MODE = "test";
//Load and initialize pg-promise
const pgp = require('pg-promise')();
const dbIdentifier = (process.env.MODE == "test") ? "tododb_test" : "tododb";

const connection = 'postgress://localhost:5432/'+dbIdentifier;
//create the db object/connection
const db = pgp(connection);

module.exports = {
  pgp,
  db
};
