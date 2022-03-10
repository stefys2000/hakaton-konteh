import { FacultyRepository } from './faculty.repository';
import { Faculty } from './faculty.entity';
import { RegisterFacultyDto, UpdateFacultyDto } from './dto/faculty.dto';
export declare class FacultyService {
    private facultyRepository;
    constructor(facultyRepository: FacultyRepository);
    getAllFaculties(): Promise<Faculty[]>;
    getFacultyById(id: string): Promise<Faculty>;
    registerFaculty(registerFacultyDto: RegisterFacultyDto): Promise<void>;
    updateFaculty(updateFacultyDto: UpdateFacultyDto): Promise<void>;
}
