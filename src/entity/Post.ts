import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  CreateDateColumn,
  JoinColumn,
  ManyToOne,
} from "typeorm";

import { User } from "../entity/User";

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: Number;

  @Column()
  title: String;

  @Column()
  description: String;

  @CreateDateColumn()
  create_at: Date;

  @UpdateDateColumn()
  udpate_at: Date;
  
  @ManyToOne(type => User, user => user.id)
  @JoinColumn()
  user: User;

}
