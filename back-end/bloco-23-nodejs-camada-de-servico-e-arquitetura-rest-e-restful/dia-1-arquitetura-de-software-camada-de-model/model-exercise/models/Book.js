const connection = require('../db/connection');

const getAll = async () => {
  const [row] = await connection.execute('SELECT id, title, author_id FROM model_example.books');
  return console.log(row), row;
}