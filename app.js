// import modules
const path = require('path');
const express = require('express');

// create express app
const app = express();
app.set('view engine', 'ejs');
// automatically check if requested file is found in /public
// if yes, return that file as a response to the browser
app.use(express.static(path.join(__dirname, 'public')));
// app.get('/', function(request, response){
//   response.render('index',{});
// })

app.get('/', function(request, response){
  response.render('index',{});
})

app.get('/gallery', function(request, response){
  response.render('gallery',{});
})

app.get('/Login', function(request, response){
  response.render('login',{});
})

app.get('/register', function(request, response){
  response.render('register',{});
})


// if no, send a 404 error as a response to the browser
app.use(function(req, res, next) {
  res.status(404);
  res.send('404: File Not Found');
});

// start up server
const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`);
});