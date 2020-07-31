import { BelongsToMany, Column, CreatedAt, Model, Table, UpdatedAt, PrimaryKey } from 'sequelize-typescript';
import { BookAuthor } from './BookAuthor.model';
import { Book } from './Book.model';
import {sequelize} from '../db/sequelize'

@Table
export class Author extends Model<Author> {
   
    @PrimaryKey
    @Column
    id!: string;

    @CreatedAt
    creationDate!: Date;

    @UpdatedAt
    updatedOn!: Date;

    @BelongsToMany(() => Book, () => BookAuthor)
    @Column
    books!: Book[];

    @Column
    birthYear!: number;

    @Column
    nationality!: number
}
