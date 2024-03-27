var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var places = [
    {name: 'home', rating: 10},
    {name: 'grandmas house', rating: 9},
    {name: 'san fransico', rating: 5},
    {name: 'san antonio', rating: 6},
    {name: 'virginia beach', rating: 9}
  ];
  res.render('index', { 
  title: 'favorite places',
  places: places,
  myname: myname

});
});

module.exports = router;
