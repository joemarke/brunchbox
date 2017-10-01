var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'BrunchBox' });
});

router.get('/music', function(req, res, next) {
    res.render('music', { title: 'BrunchBox' });
});

router.get('/photos', function(req, res, next) {
  res.render('photos', { title: 'BrunchBox' });
});

router.get('/videos', function(req, res, next) {
    res.render('videos', { title: 'BrunchBox' });
});

router.get('/store', function(req, res, next) {
    res.render('store', { title: 'BrunchBox' });
});

module.exports = router;
