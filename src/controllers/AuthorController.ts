import { Request, Response, NextFunction } from "express";
import AuthorRepo from '../repositories/AuthorRepo';

export default class BookController {

    getAllAuthors(req: Request, res: Response, next: NextFunction) {
        AuthorRepo.getAllAuthors()
            .then(result => res.json(result))
            .catch(err => console.log("error while fetching all Authors"))
    }

    addAuthors(req: Request, res: Response, next: NextFunction) {
        AuthorRepo.addAuthor(req.body)
            .then(result => res.json(result))
            .catch(err => console.log("error while adding author"))
    }
}