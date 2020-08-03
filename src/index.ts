// import sequelize  from './sequelize';
// var express = require('express');
// var app = express();

// app.get('/', function (req, res) {
//     res.send('Hello World');
// })

// app.listen(8081,async  function () {
//     await sequelize.sync();
// })
import { Application } from "express";
import * as bodyParser from "body-parser";
import morgan from "morgan";
import * as winston from "winston";
import * as fs from "fs";
import * as path from "path";
import { WriteStream } from "fs";
import Routes from './routes';

export default class Server {
    constructor(app: Application) {
        this.config(app);
        new Routes(app);
    }
    public config(app: Application): void {
        const accessLogStream: WriteStream = fs.createWriteStream(
            path.join(__dirname, "./logs/access.log"),
            { flags: "a" }
        );
        app.use(morgan("combined", { stream: accessLogStream }));
        app.use(bodyParser.json());

    }
}

process.on("beforeExit", function (err) {
    console.log("wintson is running");
    winston.error(JSON.stringify(err));
    console.error(err);
});
