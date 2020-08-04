import { Book } from '../models';
import sequelize from '../sequelize'

class BookRepo {
    getAllBooks() {
        console.log("Getting all Books List")
        return Book.findAll()
    }

    addBook(bookDetails: object) {
        console.log(bookDetails)
        return Book.create(bookDetails)
    }

    getBookById(id) {
        console.log("Getting book with ID " + id)
        return sequelize.query(`SELECT books.id, books.title, books.publicationYear, books.language, books.subject, authors.name FROM books LEFT JOIN bookauthors ON books.id = bookauthors.bookId  LEFT JOIN authors ON bookauthors.authorId = authors.id where books.id=${id}`)
    }
}

export default new BookRepo();