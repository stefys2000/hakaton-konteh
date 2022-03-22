import { DeskFeaturesRepository } from './desk.features.repository';
import { AddDeskFeatureDto, DeleteDeskFeatureDto, UpdateDeskFeatureDto } from './dto/desk.feaatures.dto';
import { DeskFeature } from './desk.features.entity';
export declare class DeskFeaturesService {
    private deskFeaturesRepository;
    constructor(deskFeaturesRepository: DeskFeaturesRepository);
    findDeskFeatureById(desk_feature_id: string): Promise<DeskFeature>;
    addDeskFeature(addDeskFeatureDto: AddDeskFeatureDto): Promise<void>;
    updateDeskFeature(updateDeskFeatureDto: UpdateDeskFeatureDto): Promise<void>;
    deleteDeskFeature(deleteDeskFeatureDto: DeleteDeskFeatureDto): Promise<void>;
}
