// var connect = require('connect');
// var auth = require('basic-auth');
// var user = auth({name: "me", pass: "123"});

var express = require('express'),
  port = 3000;

var app = express();


// middleware is added using the use function
// app.use(function(req, res, next){
//   console.log('hi from middleware');
//   next();
// });


// app.use(function(req, res, next){
//   console.log('doing async stuff...');
//   setTimeout(function(){
//     console.log('done');
//     next();
//   }, 1000);
// });
app.set('view engine', 'ejs');

app.get('/:name', function(req, res){
  // res.send("hello, " + req.params.name);
  res.render('greeting.ejs', {name: req.params.name});
});

app.get('/', function(req, res){
  res.send('get request');
});

app.post('/', function(req, res){
  res.send('post request');
});
app.put('/', function(req, res){
  res.send('put request');
});
app.patch('/', function(req, res){
  res.send('patch request');
});
app.delete('/', function(req, res){
  res.send('delete request');
});

app.listen(port, function(){
  console.log('listening on port ' + port);
});
