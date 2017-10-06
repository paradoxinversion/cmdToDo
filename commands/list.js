const pgp = require("../database/client").pgp;
const getAllTasks = require("../database/queries.js").getAllTasks;
module.exports = function(){
  let header = "ID Description\n" +
               "-- -----------";
  console.log(header);
  printListItems();
};

function printListItems()
{
  return getAllTasks().then(data =>{
    if (data.length > 0){
      data.forEach((element) =>{
        console.log(element.id + " " + element.description);
      });
    }
    console.log(`You have ${data.length} tasks.`);
    pgp.end();
  });
}
