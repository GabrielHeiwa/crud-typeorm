import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  JoinColumn,
  ManyToOne,
} from "typeorm";
import { Events } from "./Events";

@Entity()
export class Subscribers {
  @PrimaryGeneratedColumn()
  subscribers_id: number;

  @Column()
  name: string;

  @Column()
  age: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(type => Events, event => event.event_id,{
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
  })
  @JoinColumn({name: "event_id"})
  event_id: Events
}
