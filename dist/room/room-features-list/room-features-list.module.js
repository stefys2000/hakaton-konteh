"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomFeaturesListModule = void 0;
const common_1 = require("@nestjs/common");
const room_features_list_controller_1 = require("./room-features-list.controller");
const room_features_list_service_1 = require("./room-features-list.service");
const typeorm_1 = require("@nestjs/typeorm");
const user_module_1 = require("../../user/user.module");
const room_features_list_repository_1 = require("./room-features-list.repository");
const room_module_1 = require("../room.module");
const roomFeatures_module_1 = require("../roomFeatures/roomFeatures.module");
let RoomFeaturesListModule = class RoomFeaturesListModule {
};
RoomFeaturesListModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([room_features_list_repository_1.RoomFeaturesListRepository]),
            room_module_1.RoomModule,
            roomFeatures_module_1.RoomFeaturesModule,
            user_module_1.UserModule,
        ],
        controllers: [room_features_list_controller_1.RoomFeaturesListController],
        providers: [room_features_list_service_1.RoomFeaturesListService],
        exports: [room_features_list_service_1.RoomFeaturesListService],
    })
], RoomFeaturesListModule);
exports.RoomFeaturesListModule = RoomFeaturesListModule;
//# sourceMappingURL=room-features-list.module.js.map