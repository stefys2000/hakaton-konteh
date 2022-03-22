import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { RoomFeaturesList } from '../room-features-list/room-features-list.entity';

@Entity()
export class RoomFeature {
  @PrimaryGeneratedColumn('uuid')
  room_feature_id: string;

  @Column()
  room_feature_name: string;

  @OneToMany(
    () => RoomFeaturesList,
    (roomFeaturesList) => roomFeaturesList.roomFeature,
  )
  roomFeaturesList: RoomFeaturesList[];
}
