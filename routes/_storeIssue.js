var express = require('express');
var router = express.Router();

function boxSchemaUpdater(priority, difficulty) {
  if (priority == "High" && difficulty == "High") {
    return 9;
  }
  if (priority == "High" && difficulty == "Medium") {
    return 8;
  }
  if (priority == "High" && difficulty == "Low") {
    return 6;
  }
  if (priority == "Medium" && difficulty == "High") {
    return 7;
  }
  if (priority == "Medium" && difficulty == "Medium") {
    return 5;
  }
  if (priority == "Medium" && difficulty == "Low") {
    return 3;
  }
  if (priority == "Low" && difficulty == "High") {
    return 4;
  }
  if (priority == "Low" && difficulty == "Medium") {
    return 2;
  }
  if (priority == "Low" && difficulty == "Low") {
    return 1;
  }
}

function userNumberUpdate(userNumber1,assignTo) {
  if (assignTo == "Somebody Perera") {
    return "user1";
  }
  if (assignTo == "Anybody Perera") {
    return "user2";
  }
  if (assignTo == "Nobody Perera") {
    return "user3";
  }
}

function userNameUpdate(userNameIs,assignTo) {
  if (assignTo == "Somebody Perera") {
    return "somebody";
  }
  if (assignTo == "Anybody Perera") {
    return "anybody";
  }
  if (assignTo == "Nobody Perera") {
    return "nobody";
  }
}

function dateUpdate(date) {
  var timeNow = new Date();
  var printTime = timeNow.getFullYear() +"-"+ timeNow.getMonth() +"-"+ timeNow.getDate() +"  "+ timeNow.getHours() + ":" +timeNow.getMinutes()
  return printTime;
}

/* GET users listing. */
router.post('/', function(req, res, next) {
  req.body['nowdate'] = dateUpdate(req.body['date']);
  req.body['userNumber'] = userNumberUpdate(req.body['userNumber1'],req.body.assignTo);
  req.body['username'] = userNameUpdate(req.body['userNameIs'],req.body.assignTo);
  req.body['box_schema'] = boxSchemaUpdater(req.body['priority'], req.body['difficulty']);


  db.collection('backlog').save(req.body, (err, result) => {
    if (err) return console.log(err)

    console.log('saved to database')
    res.redirect('/issueList')
  })
});

module.exports = router;
