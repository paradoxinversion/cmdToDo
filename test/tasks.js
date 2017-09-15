const fs = require("fs");
const expect = require("chai").expect;
const tasksjs = require("../tasks.js");
describe("tasks.js::createNewJSON", function(){
  before(function(){
    if (fs.existsSync("../tasks.json")){
      fs.unlink("../tasks.json");
    }
  });

  it ("Should create a new JSON file", function(){
    tasksjs.createNewJSON();


  });
});
