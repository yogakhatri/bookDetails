import sequelize  from './sequelize';
var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World');
})

app.listen(8081,async  function () {
    await sequelize.sync();
})