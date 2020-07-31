import { sequelize } from './db/db';
import{} from './models/Author.model'
var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World');
})

app.listen(8081,async  function () {
    console.log(sequelize)
    await sequelize.sync();
})