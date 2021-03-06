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
exports.Desk = void 0;
const typeorm_1 = require("typeorm");
const room_entity_1 = require("../room/room.entity");
const user_entity_1 = require("../user/user.entity");
const desk_features_list_entity_1 = require("./desk-features-list/desk-features-list.entity");
let Desk = class Desk {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Desk.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => user_entity_1.User, { eager: true, nullable: true }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", user_entity_1.User)
], Desk.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => room_entity_1.Room, (room) => room.desk),
    __metadata("design:type", room_entity_1.Room)
], Desk.prototype, "room", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => desk_features_list_entity_1.DeskFeaturesList, (deskFeaturesList) => deskFeaturesList.desk, { eager: true }),
    __metadata("design:type", Array)
], Desk.prototype, "deskFeaturesList", void 0);
Desk = __decorate([
    (0, typeorm_1.Entity)()
], Desk);
exports.Desk = Desk;
//# sourceMappingURL=desk.entity.js.map