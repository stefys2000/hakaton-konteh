import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { DeskFeaturesList } from '../desk-features-list/desk-features-list.entity';

@Entity()
export class DeskFeature {
  @PrimaryGeneratedColumn('uuid')
  desk_feature_id: string;

  @Column()
  desk_feature_name: string;

  @OneToMany(
    () => DeskFeaturesList,
    (deskFeaturesList) => deskFeaturesList.deskFeature,
  )
  deskFeaturesList: DeskFeaturesList[];
}
