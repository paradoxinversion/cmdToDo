const {getJSON} = require("../utilities.js");

module.exports = function(){
  let header = "ID Description\n" +
               "-- -----------";
  console.log(header);
  let jsonData = getJSON();
  if (jsonData.currentTasks.length == 0){
    console.log("You have no tasks.");
    return 1;
  }else{
    jsonData.currentTasks.forEach(function(element){
      console.log(element.id + " " + element.description);
    });
    return 1;
  }
  return 0;
};
