var MongoClient = require('mongodb').MongoClient;

var FarmQuery = function(){
  this.url = 'mongodb://localhost:27017/farm';
};

FarmQuery.prototype = {
  all: function(onQueryFinished){
    MongoClient.connect(this.url, function(err, db){  
      var collection = db.collection('animals');
      collection.find().toArray(function(err, docs){
        onQueryFinished(docs);
      });
    });
  }, 
  add: function(animalToAdd, onQueryFinished){
    MongoClient.connect(this.url, function(err, db){
      if(db){
        var collection = db.collection('animals');
        collection.insert(animalToAdd);
        collection.find().toArray(function(err, docs){
          onQueryFinished(docs);
        });
      }
    });
  }
};

module.exports = FarmQuery;