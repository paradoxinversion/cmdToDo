const {getJSON, serializeJSON} = require("../utilities.js");

module.exports = function(taskID){
  let jsonData = getJSON();
  if (taskID > -1 && taskID < jsonData.currentTasks.length){
    jsonData.currentTasks[taskID].isComplete = true;
  }
  serializeJSON(jsonData);
  console.log("marked complete");

};
