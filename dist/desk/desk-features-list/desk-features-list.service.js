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
exports.DeskFeaturesListService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const desk_features_list_repository_1 = require("./desk-features-list.repository");
const desk_service_1 = require("../desk.service");
const deskFeatures_service_1 = require("../deskFeatures/deskFeatures.service");
let DeskFeaturesListService = class DeskFeaturesListService {
    constructor(deskFeaturesListRepository, deskService, deskFeaturesService) {
        this.deskFeaturesListRepository = deskFeaturesListRepository;
        this.deskService = deskService;
        this.deskFeaturesService = deskFeaturesService;
    }
    async assignFeatureToDesk(addFeatureToDeskDto) {
        const { desk_id, desk_feature_id } = addFeatureToDeskDto;
        const desk = await this.deskService.getDeskById(desk_id);
        const deskFeature = await this.deskFeaturesService.getDeskFeatureById(desk_feature_id);
        const featureToDesk = this.deskFeaturesListRepository.create({
            desk: desk,
            deskFeature: deskFeature,
        });
        try {
            await this.deskFeaturesListRepository.save(featureToDesk);
        }
        catch (error) {
            throw new common_1.ConflictException(error);
        }
    }
};
DeskFeaturesListService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(desk_features_list_repository_1.DeskFeaturesListRepository)),
    __metadata("design:paramtypes", [desk_features_list_repository_1.DeskFeaturesListRepository,
        desk_service_1.DeskService,
        deskFeatures_service_1.DeskFeaturesService])
], DeskFeaturesListService);
exports.DeskFeaturesListService = DeskFeaturesListService;
//# sourceMappingURL=desk-features-list.service.js.map