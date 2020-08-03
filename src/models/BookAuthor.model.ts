import { Model, Column, Table, ForeignKey } from "sequelize-typescript";
import  Author  from "./Author.model";
import  Book  from "./Book.model";

@Table
export default class BookAuthor extends Model<BookAuthor> {

    @ForeignKey(() => Book)
    @Column({unique:"book_author"})
    bookId!: number;

    @ForeignKey(() => Author)
    @Column({unique:"book_author"})
    authorId!: number;
}