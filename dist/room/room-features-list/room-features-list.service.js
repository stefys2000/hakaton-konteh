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
exports.RoomFeaturesListService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const room_features_list_repository_1 = require("./room-features-list.repository");
const room_service_1 = require("../room.service");
const roomFeatures_service_1 = require("../roomFeatures/roomFeatures.service");
let RoomFeaturesListService = class RoomFeaturesListService {
    constructor(roomFeaturesListRepository, roomService, roomFeaturesService) {
        this.roomFeaturesListRepository = roomFeaturesListRepository;
        this.roomService = roomService;
        this.roomFeaturesService = roomFeaturesService;
    }
    async assignFeatureToRoom(addFeatureToRoomDto) {
        const { room_id, room_feature_id } = addFeatureToRoomDto;
        const room = await this.roomService.getRoomById(room_id);
        const roomFeature = await this.roomFeaturesService.getRoomFeatureById(room_feature_id);
        const featureToRoom = this.roomFeaturesListRepository.create({
            room: room,
            roomFeature: roomFeature,
        });
        try {
            await this.roomFeaturesListRepository.save(featureToRoom);
        }
        catch (error) {
            throw new common_1.ConflictException(error);
        }
    }
};
RoomFeaturesListService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(room_features_list_repository_1.RoomFeaturesListRepository)),
    __metadata("design:paramtypes", [room_features_list_repository_1.RoomFeaturesListRepository,
        room_service_1.RoomService,
        roomFeatures_service_1.RoomFeaturesService])
], RoomFeaturesListService);
exports.RoomFeaturesListService = RoomFeaturesListService;
//# sourceMappingURL=room-features-list.service.js.map