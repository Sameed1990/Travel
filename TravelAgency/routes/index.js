var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/about' , (req, res)=>{
  res.render('about', {title : 'Express'})
})

router.get('/service' , (req, res)=>{
  res.render('service', {title : 'Express'})
})

router.get('/packages' , (req, res)=>{
  res.render('package', {title : 'Express'})
})
router.get('/contact' , (req, res)=>{
  res.render('contact', {title : 'Express'})
})
router.get('/destination' , (req, res)=>{
  res.render('destination', {title : 'Express'})
})
router.get('/guide' , (req, res)=>{
  res.render('guide', {title : 'Express'})
})
router.get('/testimonial' , (req, res)=>{
  res.render('testimonial', {title : 'Express'})
})




module.exports = router;
