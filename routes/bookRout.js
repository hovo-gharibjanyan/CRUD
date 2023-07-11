import express from "express";
import { BookController } from "../controller/bookController.js";
const booksRouter = express.Router();
const bookController = new BookController();

booksRouter
    .route('/users/:userId/books')
    .post(bookController.bookValidate,bookController.createBook)
    .get(bookController.getBooks)

booksRouter
    .route('/users/:userId/books/:bookId')
    .get(bookController.getBookById)
    .put(bookController.bookValidate,bookController.updateBook)
    .delete(bookController.deleteBook);
    
export {booksRouter}
