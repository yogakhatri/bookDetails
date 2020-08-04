import { Request, Response, NextFunction } from "express";
import BookRepo from '../repositories/book.repo';
import BookAuthorRepo from '../repositories/book-author.repo'
var _ = require('lodash');

export class BookController {

    getAllBooks(req: Request, res: Response, next: NextFunction) {
        BookRepo.getAllBooks()
            .then(result => res.json(result))
            .catch(err => console.log("error while fetching all books"))
    }

    addBook(req: Request, res: Response, next: NextFunction) {
        BookRepo.addBook(req.body.bookDetails)
            .then(result => {
                const id = result.dataValues.id
                const obj = _.map(req.body.authors, authorId => ({ "bookId": id, "authorId": authorId }))

                BookAuthorRepo.addBookAuthor(obj)
                return res.json(result)
            })
            .catch(err => console.log("error while adding book"))
    }

    getBooksById(req: Request, res: Response, next: NextFunction) {
        BookRepo.getBookById(req.params.id)
            .then(result => res.json(result))
            .catch(err => console.log("error while fetching book id - " + req.params.id))
    }
}