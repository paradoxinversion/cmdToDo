const pgp = require("../database/client").pgp;
const resetTasksDB = require("../database/queries").resetTasksDB;

module.exports = function(){
  resetTasksDB().then(()=>{
    console.log("All tasks and data have been reset");
  });
  pgp.end();
};
