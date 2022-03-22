import { DeskFeaturesService } from './deskFeatures.service';
import { AddDeskFeatureDto, DeleteDeskFeatureDto, UpdateDeskFeatureDto } from './dto/desk.feaatures.dto';
import { DeskFeature } from './deskFeatures.entity';
export declare class DeskFeaturesController {
    private deskFeaturesService;
    constructor(deskFeaturesService: DeskFeaturesService);
    getAllDeskFeatures(): Promise<DeskFeature[]>;
    addDeskFeature(addDeskFeatureDto: AddDeskFeatureDto): Promise<void>;
    updateDeskFeature(updateDeskFeatureDto: UpdateDeskFeatureDto): Promise<void>;
    deleteDeskFeature(deleteDeskFeatureDto: DeleteDeskFeatureDto): Promise<void>;
}
