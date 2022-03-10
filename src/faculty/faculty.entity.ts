import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Room } from '../room/room.entity';

@Entity()
export class Faculty {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  opens: string;

  @Column()
  closes: string;

  @OneToMany(() => Room, (room) => room.faculty, { eager: true })
  room: Room[];
}
