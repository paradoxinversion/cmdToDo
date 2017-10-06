const insertTask = require("../database/queries").insertTask;
const pgp = require("../database/client").pgp;
module.exports = function(taskDescription){
  insertTask(taskDescription).then(data =>{
    console.log(`Added Task ${data.id}: ${data.description}` );
  });
  pgp.end();
};
