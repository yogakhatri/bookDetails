import { Sequelize } from 'sequelize-typescript';

export default new Sequelize({
        database: 'book_details',
        dialect: 'mysql',
        username: 'root',
        password: '',
        host: 'localhost',
        models: [__dirname + '/models'],
    })

    
