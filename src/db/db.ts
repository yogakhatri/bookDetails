import { Sequelize } from 'sequelize'
import { any } from 'sequelize/types/lib/operators';

// Passing parameters separately
export const sequelize = new Sequelize('book_details', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully..');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });