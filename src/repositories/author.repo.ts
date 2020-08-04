import { Author } from '../models';
import sequelize from '../sequelize'

class AuthorRepo {
    constructor() { }

    getAllAuthors() {
        console.log("Getting all Authors List")
        return Author.findAll()
    }

    addAuthor(authorDetails) {
        console.log("inserting author details " + authorDetails)
        return Author.create(authorDetails)
    }

    getAuthorById(id) {
        console.log("Getting author with ID " + id)
        return sequelize.query(`SELECT authors.id, authors.name, authors.nationality, authors.birthYear, books.title FROM authors LEFT JOIN bookauthors ON authors.id = bookauthors.authorId  LEFT JOIN books ON bookauthors.bookId = books.id where authors.id=${id}`)
    }
}

export default new AuthorRepo();