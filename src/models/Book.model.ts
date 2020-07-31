import { Column, Table, BelongsToMany,PrimaryKey, CreatedAt, UpdatedAt,Model } from "sequelize-typescript";
import { Author } from "./Author.model";
import { BookAuthor } from "./BookAuthor.model";
import Sequelize from '../sequelize'

@Table
export class Book extends Model<Book> {

  @PrimaryKey
  @Column
  id!: string;

  @CreatedAt
  creationDate!: Date;

  @UpdatedAt
  updatedOn!: Date;


  @Column
  title!: string;

  @Column
  publicationYear!: number;

  @Column
  language!: string;

  @Column
  subject!: string;

  @BelongsToMany(() => Author, () => BookAuthor)
  authors!: Author[];
}

// Sequelize.addModels([Book])