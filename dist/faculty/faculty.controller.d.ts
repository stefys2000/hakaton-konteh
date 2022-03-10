import { FacultyService } from './faculty.service';
import { Faculty } from './faculty.entity';
import { RegisterFacultyDto, UpdateFacultyDto } from './dto/faculty.dto';
export declare class FacultyController {
    private facultyService;
    constructor(facultyService: FacultyService);
    getAllFaculties(): Promise<Faculty[]>;
    registerFaculty(registerFacultyDto: RegisterFacultyDto): Promise<void>;
    updateFaculty(updateFacultyDto: UpdateFacultyDto): Promise<void>;
}
