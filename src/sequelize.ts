import { Sequelize } from 'sequelize-typescript';
import { Author, Book, BookAuthor } from './models'
const sequelize = new Sequelize({
    database: 'book_details',
    dialect: 'mysql',
    username: 'root',
    password: '',
    host: 'localhost',
    models: [Author, Book, BookAuthor],
})

export default sequelize