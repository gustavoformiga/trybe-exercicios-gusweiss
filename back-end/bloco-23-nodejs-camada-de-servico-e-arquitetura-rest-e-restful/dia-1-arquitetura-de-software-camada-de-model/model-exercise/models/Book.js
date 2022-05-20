const connection = require('../db/connection');

const serializeWithCamel = (booksData) => ({
  id: booksData.id,
  title: booksData.title,
  authorId: booksData.author_id,
});

const getAll = async () => {
  const [row] = await connection.execute('SELECT id, title, author_id FROM model_example.books');
  return row.map(serializeWithCamel);
};

module.exports = {
  getAll,
}