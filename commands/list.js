const {getJSON} = require("../utilities.js");

module.exports = function(){
  let header = "ID Description\n" +
               "-- -----------";
  console.log(header);
  getJSON(printListItems);
};

function printListItems(jsonData)
{
  if (jsonData.currentTasks.length == 0){
    console.log("You have no tasks.");
    return 1;
  }else{
    jsonData.currentTasks.forEach(function(element){
      console.log(element.id + " " + element.description);
    });
    console.log(`You have ${jsonData.currentTasks.length} tasks.`);
    return 1;
  }
}
