const fs = require("fs");

function TaskObject(id, description){
  this.isComplete = false;
  this.description = description;
  this.id = id;
}
function createNewJSON(){
  var bareJSON = {
    "totalTasks" : 0,
    "currentTasks" : []
  };
  fs.writeFileSync("tasks.json", JSON.stringify(bareJSON, null, "\t"), "utf8" );
}

function getJSON(){
  let jsonData;
  if (!fs.existsSync("tasks.json")){
    createNewJSON();
  }
  jsonData = JSON.parse(fs.readFileSync("tasks.json", "utf8"));
  return jsonData;
}

function serializeJSON (jsonData){
  fs.writeFileSync("tasks.json", JSON.stringify(jsonData, null, "\t"), "utf8");
}

module.exports = {TaskObject, getJSON, serializeJSON};
