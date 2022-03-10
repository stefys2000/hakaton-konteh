import { EntityRepository, Repository } from 'typeorm';
import { Faculty } from './faculty.entity';

@EntityRepository(Faculty)
export class FacultyRepository extends Repository<Faculty> {}
