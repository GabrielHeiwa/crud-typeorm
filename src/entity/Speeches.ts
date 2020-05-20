import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Events } from "./Events";

@Entity()
export class Speeches {
  @PrimaryGeneratedColumn()
  speeches_id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  schedule: string;

  @Column()
  date: Date;

  @Column()
  author: string;

  @ManyToOne((type) => Events, (events) => events.event_id)
  @JoinColumn()
  event_id: Events;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
