import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Subscribers } from "./Subscribers";

@Entity()
export class Events {
  @PrimaryGeneratedColumn()
  event_id: number;

  @Column()
  name: string;

  @Column()
  year: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  update_at: Date;

}
