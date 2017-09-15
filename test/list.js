const expect = require("chai").expect;
const list = require("../commands/list.js");
describe("list.js", function(){
  it ("Should return a number 0-2, inclusive", function(){
    expect(list()).to.be.within(0, 2);
    
  });
});
