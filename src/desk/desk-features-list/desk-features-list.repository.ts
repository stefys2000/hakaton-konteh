import { EntityRepository, Repository } from 'typeorm';
import { DeskFeaturesList } from './desk-features-list.entity';

@EntityRepository(DeskFeaturesList)
export class DeskFeaturesListRepository extends Repository<DeskFeaturesList> {}
