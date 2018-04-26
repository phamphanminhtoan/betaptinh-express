var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Bé Tập Tính' });
});

router.get('/submit',function(req, res, next){
  var number1 = req.query.x;
  var number2 = req.query.y;
  var value = 0;

    switch (req.query.pheptinh) {
    case 'add':
      value = Number(number1) + Number(number2);
      break;
    case 'sub':
      value = Number(number1) - Number(number2);
      break;
    case 'mul':
      value = Number(number1) * Number(number2);
      break;
    case 'div':
      if (Number(number2) == 0) {
          value = 'error';
      } else {
          value = Number(number1) / Number(number2);
      }
      break;
    default:
  }
  res.send(value.toString());
});

module.exports = router;
