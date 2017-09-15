
const {getJSON, TaskObject, serializeJSON} = require("../utilities.js");


module.exports = function(taskDescription){
  getJSON(createTaskObject, taskDescription);
};

function createTaskObject(jsonData, taskDescription){
  let newTask = new TaskObject(jsonData.totalTasks, taskDescription);
  jsonData.currentTasks.push(newTask);
  jsonData.totalTasks++;
  console.log("Create dTask" + newTask.id);
  serializeJSON(jsonData);
}
