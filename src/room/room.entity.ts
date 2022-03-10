import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Faculty } from '../faculty/faculty.entity';
import { Desk } from '../desk/desk.entity';

@Entity()
export class Room {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @ManyToOne(() => Faculty, (faculty) => faculty.room)
  faculty: Faculty;

  @OneToMany(() => Desk, (desk) => desk.room, { eager: true })
  desk: Desk[];
}
