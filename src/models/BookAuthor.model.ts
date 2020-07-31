import { Model, Column, Table, ForeignKey } from "sequelize-typescript";
import { Author } from "./Author.model";
import { Book } from "./Book.model";
import Sequelize from '../sequelize'

@Table
export class BookAuthor extends Model<BookAuthor> {

    @ForeignKey(() => Book)
    @Column
    bookId!: number;

    @ForeignKey(() => Author)
    @Column
    authorId!: number;
}

// Sequelize.addModels([BookAuthor])