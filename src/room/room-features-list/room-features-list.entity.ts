import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Room } from '../room.entity';
import { RoomFeature } from '../roomFeatures/roomFeatures.entity';

@Entity()
export class RoomFeaturesList {
  @PrimaryGeneratedColumn('uuid')
  room_feature_list_id: string;

  @ManyToOne(() => Room, (room) => room.roomFeaturesList)
  room: Room;

  @ManyToOne(() => RoomFeature, (roomFeature) => roomFeature.roomFeaturesList, {
    eager: true,
  })
  roomFeature: RoomFeature;
}
