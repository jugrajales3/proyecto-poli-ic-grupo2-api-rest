const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors())

const books = [
    { 
      id: 1,
      title: 'Pro Git: Everything You Need to Know About Git',
      author: 'Scott Chacon, Ben Straub'
    },
    {
      id: 2,
      title: 'Continuous Delivery with Docker and Jenkins: Delivering software at scale',
      author: 'Rafal Leszko'
    },
    { 
      id: 3,
      title: 'Hands-on continuous integration and delivery build and release quality software at scale with Jenkins, Travis CI, and CircleCI',
      author: 'Belmont, Jean-Marcel'
    }
  ];


app.get('/api/books', (req, res) => {
    res.send(books);
});


app.get('/api/books/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    const book = books.find(book => book.id === bookId);
  
    if (book) {
      res.send(book);
    } else {
      res.status(404).send('Libro no encontrado');
    }
});


const port = 8080;

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
