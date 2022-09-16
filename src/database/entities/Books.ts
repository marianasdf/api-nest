import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity()
export class Books {
  @PrimaryColumn()
  isbn: string;

  @Column()
  type: string;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  author: string;

  @Column()
  tokenAuthenticated: string;

  @Column()
  image: string;

  @Column()
  publishingCompany: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @BeforeInsert()
  setId() {
    const uuidGenerated = uuid();
    this.isbn = uuidGenerated;
  }
}
