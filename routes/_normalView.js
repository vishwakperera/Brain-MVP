var express = require('express');
var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.render('normalView');
// });
// module.exports = router;


/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req.session.user);
  db.collection('backlog').find({
    username: req.session.user.username
  }).toArray(function(err, results) {
    console.log(results);
    if (err) {
      throw err;
    }
    res.render('normalView', {
      personalTasks: results
    });
  });

});
module.exports = router;