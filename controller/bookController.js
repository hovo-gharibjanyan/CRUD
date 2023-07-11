import { v1 } from "uuid";
import { users } from "../manager/manager.js";
export class BookController {
  createBook (req, res) {
    const user = users.find((el) => el.id === req.params.userId);
    const { bookName } = req.body;
    const id = v1();
    let book = { id, bookName };
    user.books.push(book);
    res.send(book);
  }

  getBooks (req, res) {
    const user = users.find((el) => el.id === req.params.userId);
    res.send(user.books);
  };

  getBookById (req, res) { 
    const id = req.params.userId;
    const user = users.find((user) => user.id === id);
    const book = user.books.find((book) => book.id === req.params.bookId);
    res.send(book);
  };

  updateBook (req, res) { 
    const id = req.params.userId;
    const user = users.find((user) => user.id === id);
    const book = user.books.find((book) => book.id === req.params.bookId);
    const { bookName } = req.body;
    book.bookName = bookName;
    res.send(bookName)
  };

  deleteBook (req, res ) { 
    const id = req.params.userId;
    const user = users.find((user) => user.id === id);
    const deleteBookIndex = user.books.findIndex((book) => book.id === req.params.bookId)
    const deletedBook = user.books.splice(deleteBookIndex, 1)[0];
    res.send(deletedBook)
  };

  bookValidate (req, res, next) { 
    const { bookName } = req.body;
    typeof bookName === 'string' ? next() : res.status(404).send('wrong book name');
  }

}


