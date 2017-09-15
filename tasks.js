#! /usr/local/bin/node
const add = require("./commands/add.js");
const complete = require("./commands/complete.js");
const deleteTask = require("./commands/delete.js");
const list = require("./commands/list");
const reset = require("./commands/fullreset");
// const add = require("./commands/add.js");
let command = process.argv[2];
let argument = process.argv[3];
switch (command){
case "add":
  add(argument);
  break;
case "complete":
  complete(argument);
  break;
case "delete":
  deleteTask(argument);
  break;
case "list":
  list(argument);
  break;
case "reset":
  console.log(process.argv);
  if (process.argv[3] == "reset"){
    reset();
  }else{
    console.log("You must type reset twice (with a space) to reset data.");
  }
  break;
default:
  console.log("You need to input a command: [add, complete, delete, list]");
}
