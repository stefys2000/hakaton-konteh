"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacultyService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const faculty_repository_1 = require("./faculty.repository");
let FacultyService = class FacultyService {
    constructor(facultyRepository) {
        this.facultyRepository = facultyRepository;
    }
    async getAllFaculties() {
        return await this.facultyRepository.find();
    }
    async getFacultyById(id) {
        const found = await this.facultyRepository.findOne(id);
        if (!found) {
            throw new common_1.NotFoundException(`Faculty with ID: ${id} was not found`);
        }
        return found;
    }
    async registerFaculty(registerFacultyDto) {
        const { name, opens, closes } = registerFacultyDto;
        const faculty = this.facultyRepository.create({
            name: name,
            opens: opens,
            closes: closes,
        });
        try {
            await this.facultyRepository.save(faculty);
        }
        catch (error) {
            throw new common_1.ConflictException(error);
        }
    }
    async updateFaculty(updateFacultyDto) {
        const { id, name, opens, closes } = updateFacultyDto;
        const faculty = await this.getFacultyById(id);
        if (name)
            faculty.name = name;
        if (opens)
            faculty.opens = opens;
        if (closes)
            faculty.closes = closes;
        try {
            await this.facultyRepository.save(faculty);
        }
        catch (error) {
            throw new common_1.ConflictException(error);
        }
    }
};
FacultyService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(faculty_repository_1.FacultyRepository)),
    __metadata("design:paramtypes", [faculty_repository_1.FacultyRepository])
], FacultyService);
exports.FacultyService = FacultyService;
//# sourceMappingURL=faculty.service.js.map