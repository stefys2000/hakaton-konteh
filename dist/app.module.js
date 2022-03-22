"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_module_1 = require("./user/user.module");
const room_module_1 = require("./room/room.module");
const faculty_module_1 = require("./faculty/faculty.module");
const desk_module_1 = require("./desk/desk.module");
const deskFeatures_controller_1 = require("./desk/deskFeatures/deskFeatures.controller");
const deskFeatures_module_1 = require("./desk/deskFeatures/deskFeatures.module");
const roomFeatures_module_1 = require("./room/roomFeatures/roomFeatures.module");
const room_features_list_module_1 = require("./room/room-features-list/room-features-list.module");
const desk_features_list_module_1 = require("./desk/desk-features-list/desk-features-list.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'postgres',
                password: 'root',
                database: 'hakaton-test',
                autoLoadEntities: true,
                synchronize: true,
            }),
            user_module_1.UserModule,
            room_module_1.RoomModule,
            faculty_module_1.FacultyModule,
            desk_module_1.DeskModule,
            deskFeatures_module_1.DeskFeaturesModule,
            roomFeatures_module_1.RoomFeaturesModule,
            room_features_list_module_1.RoomFeaturesListModule,
            desk_features_list_module_1.DeskFeaturesListModule,
        ],
        controllers: [deskFeatures_controller_1.DeskFeaturesController],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map