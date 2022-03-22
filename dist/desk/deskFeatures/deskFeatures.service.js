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
exports.DeskFeaturesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const deskFeatures_repository_1 = require("./deskFeatures.repository");
let DeskFeaturesService = class DeskFeaturesService {
    constructor(deskFeaturesRepository) {
        this.deskFeaturesRepository = deskFeaturesRepository;
    }
    async getAllDeskFeatures() {
        return await this.deskFeaturesRepository.find();
    }
    async getDeskFeatureById(desk_feature_id) {
        const found = await this.deskFeaturesRepository.findOne(desk_feature_id);
        if (!found) {
            throw new common_1.NotFoundException('Desk feature not found');
        }
        return found;
    }
    async addDeskFeature(addDeskFeatureDto) {
        const foundDesk = await this.deskFeaturesRepository.findOne(addDeskFeatureDto);
        console.log(foundDesk);
        if (foundDesk) {
            throw new common_1.BadRequestException('Desk feature already exists');
        }
        const desk = this.deskFeaturesRepository.create(addDeskFeatureDto);
        try {
            await this.deskFeaturesRepository.save(desk);
        }
        catch (error) {
            throw new common_1.ConflictException(error);
        }
    }
    async updateDeskFeature(updateDeskFeatureDto) {
        const { desk_feature_id, desk_feature_name } = updateDeskFeatureDto;
        const desk = await this.getDeskFeatureById(desk_feature_id);
        desk.desk_feature_name = desk_feature_name;
        try {
            await this.deskFeaturesRepository.save(desk);
        }
        catch (error) {
            throw new common_1.ConflictException(error);
        }
    }
    async deleteDeskFeature(deleteDeskFeatureDto) {
        const { desk_feature_id } = deleteDeskFeatureDto;
        const desk = await this.getDeskFeatureById(desk_feature_id);
        try {
            await this.deskFeaturesRepository.delete(desk);
        }
        catch (error) {
            throw new common_1.ConflictException(error);
        }
    }
};
DeskFeaturesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(deskFeatures_repository_1.DeskFeaturesRepository)),
    __metadata("design:paramtypes", [deskFeatures_repository_1.DeskFeaturesRepository])
], DeskFeaturesService);
exports.DeskFeaturesService = DeskFeaturesService;
//# sourceMappingURL=deskFeatures.service.js.map