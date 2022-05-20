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

const getByAuthorId = async (authorID) => {
  const query = 'SELECT id, title, author_id FROM model_example.books WHERE author_id = ?';
  const [booksData] = await connection.execute(query, [authorID]);
  if (booksData.length === 0) {
    return null;
  }
  return booksData.map(serializeWithCamel);
}

module.exports = {
  getAll,
  getByAuthorId,
}