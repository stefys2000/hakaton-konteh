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
const deskFeatures_service_1 = require("./deskFeatures.service");
const deskFeatures_dto_1 = require("./dto/deskFeatures.dto");
let DeskFeaturesController = class DeskFeaturesController {
    constructor(deskFeaturesService) {
        this.deskFeaturesService = deskFeaturesService;
    }
    async getAllDeskFeatures() {
        return await this.deskFeaturesService.getAllDeskFeatures();
    }
    async addDeskFeature(addDeskFeatureDto) {
        return await this.deskFeaturesService.addDeskFeature(addDeskFeatureDto);
    }
    async updateDeskFeature(updateDeskFeatureDto) {
        return await this.deskFeaturesService.updateDeskFeature(updateDeskFeatureDto);
    }
    async deleteDeskFeature(deleteDeskFeatureDto) {
        return await this.deskFeaturesService.deleteDeskFeature(deleteDeskFeatureDto);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DeskFeaturesController.prototype, "getAllDeskFeatures", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [deskFeatures_dto_1.AddDeskFeatureDto]),
    __metadata("design:returntype", Promise)
], DeskFeaturesController.prototype, "addDeskFeature", null);
__decorate([
    (0, common_1.Patch)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [deskFeatures_dto_1.UpdateDeskFeatureDto]),
    __metadata("design:returntype", Promise)
], DeskFeaturesController.prototype, "updateDeskFeature", null);
__decorate([
    (0, common_1.Delete)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [deskFeatures_dto_1.DeleteDeskFeatureDto]),
    __metadata("design:returntype", Promise)
], DeskFeaturesController.prototype, "deleteDeskFeature", null);
DeskFeaturesController = __decorate([
    (0, common_1.Controller)('deskFeatures'),
    __metadata("design:paramtypes", [deskFeatures_service_1.DeskFeaturesService])
], DeskFeaturesController);
exports.DeskFeaturesController = DeskFeaturesController;
//# sourceMappingURL=deskFeatures.controller.js.map