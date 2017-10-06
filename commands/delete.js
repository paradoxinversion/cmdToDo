const removeTask = require("../database/queries").removeTask;
const pgp = require("../database/client").pgp;

module.exports = function(taskID){
  removeTask(taskID).then(data => {
    console.log(`Deleted task ${data.id}: ${data.description}`);
  });
  pgp.end();
};
