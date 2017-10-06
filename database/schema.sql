DROP TABLE IF EXISTS tasks;

CREATE TABLE tasks(
  id SERIAL PRIMARY KEY,
  description text NOT NULL,
  is_complete boolean NOT NULL DEFAULT FALSE
);
