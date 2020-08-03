import Book from '../models/Book.model'
import Author from '../models/Author.model'
import sequelize from '../sequelize'

function seeding() {
    const books: object[] = require('./books.json')
    const authors: object[] = require('./authors.json')

    sequelize.sync({force:true})
        .then(() => Book.bulkCreate(books))
        .then(()=> Author.bulkCreate(authors))
        .then(()=>console.log("Seeding done successfully"))
}
seeding()
