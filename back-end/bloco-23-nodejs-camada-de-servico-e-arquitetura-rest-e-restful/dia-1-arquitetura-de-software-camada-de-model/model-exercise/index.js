const express = require('express');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT;
const Books = require('./models/Book');

app.use(express.json());

app.get('/books', async (_req, res) => {
  const books = await Books.getAll();
  res.status(200).json(books);
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

