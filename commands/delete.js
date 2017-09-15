const {getJSON, serializeJSON} = require("../utilities.js");

module.exports = function(taskID){
  let jsonData = getJSON();
  let taskToDelete = jsonData.currentTasks.find(function(element){
    if (element.id == taskID){
      return element;
    }
  });

  if (taskToDelete === undefined){
    console.log("No task found with ID", taskID);
    return;
  }

  let modifiedArray = jsonData.currentTasks.filter(function(element){
    if (element != taskToDelete){
      return true;
    }else{
      return false;
    }
  });
  jsonData.currentTasks = modifiedArray;
  serializeJSON(jsonData);
};
