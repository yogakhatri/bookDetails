import { Application } from 'express'
import AuthorController from './controllers/AuthorController'
import BookController from './controllers/BookController'

export default class Routes {
    authorController = new AuthorController();
    bookController = new BookController();

    constructor(app: Application) {

        // Routes for Authors
        app.get('/api/authors/', this.authorController.getAllAuthors)
        app.post('/api/addAuthor', this.authorController.addAuthors)
        app.get('/api/authors/:id', this.authorController.getAuthorById)

        // Routes for Books
        app.get('/api/books/', this.bookController.getAllBooks)
        app.post('/api/addBook', this.bookController.addBook)
        app.get('/api/books/:id', this.bookController.getBooksById)
    }
}