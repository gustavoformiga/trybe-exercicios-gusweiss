const express = require('express');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT;
const Books = require('./models/Book');

app.use(express.json());

// getting res by author_id
app.get('/books', async (req, res) => {
  try {
    const { author_id } = req.query;
    const booksById = (author_id) ? await Books.getByAuthorId(author_id) : await Books.getAll();
    return res.status(200).json(booksById);
  } catch (error) {
    return res.status(500).json({message: error.message});
  }
})

// getting all books
app.get('/books', async (_req, res) => {
  const books = await Books.getAll();
  res.status(200).json(books);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

