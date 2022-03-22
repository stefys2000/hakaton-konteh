"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeskFeaturesModule = void 0;
const common_1 = require("@nestjs/common");
const deskFeatures_service_1 = require("./deskFeatures.service");
const typeorm_1 = require("@nestjs/typeorm");
const user_module_1 = require("../../user/user.module");
const deskFeatures_controller_1 = require("./deskFeatures.controller");
const deskFeatures_repository_1 = require("./deskFeatures.repository");
let DeskFeaturesModule = class DeskFeaturesModule {
};
DeskFeaturesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([deskFeatures_repository_1.DeskFeaturesRepository]), user_module_1.UserModule],
        controllers: [deskFeatures_controller_1.DeskFeaturesController],
        providers: [deskFeatures_service_1.DeskFeaturesService],
        exports: [deskFeatures_service_1.DeskFeaturesService],
    })
], DeskFeaturesModule);
exports.DeskFeaturesModule = DeskFeaturesModule;
//# sourceMappingURL=deskFeatures.module.js.map