import connection  from './models/connection';
import BookModel from "./models/Books";

const main = async () => {
  const result = await connection.execute('SELECT * FROM books');
  const [rows] = result;

  const bookModel = new BookModel(connection);
  const books = await bookModel.getAll();

  console.log(rows);
  console.log(books)
}

main();