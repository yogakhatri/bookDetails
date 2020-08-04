import { BelongsToMany, Column, CreatedAt, Model, Table, UpdatedAt } from 'sequelize-typescript';
import { BookAuthor } from './index';
import { Book } from './index';

@Table
export class Author extends Model<Author> {

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