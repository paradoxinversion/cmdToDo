const {getJSON, serializeJSON} = require("../utilities.js");

module.exports = function(taskID){
  getJSON(complete, taskID);
};

function complete(jsonData, taskID){
  if (taskID > -1 && taskID < jsonData.currentTasks.length){
    jsonData.currentTasks[taskID].isComplete = true;
  }
  console.log(`Complete task ${taskID}: ${jsonData.currentTasks[taskID].description()}`);
  serializeJSON(jsonData);

}
