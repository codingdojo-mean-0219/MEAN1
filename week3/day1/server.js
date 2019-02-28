const express = require('express');
const parser = require('body-parser');
const path = require('path');

const port = process.env.PORT || 8000;
const app = express();
const logger = require('./server/middleware/logger');

console.log(logger);

const names = ['Jason', 'Sally', 'George'];

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(parser.urlencoded({ extended: true }));
// app.use(function (request, response, next) {
//   console.log(next);
//   // get user 
//   // attach user t o request
//   next(new Error('access denied'));
// });




app.get('/', function (request, response) {
  const port = 234324;
  response.render('index');
});

app.post('/names', [logger], function (request, response) {
  console.log(request.body.name);
  names.push(request.body.name);
  response.render('names', { name: request.body.name, names });
  // response.redirect('/');
});

app.get('/names/:id', function (request, response) {
  console.log(request.params.id)
  response.send(names[request.params.id]);
})

app.use(function (error, request, response, next) {
  console.log('error ', error.message);

  next(error);
});

app.use(function (error, request, response, next) {
  response.send(error.message);
});



app.listen(port, () => console.log(`Express server listening on port ${port}`));