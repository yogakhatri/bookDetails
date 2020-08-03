import { Sequelize } from 'sequelize-typescript';

const sequelize = new Sequelize({
    database: 'book_details',
    dialect: 'mysql',
    username: 'root',
    password: '',
    host: 'localhost',
    models: [__dirname + '/models'],
})

export default sequelize