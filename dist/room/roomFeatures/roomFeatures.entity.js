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
exports.RoomFeature = void 0;
const typeorm_1 = require("typeorm");
const room_features_list_entity_1 = require("../room-features-list/room-features-list.entity");
let RoomFeature = class RoomFeature {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], RoomFeature.prototype, "room_feature_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], RoomFeature.prototype, "room_feature_name", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => room_features_list_entity_1.RoomFeaturesList, (roomFeaturesList) => roomFeaturesList.roomFeature),
    __metadata("design:type", Array)
], RoomFeature.prototype, "roomFeaturesList", void 0);
RoomFeature = __decorate([
    (0, typeorm_1.Entity)()
], RoomFeature);
exports.RoomFeature = RoomFeature;
//# sourceMappingURL=roomFeatures.entity.js.map