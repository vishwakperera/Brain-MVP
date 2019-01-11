var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.createCollection("customers", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});

MongoClient.connect('mongodb://brain-web:123@ds229380.mlab.com:29380/brain-alpha', (err, client) => {
  if (err) return console.log(err)
  db = client.db('brain-db')
  // ... start the server
  server.listen(port);
  server.on('error', onError);
  server.on('listening', onListening);

});