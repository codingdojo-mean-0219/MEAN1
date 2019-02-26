const express = require('express');
const parser = require('body-parser');
const path = require('path');

const port = process.env.PORT || 8000;
const app = express();


const names = ['Jason', 'Sally', 'George'];

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(parser.urlencoded({ extended: true }));

app.get('/', function (request, response) {
  const port = 234324;
  response.render('index')
});

app.post('/names', function (request, response) {
  console.log(request.body.name);
  names.push(request.body.name);
  // response.render('names', { name: request.body.name, names });
  response.redirect('/');
});

app.get('/names/:id', function (request, response) {
  console.log(request.params.id)
  response.send(names[request.params.id]);
})


app.listen(port, () => console.log(`Express server listening on port ${port}`));