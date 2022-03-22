import { EntityRepository, Repository } from 'typeorm';
import { RoomFeaturesList } from './room-features-list.entity';

@EntityRepository(RoomFeaturesList)
export class RoomFeaturesListRepository extends Repository<RoomFeaturesList> {}
