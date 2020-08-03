import Book from '../models/Book.model';

class BookRepo {
    getAllBooks() {
        console.log("Getting all Books List")
        return Book.findAll()
    }

    addBook(bookDetails: object) {
        console.log("inserting author details " + bookDetails)
        return Book.create(bookDetails)
    }
}

export default new BookRepo();