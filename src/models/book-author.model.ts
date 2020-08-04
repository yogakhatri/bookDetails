import { Model, Column, Table, ForeignKey } from "sequelize-typescript";
import { Author } from "./author.model";
import { Book } from "./book.model";

@Table
export class BookAuthor extends Model<BookAuthor> {

    @ForeignKey(() => Book)
    @Column({ unique: "book_author" })
    bookId!: number;

    @ForeignKey(() => Author)
    @Column({ unique: "book_author" })
    authorId!: number;
}