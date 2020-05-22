import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
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

  @ManyToOne((type) => Events, (events) => events.event_id)
  @JoinColumn()
  event_id: Events;
  
  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
