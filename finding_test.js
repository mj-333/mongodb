const mocha = require('mocha');
const assert = require('assert');
const MarioChar = require("../models/mariochar");

describe('Finding records',function () {
  beforeEach(function (done) {
    var  char=new MarioChar({
      name:'mohan'
    });
    char.save().then(
      function () {
        assert(char.isNew === false);
        done();
      }
    );
  });
  it('find one record to the database',function (done) {

    MarioChar.findOne({name:'mohan'}).then(function (result) {
      assert(result.name==='mohan');
      done();
    });

  });
});
