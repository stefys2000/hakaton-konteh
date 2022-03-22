import { EntityRepository, Repository } from 'typeorm';
import { DeskFeature } from './deskFeatures.entity';

@EntityRepository(DeskFeature)
export class DeskFeaturesRepository extends Repository<DeskFeature> {}
