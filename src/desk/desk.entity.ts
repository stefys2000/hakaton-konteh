import {
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Room } from '../room/room.entity';
import { User } from '../user/user.entity';
import { DeskFeaturesList } from './desk-features-list/desk-features-list.entity';

@Entity()
export class Desk {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => User, { eager: true, nullable: true })
  @JoinColumn()
  user: User;

  @ManyToOne(() => Room, (room) => room.desk)
  room: Room;

  @OneToMany(
    () => DeskFeaturesList,
    (deskFeaturesList) => deskFeaturesList.desk,
    { eager: true },
  )
  deskFeaturesList: DeskFeaturesList[];
}
