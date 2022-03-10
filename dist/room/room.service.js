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
exports.RoomService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const room_repository_1 = require("./room.repository");
const faculty_service_1 = require("../faculty/faculty.service");
let RoomService = class RoomService {
    constructor(roomRepository, facultyService) {
        this.roomRepository = roomRepository;
        this.facultyService = facultyService;
    }
    async getAllRooms() {
        return await this.roomRepository.find();
    }
    async getRoomsByFaculty(facultyRoomsDto) {
        const { faculty_id } = facultyRoomsDto;
        const faculty = await this.facultyService.getFacultyById(faculty_id);
        return await this.roomRepository.find({
            where: {
                faculty: faculty,
            },
            order: {
                name: 'ASC',
            },
        });
    }
    async getRoomById(id) {
        const found = await this.roomRepository.findOne(id);
        if (!found) {
            throw new common_1.NotFoundException(`Room with ID: ${id} was not found`);
        }
        return found;
    }
    async registerRoom(registerRoomDto) {
        const { name, faculty_id } = registerRoomDto;
        const faculty = await this.facultyService.getFacultyById(faculty_id);
        const room = this.roomRepository.create({
            name: name,
            faculty: faculty,
        });
        try {
            await this.roomRepository.save(room);
        }
        catch (error) {
            throw new common_1.ConflictException(error);
        }
    }
    async updateRoom(updateRoomDto) {
        const { id, name, faculty_id } = updateRoomDto;
        const room = await this.getRoomById(id);
        if (name)
            room.name = name;
        if (faculty_id)
            room.faculty = await this.facultyService.getFacultyById(faculty_id);
        try {
            await this.roomRepository.save(room);
        }
        catch (error) {
            throw new common_1.ConflictException(error);
        }
    }
};
RoomService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(room_repository_1.RoomRepository)),
    __metadata("design:paramtypes", [room_repository_1.RoomRepository,
        faculty_service_1.FacultyService])
], RoomService);
exports.RoomService = RoomService;
//# sourceMappingURL=room.service.js.map