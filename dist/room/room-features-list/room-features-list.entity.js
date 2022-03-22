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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomFeaturesList = void 0;
const typeorm_1 = require("typeorm");
const room_entity_1 = require("../room.entity");
const roomFeatures_entity_1 = require("../roomFeatures/roomFeatures.entity");
let RoomFeaturesList = class RoomFeaturesList {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], RoomFeaturesList.prototype, "room_feature_list_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => room_entity_1.Room, (room) => room.roomFeaturesList),
    __metadata("design:type", room_entity_1.Room)
], RoomFeaturesList.prototype, "room", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => roomFeatures_entity_1.RoomFeature, (roomFeature) => roomFeature.roomFeaturesList, {
        eager: true,
    }),
    __metadata("design:type", roomFeatures_entity_1.RoomFeature)
], RoomFeaturesList.prototype, "roomFeature", void 0);
RoomFeaturesList = __decorate([
    (0, typeorm_1.Entity)()
], RoomFeaturesList);
exports.RoomFeaturesList = RoomFeaturesList;
//# sourceMappingURL=room-features-list.entity.js.map