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
exports.DeskFeaturesList = void 0;
const typeorm_1 = require("typeorm");
const desk_entity_1 = require("../desk.entity");
const deskFeatures_entity_1 = require("../deskFeatures/deskFeatures.entity");
let DeskFeaturesList = class DeskFeaturesList {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], DeskFeaturesList.prototype, "room_feature_list_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => desk_entity_1.Desk, (desk) => desk.deskFeaturesList),
    __metadata("design:type", desk_entity_1.Desk)
], DeskFeaturesList.prototype, "desk", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => deskFeatures_entity_1.DeskFeature, (deskFeature) => deskFeature.deskFeaturesList, {
        eager: true,
    }),
    __metadata("design:type", deskFeatures_entity_1.DeskFeature)
], DeskFeaturesList.prototype, "deskFeature", void 0);
DeskFeaturesList = __decorate([
    (0, typeorm_1.Entity)()
], DeskFeaturesList);
exports.DeskFeaturesList = DeskFeaturesList;
//# sourceMappingURL=desk-features-list.entity.js.map