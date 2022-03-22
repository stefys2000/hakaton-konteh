import { DeskFeaturesRepository } from './deskFeatures.repository';
import { AddDeskFeatureDto, DeleteDeskFeatureDto, UpdateDeskFeatureDto } from './dto/deskFeatures.dto';
import { DeskFeature } from './deskFeatures.entity';
export declare class DeskFeaturesService {
    private deskFeaturesRepository;
    constructor(deskFeaturesRepository: DeskFeaturesRepository);
    getAllDeskFeatures(): Promise<DeskFeature[]>;
    getDeskFeatureById(desk_feature_id: string): Promise<DeskFeature>;
    addDeskFeature(addDeskFeatureDto: AddDeskFeatureDto): Promise<void>;
    updateDeskFeature(updateDeskFeatureDto: UpdateDeskFeatureDto): Promise<void>;
    deleteDeskFeature(deleteDeskFeatureDto: DeleteDeskFeatureDto): Promise<void>;
}
