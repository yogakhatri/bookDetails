import { Column, Table, BelongsToMany, CreatedAt, UpdatedAt, Model } from "sequelize-typescript";
import Author from "./Author.model";
import BookAuthor from "./BookAuthor.model";

@Table
export default class Book extends Model<Book> {

  @Column
  title!: string;

  @Column
  publicationYear!: number;

  @Column
  language!: string;

  @Column
  subject!: string;

  @CreatedAt
  creationDate!: Date;

  @UpdatedAt
  updatedOn!: Date;

  @BelongsToMany(() => Author, () => BookAuthor)
  authors!: Author[];
}