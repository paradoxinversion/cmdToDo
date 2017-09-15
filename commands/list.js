const {getJSON} = require("../utilities.js");

module.exports = function(){
  let header = "ID Description\n" +
               "-- -----------";
  console.log(header);
  let jsonData = getJSON();
  jsonData.currentTasks.forEach(function(element){
    console.log(element.id + " " + element.description);
  });
};
