var Animal = require('./animal');

var Animals = function(){
}

Animals.prototype = {
  makeRequest: function(url, callback){
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = callback;
    request.send();
  }, 
  all: function(callback){  
    var that = this;
    this.makeRequest('http://localhost:3000/api/animals', function(){
      // left off here.
    });

  }
}