import { EntityRepository, Repository } from 'typeorm';
import { RoomFeature } from './roomFeatures.entity';

@EntityRepository(RoomFeature)
export class RoomFeaturesRepository extends Repository<RoomFeature> {}
