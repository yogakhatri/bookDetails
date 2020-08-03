import * as dotenv from "dotenv"
dotenv.config()
import sequelize from './src/sequelize'
import express from "express";
import { Application } from 'express'
import Server from './src/index'

sequelize
const app: Application = express();
const server: Server = new Server(app);
const PORT: Number = parseInt(<string>process.env.PORT) || 3000

app.listen(PORT, "localhost", (err: any) => {
    if (err) return err;
    console.log(`server running on Port ${PORT}`)
})
