const markComplete = require("../database/queries").markComplete;
const pgp = require("../database/client").pgp;

module.exports = function(taskID){
  markComplete(taskID).then(data =>{
    console.log(`Complete task ${taskID}: ${data.description}`);
  });
  pgp.end();
};
