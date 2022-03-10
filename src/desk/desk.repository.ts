import { EntityRepository, Repository } from 'typeorm';
import { Desk } from './desk.entity';

@EntityRepository(Desk)
export class DeskRepository extends Repository<Desk> {}
