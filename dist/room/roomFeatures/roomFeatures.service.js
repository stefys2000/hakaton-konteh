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
exports.RoomFeaturesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const roomFeatures_repository_1 = require("./roomFeatures.repository");
let RoomFeaturesService = class RoomFeaturesService {
    constructor(roomFeaturesRepository) {
        this.roomFeaturesRepository = roomFeaturesRepository;
    }
    async getAllRoomFeatures() {
        return await this.roomFeaturesRepository.find();
    }
    async getRoomFeatureById(room_feature_id) {
        const found = await this.roomFeaturesRepository.findOne(room_feature_id);
        if (!found) {
            throw new common_1.NotFoundException('Room feature not found');
        }
        return found;
    }
    async addRoomFeature(addRoomFeatureDto) {
        const foundRoom = await this.roomFeaturesRepository.findOne(addRoomFeatureDto);
        if (foundRoom) {
            throw new common_1.BadRequestException('Room feature already exists');
        }
        const room = this.roomFeaturesRepository.create(addRoomFeatureDto);
        try {
            await this.roomFeaturesRepository.save(room);
        }
        catch (error) {
            throw new common_1.ConflictException(error);
        }
    }
    async updateRoomFeaeture(updateRoomFeatureDto) {
        const { room_feature_id, room_feature_name } = updateRoomFeatureDto;
        const room = await this.getRoomFeatureById(room_feature_id);
        room.room_feature_name = room_feature_name;
        try {
            await this.roomFeaturesRepository.save(room);
        }
        catch (error) {
            throw new common_1.ConflictException(error);
        }
    }
    async deleteRoomFeature(deleteRoomFeatureDto) {
        const { room_feature_id } = deleteRoomFeatureDto;
        const room = await this.getRoomFeatureById(room_feature_id);
        try {
            await this.roomFeaturesRepository.delete(room);
        }
        catch (error) {
            throw new common_1.ConflictException(error);
        }
    }
};
RoomFeaturesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(roomFeatures_repository_1.RoomFeaturesRepository)),
    __metadata("design:paramtypes", [roomFeatures_repository_1.RoomFeaturesRepository])
], RoomFeaturesService);
exports.RoomFeaturesService = RoomFeaturesService;
//# sourceMappingURL=roomFeatures.service.js.map