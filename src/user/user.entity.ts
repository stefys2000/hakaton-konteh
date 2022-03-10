import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Desk } from '../desk/desk.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  user_id: string;

  @Column()
  user_first_name: string;

  @Column()
  user_last_name: string;

  @Column({ unique: true })
  user_username: string;

  @Column()
  user_password: string;

  @OneToOne(() => Desk)
  @JoinColumn()
  desk: Desk;
}
