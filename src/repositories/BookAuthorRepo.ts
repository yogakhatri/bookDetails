import BookAuthor from '../models/BookAuthor.model'

class BookAuthorRepo {  
    addBookAuthor(BookAuthorDetails){
        console.log("In bookAuthor details")
        return BookAuthor.bulkCreate(BookAuthorDetails)
    }
}

export default new BookAuthorRepo();