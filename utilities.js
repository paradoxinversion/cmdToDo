process.env.MODE = "test";
const fs = require("fs");
const jsonDataPath = (process.env.MODE == "test") ? __dirname + "/tasks_test.json" : __dirname + "/tasks.json";

function TaskObject(id, description){
  this.isComplete = false;
  this.description = description;
  this.id = id;
}

function serializeJSON (jsonData){
  fs.writeFile(jsonDataPath, JSON.stringify(jsonData, null, "\t"), "utf8", (err) =>{
    if (err) throw err;
    console.log("Your changes have been saved. :)");
  });
}

function createNewJSON(){
  var bareJSON = {
    "totalTasks" : 0,
    "currentTasks" : []
  };
  return bareJSON;
}

function getJSON(callback){
  if (!fs.existsSync(jsonDataPath)){
    createNewJSON();
  }
  fs.readFile(jsonDataPath, "utf8", (error, fileData) => {
    //If we only have 1 arg, we're just parsing JSON
    if (arguments[1] === undefined){
      callback(JSON.parse(fileData));
    }else{
      //If we have two args, the second is an ID or String
      callback(JSON.parse(fileData), arguments[1]);
    }
  });
}

module.exports = {TaskObject, getJSON, serializeJSON, jsonDataPath, createNewJSON};
