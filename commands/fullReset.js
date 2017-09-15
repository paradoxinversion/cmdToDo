const {getJSON, serializeJSON} = require("../utilities.js");

function fullReset(jsonData){
  jsonData.totalTasks = 0;
  jsonData.currentTasks = [];
  serializeJSON(jsonData);
  console.log("All tasks and data have been reset.");
}

module.exports = function(){
  getJSON(fullReset);

};
