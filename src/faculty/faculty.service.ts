import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FacultyRepository } from './faculty.repository';
import { Faculty } from './faculty.entity';
import { RegisterFacultyDto, UpdateFacultyDto } from './dto/faculty.dto';

@Injectable()
export class FacultyService {
  constructor(
    @InjectRepository(FacultyRepository)
    private facultyRepository: FacultyRepository,
  ) {}

  async getAllFaculties(): Promise<Faculty[]> {
    return await this.facultyRepository.find();
  }

  async getFacultyById(id: string): Promise<Faculty> {
    const found = await this.facultyRepository.findOne(id);
    if (!found) {
      throw new NotFoundException(`Faculty with ID: ${id} was not found`);
    }
    return found;
  }

  async registerFaculty(registerFacultyDto: RegisterFacultyDto): Promise<void> {
    const { name, opens, closes } = registerFacultyDto;
    const faculty = this.facultyRepository.create({
      name: name,
      opens: opens,
      closes: closes,
    });

    try {
      await this.facultyRepository.save(faculty);
    } catch (error) {
      throw new ConflictException(error);
    }
  }

  async updateFaculty(updateFacultyDto: UpdateFacultyDto): Promise<void> {
    const { id, name, opens, closes } = updateFacultyDto;

    const faculty = await this.getFacultyById(id);
    if (name) faculty.name = name;
    if (opens) faculty.opens = opens;
    if (closes) faculty.closes = closes;
    try {
      await this.facultyRepository.save(faculty);
    } catch (error) {
      throw new ConflictException(error);
    }
  }
}
