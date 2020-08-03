import { BelongsToMany, Column, CreatedAt, Model, Table, UpdatedAt } from 'sequelize-typescript';
import BookAuthor from './BookAuthor.model';
import Book from './Book.model';

@Table
export default class Author extends Model<Author> {

    @Column
    name!: string;

    @Column
    birthYear!: number;

    @Column
    nationality!: string;

    @CreatedAt
    creationDate!: Date;

    @UpdatedAt
    updatedOn!: Date;

    @BelongsToMany(() => Book, () => BookAuthor)
    books!: Book[];
}