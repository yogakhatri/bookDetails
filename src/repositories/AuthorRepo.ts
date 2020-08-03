import Authors from '../models/Author.model';

class AuthorRepo {
    constructor() { }

    getAllAuthors() {
        console.log("Getting all Authors List")
        return Authors.findAll()
    }

    addAuthor(authorDetails){
        console.log("inserting author details "+ authorDetails)
        return Authors.create(authorDetails)
    }
}

export default new AuthorRepo();