"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomRepository = void 0;
const typeorm_1 = require("typeorm");
const room_entity_1 = require("./room.entity");
let RoomRepository = class RoomRepository extends typeorm_1.Repository {
};
RoomRepository = __decorate([
    (0, typeorm_1.EntityRepository)(room_entity_1.Room)
], RoomRepository);
exports.RoomRepository = RoomRepository;
//# sourceMappingURL=room.repository.js.map