const {getJSON, serializeJSON} = require("../utilities.js");

module.exports = function(){
  let jsonData = getJSON();
  jsonData.totalTasks = 0;
  jsonData.currentTasks = [];
  serializeJSON(jsonData);
  console.log("All tasks and data have been reset.");
};
