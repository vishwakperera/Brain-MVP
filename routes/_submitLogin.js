var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
  console.log(req.body.username);
  db.collection('user').findOne({
    username: req.body.username
  }, function(err, result) {
    console.log(result)
    if (err) throw err;

    if (result) {
      console.log(result.username);
      // send HTML file populated with quotes here
      req.session.user = result;
      res.locals.user = req.session.user;
    }
    res.redirect("/");
  });
});

module.exports = router;
