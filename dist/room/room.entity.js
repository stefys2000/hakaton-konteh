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
exports.Room = void 0;
const typeorm_1 = require("typeorm");
const faculty_entity_1 = require("../faculty/faculty.entity");
const desk_entity_1 = require("../desk/desk.entity");
const room_features_list_entity_1 = require("./room-features-list/room-features-list.entity");
let Room = class Room {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Room.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Room.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => faculty_entity_1.Faculty, (faculty) => faculty.room),
    __metadata("design:type", faculty_entity_1.Faculty)
], Room.prototype, "faculty", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => desk_entity_1.Desk, (desk) => desk.room, { eager: true }),
    __metadata("design:type", Array)
], Room.prototype, "desk", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => room_features_list_entity_1.RoomFeaturesList, (roomFeaturesList) => roomFeaturesList.room, { eager: true }),
    __metadata("design:type", Array)
], Room.prototype, "roomFeaturesList", void 0);
Room = __decorate([
    (0, typeorm_1.Entity)()
], Room);
exports.Room = Room;
//# sourceMappingURL=room.entity.js.map