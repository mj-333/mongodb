const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

before(function (done) {
  mongoose.connect('mongodb://localhost/testaroo');

  mongoose.connection.once('open',function()
  {
    console.log("connection has been established");
    done();
  }).on('error',function(error)
  {
  console.log('connection error:',error);
  });
});
beforeEach(function(done){
  mongoose.connection.collections.mariochars.drop(function(){
    done();
    });
});
