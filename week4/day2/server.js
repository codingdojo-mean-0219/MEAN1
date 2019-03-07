const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const express = require('express');
const path = require('path');


const { PORT: port = 8000 } = process.env;
const { Schema } = mongoose;
const app = express();


app.set('view engine', 'ejs');
app.set('views', path.resolve('views'));
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect('mongodb://localhost/authors_books', { useNewUrlParser: true });
mongoose.connection.on('connected', () => console.log('Connected to MOngodb'));

const AuthorSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Author name is required'],
    trim: true,
  },
  age: Number,
  isAlive: {
    type: Boolean,
    default: true,
  },
  books: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Book'
    }
  ]
});

const BookSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Book title is needed'],
    trim: true,
  },
  year: Number,
  pages: {
    type: Number,
    required: [true, 'Supply the page count'],
    min: [1, 'Must have more pages!'],
  },
  publisher: String,
  author: {
    type: Schema.Types.ObjectId,
    ref: 'Author',
    required: true
  }
});

const Author = mongoose.model('Author', AuthorSchema);
const Book = mongoose.model('Book', BookSchema);



app.get('/', function (_request, response) {
  response.render('index');
});


app.get('/authors', function (_request, response) {
  Author.find({})
    .populate('books')
    .then(authors => response.render('authors/index', { authors }))
    .catch(console.log);
});

app.get('/authors/new', function (_request, response) {
  response.render('authors/new');
});

app.post('/authors', function (request, response) {
  console.log('body', request.body);
  Author.create(request.body)
    .then(author => {
      console.log(author);
      response.redirect('/authors');
    })
    .catch(console.log);
});

app.get('/authors/:author_id', function (request, response) {
  const { author_id: authorId } = request.params;
  Author.findById(authorId)
    .then(author => response.send(author))
});


app.get('/books', function (_request, response) {
  Book.find({})
    .populate('author')
    .then(books => response.render('books/index', { books }))
});

app.get('/books/new', function (_request, response) {
  Author.find({})
    .then(authors => response.render('books/new', { authors }))
});

app.post('/books', function (request, response) {
  Book.create(request.body)
    .then(book => {
      console.log(book);

      return Author.findById(book.author)
        .then(author => {
          author.books.push(book._id);

          return author.save();
        })
        .then(() => {
          response.redirect('/books');
      })
    }) 
})

app.listen(port, () => console.log(`Express server listening on port ${port}`));

