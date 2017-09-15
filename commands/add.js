
const {getJSON, TaskObject, serializeJSON} = require("../utilities.js");
module.exports = function(taskDescription){
  let jsonData = getJSON();

  let newTask = new TaskObject(jsonData.totalTasks, taskDescription);

  jsonData.currentTasks.push(newTask);
  jsonData.totalTasks++;

  serializeJSON(jsonData);
};
