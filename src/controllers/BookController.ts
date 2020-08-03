import { Request, Response, NextFunction } from "express";
import BookRepo from '../repositories/BookRepo';

export default class BookController {

    getAllBooks(req: Request, res: Response, next: NextFunction) {
        BookRepo.getAllBooks()
            .then(result => res.json(result))
            .catch(err => console.log("error while fetching all books"))
    }

    addBook(req: Request, res: Response, next: NextFunction) {
        BookRepo.addBook(req.body)
            .then(result => res.json(result))
            .catch(err => console.log("error while adding book"))
    }
}