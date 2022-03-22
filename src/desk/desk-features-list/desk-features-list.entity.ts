import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Desk } from '../desk.entity';
import { DeskFeature } from '../deskFeatures/deskFeatures.entity';

@Entity()
export class DeskFeaturesList {
  @PrimaryGeneratedColumn('uuid')
  room_feature_list_id: string;

  @ManyToOne(() => Desk, (desk) => desk.deskFeaturesList)
  desk: Desk;

  @ManyToOne(() => DeskFeature, (deskFeature) => deskFeature.deskFeaturesList, {
    eager: true,
  })
  deskFeature: DeskFeature;
}
