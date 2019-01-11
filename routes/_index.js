var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  db.collection('backlog').find().sort({
    _id: -1
  }).toArray(function(err, results) {
    console.log(results);
    // send HTML file populated with quotes here
    res.render('index', {
      notification: results
    });
  });
});
module.exports = router;
