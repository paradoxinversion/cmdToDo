const {db} = require('./client');

const getAllTasks = function(){
  return db.any('SELECT * FROM tasks');
};

const insertTask = function(description){
  return db.one('INSERT INTO tasks (description) VALUES ($1) RETURNING *', [description]);
};

const removeTask = function(id){
  return db.one('DELETE FROM tasks WHERE id=$1 RETURNING *', [id]);
};

const markComplete = function(id){
  return db.one('UPDATE tasks SET is_complete = TRUE WHERE id=$1 RETURNING *', [id]);
};

const resetTasksDB = function(){
  return db.query('ALTER SEQUENCE tasks_id_seq RESTART WITH 1; truncate tasks');
};
module.exports = {
  getAllTasks,
  insertTask,
  removeTask,
  markComplete,
  resetTasksDB
};
