const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors())

const books = [
    { id: 1, title: 'Libro 1', author: 'Autor 1' },
    { id: 2, title: 'Libro 2', author: 'Autor 2' },
    { id: 3, title: 'Libro 3', author: 'Autor 3' }
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
