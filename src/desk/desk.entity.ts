import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Room } from '../room/room.entity';
import { User } from '../user/user.entity';

@Entity()
export class Desk {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => User, { eager: true, nullable: true })
  @JoinColumn()
  user: User;

  @ManyToOne(() => Room, (room) => room.desk)
  room: Room;
}
