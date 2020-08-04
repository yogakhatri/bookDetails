import { Request, Response, NextFunction } from "express";
import AuthorRepo from '../repositories/author.repo';

export class AuthorController {

    getAllAuthors(req: Request, res: Response, next: NextFunction) {
        AuthorRepo.getAllAuthors()
            .then(result => res.json(result))
            .catch(err => console.log("error while fetching all Authors"))
    }

    addAuthors(req: Request, res: Response, next: NextFunction) {
        AuthorRepo.addAuthor(req.body)
            .then(result =>{
                return res.json(result)})
            .catch(err => console.log("error while adding author"))
    }

    getAuthorById(req: Request, res: Response, next: NextFunction) {
        AuthorRepo.getAuthorById(req.params.id)
            .then(result => res.json(result))
            .catch(err => console.log("error while fetching author with id " + req.params.id))
    }
}