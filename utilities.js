process.env.MODE = "test";
console.log(__dirname);
const fs = require("fs");
const jsonDataPath = (process.env.MODE == "test") ? __dirname + "/tasks_test.json" : __dirname + "/tasks.json";
function TaskObject(id, description){
  this.isComplete = false;
  this.description = description;
  this.id = id;
}
function serializeJSON (jsonData){
  fs.writeFileSync(jsonDataPath, JSON.stringify(jsonData, null, "\t"), "utf8");
}
function createNewJSON(){
  var bareJSON = {
    "totalTasks" : 0,
    "currentTasks" : []
  };
  //fs.writeFileSync(jsonDataPath, JSON.stringify(bareJSON, null, "\t"), "utf8" );
  serializeJSON(bareJSON);
}

function getJSON(){
  let jsonData;
  if (!fs.existsSync(jsonDataPath)){
    createNewJSON();
  }
  jsonData = JSON.parse(fs.readFileSync(jsonDataPath, "utf8"));
  return jsonData;
}

module.exports = {TaskObject, getJSON, serializeJSON, jsonDataPath, createNewJSON};
