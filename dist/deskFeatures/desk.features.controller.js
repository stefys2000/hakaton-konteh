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
exports.DeskFeaturesController = void 0;
const common_1 = require("@nestjs/common");
const desk_features_service_1 = require("./desk.features.service");
const desk_feaatures_dto_1 = require("./dto/desk.feaatures.dto");
let DeskFeaturesController = class DeskFeaturesController {
    constructor(deskFeaturesService) {
        this.deskFeaturesService = deskFeaturesService;
    }
    async addDeskFeature(addDeskFeatureDto) {
        return await this.deskFeaturesService.addDeskFeature(addDeskFeatureDto);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [desk_feaatures_dto_1.AddDeskFeatureDto]),
    __metadata("design:returntype", Promise)
], DeskFeaturesController.prototype, "addDeskFeature", null);
DeskFeaturesController = __decorate([
    (0, common_1.Controller)('desk.features'),
    __metadata("design:paramtypes", [desk_features_service_1.DeskFeaturesService])
], DeskFeaturesController);
exports.DeskFeaturesController = DeskFeaturesController;
//# sourceMappingURL=desk.features.controller.js.map