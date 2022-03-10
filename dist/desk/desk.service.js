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
exports.DeskService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const desk_repository_1 = require("./desk.repository");
const room_service_1 = require("../room/room.service");
const user_service_1 = require("../user/user.service");
let DeskService = class DeskService {
    constructor(deskRepository, roomService, userService) {
        this.deskRepository = deskRepository;
        this.roomService = roomService;
        this.userService = userService;
    }
    async getAllDesks() {
        return await this.deskRepository.find();
    }
    async getDesksByRoom(deskByRoomDto) {
        const { room_id } = deskByRoomDto;
        const room = await this.roomService.getRoomById(room_id);
        return await this.deskRepository.find({
            where: {
                room: room,
            },
        });
    }
    async getDeskById(id) {
        const found = await this.deskRepository.findOne(id);
        if (!found) {
            throw new common_1.NotFoundException(`Desk with ID: ${id} was not found`);
        }
        return found;
    }
    async assignUserToDesk(assignUserDto) {
        const { id, user_id } = assignUserDto;
        const desk = await this.getDeskById(id);
        desk.user = await this.userService.findUserById(user_id);
        try {
            await this.deskRepository.save(desk);
        }
        catch (error) {
            throw new common_1.ConflictException(error);
        }
    }
    async registerDesk(registerDeskDto) {
        const { room_id } = registerDeskDto;
        const room = await this.roomService.getRoomById(room_id);
        const desk = this.deskRepository.create({
            room: room,
        });
        try {
            await this.deskRepository.save(desk);
        }
        catch (error) {
            throw new common_1.ConflictException(error);
        }
    }
    async updateDesk(updateDeskDto) {
        const { id, room_id } = updateDeskDto;
        const desk = await this.getDeskById(id);
        if (room_id)
            desk.room = await this.roomService.getRoomById(room_id);
        try {
            await this.deskRepository.save(desk);
        }
        catch (error) {
            throw new common_1.ConflictException(error);
        }
    }
    async deleteDesk(deleteDeskDto) {
        const { id } = deleteDeskDto;
        const desk = await this.getDeskById(id);
        try {
            await this.deskRepository.delete(desk);
        }
        catch (error) {
            throw new common_1.ConflictException(error);
        }
    }
};
DeskService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(desk_repository_1.DeskRepository)),
    __metadata("design:paramtypes", [desk_repository_1.DeskRepository,
        room_service_1.RoomService,
        user_service_1.UserService])
], DeskService);
exports.DeskService = DeskService;
//# sourceMappingURL=desk.service.js.map