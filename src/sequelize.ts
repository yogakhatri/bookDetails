import { Sequelize } from 'sequelize-typescript';
import * as path from 'path'


export default new Sequelize({
        database: 'book_details',
        dialect: 'mysql',
        username: 'root',
        password: '',
        host: 'localhost',
        models: [__dirname + '/src/models'],
    })

    
