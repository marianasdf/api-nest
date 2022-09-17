import {
  Entity,
  Column,
  BeforeInsert,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity({
  name: 'users',
})
export class User {
  @PrimaryColumn()
  id: string;

  @Column()
  email: string;

  @Column()
  name: string;

  @Column()
  password: string;

  @CreateDateColumn()
  created_at?: Date;

  @UpdateDateColumn()
  updated_at?: Date;

  @BeforeInsert()
  setId() {
    const uuidGenerated = uuid();
    this.id = uuidGenerated;
  }
}
